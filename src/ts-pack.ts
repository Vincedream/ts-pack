import CITY_MAP from './map/city';
import CITY_MAP_WITH_SPELL from './map/cityWithSpell';
import DISTRICT_MAP from './map/district';
import PROVINCE_MAP from './map/province';
import ECHARTS_TRANSLATE_MAP from './translateMap/echartsTranslateMap';

import { searchNode } from './utils/searchNode';

export interface IAreaNode {
    label: string;
    value: number;
    spell?: string;
    children?: IAreaNode[];
}

export interface IEchartsTranslateNode {
    echartsName: string;
    kjlAreaId: number | undefined;
}

export interface ISearchNodeResult {
    current: IAreaNode | undefined;
    children: IAreaNode[] | undefined;
    parent: IAreaNode | undefined;
}
export {
    searchNode,
    CITY_MAP,
    CITY_MAP_WITH_SPELL,
    DISTRICT_MAP,
    ECHARTS_TRANSLATE_MAP,
    PROVINCE_MAP
};


