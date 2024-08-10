export type TreeLeafId = number | string;

export interface TreeLeaf {
    id: TreeLeafId;
    parent: TreeLeafId;
    type?: unknown | null;
}

export interface TreeStoreService {
    tree: TreeLeaf[];
    getAll(): TreeLeaf[];
    getItem(leafId: TreeLeafId): TreeLeaf | undefined;
    getChildren(id: TreeLeafId): TreeLeaf[] | [];
    getAllChildren(id: TreeLeafId): TreeLeaf[];
    getAllParents(id: TreeLeafId): TreeLeaf[];
}
