import { CITY_MAP, searchNode }  from '../src/ts-pack'

test('checkout CITY_MAP', () => {
    expect(CITY_MAP[0]).toEqual({children: [{label: '北京市', value: 36}], label: '北京', value: 1});
});

test('search AreaNode', () => {
    expect(searchNode(CITY_MAP, 434)).toEqual({
        children: undefined,
        current: {label: '日喀则地区', value: 434},
        parent: {label: '西藏自治区', value: 26}
    });
});
