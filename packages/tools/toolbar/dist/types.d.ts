/// <reference types="react" />
import { YooEditor, YooptaBlock } from '@yoopta/editor';
export type ToolbarRenderProps = {
    activeBlock?: YooptaBlock;
    editor: YooEditor;
    toggleHoldToolbar?: (hold: boolean) => void;
};
export type ToolbarToolProps = {
    render?: (props: any) => JSX.Element;
};
//# sourceMappingURL=types.d.ts.map