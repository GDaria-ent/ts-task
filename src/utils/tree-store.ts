import {TreeLeaf, TreeLeafId, TreeStoreService} from '../types';
export class TreeStore implements TreeStoreService {
    tree: TreeLeaf[];
    constructor(tree: TreeLeaf[]) {
        this.tree = tree;
    }
    getAll() {
        return this.tree;
    }
    getItem(leafId: TreeLeafId) {
        return this.tree.find(({id}) => id === leafId);
    }
    getChildren(id: TreeLeafId) {
        return this.tree.filter(({parent}) => parent === id);
    }

    getAllChildren(id: TreeLeafId) {
        let ids = this.getChildren(id);
        for(let i = 0; i < ids.length; i++) {
            let currentId = ids[i][`id`];
            let currentResult = this.getChildren(currentId);
            ids = [...ids, ...currentResult];
        }
       return ids;
    }

    getAllParents(id: TreeLeafId) {
        const startingPoint = this.getItem(id);
        let greatestIndex = startingPoint ? this.tree.indexOf(startingPoint) : 0;
        let path:TreeLeaf[] = [];
        for(let i = greatestIndex; i !== 0;){
            let currentIndex = this.tree[i]['parent'];
            let currentResult = this.getItem(currentIndex);
            if(currentResult) {
                path.push(currentResult);
                i = this.tree.indexOf(currentResult);
            }
        }
        return path;
    }
}

