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
});