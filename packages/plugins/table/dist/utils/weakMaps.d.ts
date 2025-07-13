import { NodeEntry } from 'slate';
import { TableCellElement } from '../types';
export type SlateNodeEntry = NodeEntry<TableCellElement>;
export declare const EDITOR_TO_SELECTION: WeakMap<SlateEditor, SlateNodeEntry[]>;
export declare const TABLE_SLATE_TO_SELECTION_SET: WeakMap<SlateEditor, WeakSet<SlateElement<"table-data-cell", import("../types").TableDataCellElementProps>>>;
//# sourceMappingURL=weakMaps.d.ts.map