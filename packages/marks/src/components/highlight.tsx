import { YooptaMarkProps, createYooptaMark } from '@yoopta/editor';

export type LeafColorProps = {
  color?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundClip?: string;
  webkitTextFillColor?: string;
  'data-type'?: string;
  'data-id'?: string;
  'data-original'?: string;
  className?: string;
};

export const CustomHighlight = createYooptaMark<YooptaMarkProps<'highlight', LeafColorProps>>({
  type: 'highlight',

  render: (props) => {
    const highlight = props.leaf?.highlight;

    const dataType = highlight?.['data-type'];
    const dataId = highlight?.['data-id'];
    const dataOriginal = highlight?.['data-original'];
    const customClassName = highlight?.className;

    let style: React.CSSProperties = {
      color: highlight?.color,
      backgroundColor: highlight?.backgroundColor,
      backgroundImage: highlight?.backgroundImage,
      WebkitTextFillColor: highlight?.webkitTextFillColor,
      backgroundClip: highlight?.backgroundClip,
    };

    if (dataType === 'greenHighlight') {
      style.backgroundColor = '#bbf7d0';
    } else if (dataType === 'blueHighlight') {
      style.backgroundColor = '#bfdbfe';
    } else if (!style.backgroundColor) {
      style.backgroundColor = '#fef3c7';
    }

    const handleClick = () => {
      console.log('🟨 Clicked highlight with id:', dataId);
    };

    return (
      <mark
        {...props.attributes}
        style={style}
        className={customClassName || 'yoopta-mark-highlight cursor-pointer hover:opacity-80'}
        data-id={dataId}
        data-type={dataType}
        data-original={dataOriginal}
        onClick={handleClick}
      >
        {props.children}
      </mark>
    );
  },

  deserialize: (el) => {
    if (el.tagName.toLowerCase() === 'mark') {
      console.log('Deserializing mark element:', el);

      const dataId = el.getAttribute('data-id');
      const dataType = el.getAttribute('data-type');
      const dataOriginal = el.getAttribute('data-original');
      const className = el.getAttribute('class');

      const color = el.style.color || undefined;
      const backgroundColor = el.style.backgroundColor || undefined;

      console.log('Extracted attributes:', {
        dataId,
        dataType,
        dataOriginal,
        className,
        color,
        backgroundColor,
      });

      return {
        type: 'highlight',
        data: {
          color,
          backgroundColor,
          'data-type': dataType,
          'data-id': dataId,
          'data-original': dataOriginal,
          className,
        },
      };
    }

    return null;
  },
});
