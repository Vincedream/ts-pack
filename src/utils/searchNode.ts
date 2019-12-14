import { IAreaNode, ISearchNodeResult } from '../ts-pack';

function search(nodeArr: IAreaNode[], nodeId: number, initParentNode?: IAreaNode | undefined): ISearchNodeResult | undefined {
    for (const item of nodeArr) {
        const { children, ...prop } = item;
        if (prop.value === nodeId) {
            return {
                parent: initParentNode,
                current: prop,
                children,
            };
        } else if (children) {
            const res = search(children, nodeId, prop);
            if (res) {
                return res;
            }
        }
    }
}

export function searchNode(nodeArr: IAreaNode[], nodeId: number): ISearchNodeResult | undefined {
    return search(nodeArr, nodeId, undefined);
}
