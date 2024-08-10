import {TreeStore} from "../utils/tree-store";
import {items} from "../store";

describe('Test TreeStore class', () => {
    const ts = new TreeStore(items);

    test('test getAll method from TreeStore util', () => {
        expect(ts.getAll()).toEqual(items);
    });

    test('test getItem from TreeStore util', () => {
        expect(ts.getItem(7)).toEqual({"id":7,"parent":4,"type":null});
    });

    test('test getChildren from TreeStore util', () => {
        expect(ts.getChildren(2)).toEqual([{"id":4,"parent":2,"type":"test"},{"id":5,"parent":2,"type":"test"},{"id":6,"parent":2,"type":"test"}]);
    });

    test('test getAllChildren from TreeStore util', () => {
        expect(ts.getAllChildren(2)).toEqual([{"id":4,"parent":2,"type":"test"},{"id":5,"parent":2,"type":"test"},{"id":6,"parent":2,"type":"test"},{"id":7,"parent":4,"type":null},{"id":8,"parent":4,"type":null}]);
    });

    test('test getAllParents from TreeStore util', () => {
        expect(ts. getAllParents(7)).toEqual([{"id":4,"parent":2,"type":"test"},{"id":2,"parent":1,"type":"test"},{"id":1,"parent":"root"}]);
    });
})
