import { IAreaNode } from '../ts-pack';

const cityWithSpell: IAreaNode[] = [
    {
        label: '北京',
        value: 1,
        spell: 'beijing',
        children: [
            {
                label: '北京市',
                spell: 'beijing',
                value: 36
            }
        ]
    },
    {
        label: '天津',
        value: 2,
        spell: 'tianjin',
        children: [
            {
                label: '天津市',
                spell: 'tianjin',
                value: 40
            }
        ]
    },
    {
        label: '河北省',
        value: 3,
        spell: 'hebei',
        children: [
            {
                label: '石家庄市',
                spell: 'shijiazhuang',
                value: 73
            },
            {
                label: '唐山市',
                spell: 'tangshan',
                value: 74
            },
            {
                label: '秦皇岛市',
                spell: 'qinhuangdao',
                value: 75
            },
            {
                label: '邯郸市',
                spell: 'handan',
                value: 76
            },
            {
                label: '邢台市',
                spell: 'xingtai',
                value: 77
            },
            {
                label: '保定市',
                spell: 'baoding',
                value: 78
            },
            {
                label: '张家口市',
                spell: 'zhangjiakou',
                value: 79
            },
            {
                label: '承德市',
                spell: 'chengde',
                value: 80
            },
            {
                label: '衡水市',
                spell: 'hengshui',
                value: 81
            },
            {
                label: '廊坊市',
                spell: 'langfang',
                value: 82
            },
            {
                label: '沧州市',
                spell: 'cangzhou',
                value: 83
            }
        ]
    },
    {
        label: '山西省',
        value: 4,
        spell: 'shanxi',
        children: [
            {
                label: '太原市',
                spell: 'taiyuan',
                value: 84
            },
            {
                label: '大同市',
                spell: 'datong',
                value: 85
            },
            {
                label: '阳泉市',
                spell: 'yangquan',
                value: 86
            },
            {
                label: '长治市',
                spell: 'changzhi',
                value: 87
            },
            {
                label: '晋城市',
                spell: 'jincheng',
                value: 88
            },
            {
                label: '朔州市',
                spell: 'shuozhou',
                value: 89
            },
            {
                label: '晋中市',
                spell: 'jinzhong',
                value: 90
            },
            {
                label: '运城市',
                spell: 'yuncheng',
                value: 91
            },
            {
                label: '忻州市',
                spell: 'xinzhou',
                value: 92
            },
            {
                label: '临汾市',
                spell: 'linfen',
                value: 93
            },
            {
                label: '吕梁市',
                spell: 'lvliang',
                value: 94
            }
        ]
    },
    {
        label: '内蒙古自治区',
        value: 5,
        spell: 'neimenggu',
        children: [
            {
                label: '呼和浩特市',
                spell: 'huhehaote',
                value: 95
            },
            {
                label: '包头市',
                spell: 'baotou',
                value: 96
            },
            {
                label: '乌海市',
                spell: 'wuhai',
                value: 97
            },
            {
                label: '赤峰市',
                spell: 'chifeng',
                value: 98
            },
            {
                label: '通辽市',
                spell: 'tongliao',
                value: 99
            },
            {
                label: '鄂尔多斯市',
                spell: 'eerduosi',
                value: 100
            },
            {
                label: '呼伦贝尔市',
                spell: 'hulunbeier',
                value: 101
            },
            {
                label: '巴彦淖尔市',
                spell: 'bayannaoer',
                value: 102
            },
            {
                label: '乌兰察布市',
                spell: 'wulanchabu',
                value: 103
            },
            {
                label: '兴安盟',
                spell: 'xinganmeng',
                value: 104
            },
            {
                label: '锡林郭勒盟',
                spell: 'xilinguolemeng',
                value: 105
            },
            {
                label: '阿拉善盟',
                spell: 'alashanmeng',
                value: 106
            }
        ]
    },
    {
        label: '辽宁省',
        value: 6,
        spell: 'liaoning',
        children: [
            {
                label: '沈阳市',
                spell: 'shenyang',
                value: 107
            },
            {
                label: '大连市',
                spell: 'dalian',
                value: 108
            },
            {
                label: '鞍山市',
                spell: 'anshan',
                value: 109
            },
            {
                label: '抚顺市',
                spell: 'fushun',
                value: 110
            },
            {
                label: '本溪市',
                spell: 'benxi',
                value: 111
            },
            {
                label: '丹东市',
                spell: 'dandong',
                value: 112
            },
            {
                label: '锦州市',
                spell: 'jinzhou',
                value: 113
            },
            {
                label: '营口市',
                spell: 'yingkou',
                value: 114
            },
            {
                label: '阜新市',
                spell: 'fuxin',
                value: 115
            },
            {
                label: '辽阳市',
                spell: 'liaoyang',
                value: 116
            },
            {
                label: '盘锦市',
                spell: 'panjin',
                value: 117
            },
            {
                label: '铁岭市',
                spell: 'tieling',
                value: 118
            },
            {
                label: '朝阳市',
                spell: 'zhaoyang',
                value: 119
            },
            {
                label: '葫芦岛市',
                spell: 'huludao',
                value: 120
            }
        ]
    },
    {
        label: '吉林省',
        value: 7,
        spell: 'jilin',
        children: [
            {
                label: '长春市',
                spell: 'changchun',
                value: 121
            },
            {
                label: '吉林市',
                spell: 'jilin',
                value: 122
            },
            {
                label: '四平市',
                spell: 'siping',
                value: 123
            },
            {
                label: '辽源市',
                spell: 'liaoyuan',
                value: 124
            },
            {
                label: '通化市',
                spell: 'tonghua',
                value: 125
            },
            {
                label: '白山市',
                spell: 'baishan',
                value: 126
            },
            {
                label: '松原市',
                spell: 'songyuan',
                value: 127
            },
            {
                label: '白城市',
                spell: 'baicheng',
                value: 128
            },
            {
                label: '延边朝鲜族自治州',
                spell: 'yanbian',
                value: 129
            }
        ]
    },
    {
        label: '黑龙江省',
        value: 8,
        spell: 'heilongjiang',
        children: [
            {
                label: '哈尔滨市',
                spell: 'haerbin',
                value: 130
            },
            {
                label: '齐齐哈尔市',
                spell: 'qiqihaer',
                value: 131
            },
            {
                label: '鸡西市',
                spell: 'jixi',
                value: 132
            },
            {
                label: '鹤岗市',
                spell: 'hegang',
                value: 133
            },
            {
                label: '双鸭山市',
                spell: 'shuangyashan',
                value: 134
            },
            {
                label: '大庆市',
                spell: 'daqing',
                value: 135
            },
            {
                label: '伊春市',
                spell: 'yichun',
                value: 136
            },
            {
                label: '佳木斯市',
                spell: 'jiamusi',
                value: 137
            },
            {
                label: '七台河市',
                spell: 'qitaihe',
                value: 138
            },
            {
                label: '牡丹江市',
                spell: 'mudanjiang',
                value: 139
            },
            {
                label: '黑河市',
                spell: 'heihe',
                value: 140
            },
            {
                label: '绥化市',
                spell: 'suihua',
                value: 141
            },
            {
                label: '大兴安岭地区',
                spell: 'daxinganling',
                value: 142
            }
        ]
    },
    {
        label: '上海',
        value: 9,
        spell: 'shanghai',
        children: [
            {
                label: '上海市',
                spell: 'shanghai',
                value: 39
            }
        ]
    },
    {
        label: '江苏省',
        value: 10,
        spell: 'jiangsu',
        children: [
            {
                label: '南京市',
                spell: 'nanjing',
                value: 162
            },
            {
                label: '无锡市',
                spell: 'wuxi',
                value: 163
            },
            {
                label: '徐州市',
                spell: 'xuzhou',
                value: 164
            },
            {
                label: '常州市',
                spell: 'changzhou',
                value: 165
            },
            {
                label: '苏州市',
                spell: 'suzhou',
                value: 166
            },
            {
                label: '南通市',
                spell: 'nantong',
                value: 167
            },
            {
                label: '连云港市',
                spell: 'lianyungang',
                value: 168
            },
            {
                label: '淮安市',
                spell: 'huaian',
                value: 169
            },
            {
                label: '盐城市',
                spell: 'yancheng',
                value: 170
            },
            {
                label: '扬州市',
                spell: 'yangzhou',
                value: 171
            },
            {
                label: '镇江市',
                spell: 'zhenjiang',
                value: 172
            },
            {
                label: '泰州市',
                spell: 'taizhou',
                value: 173
            },
            {
                label: '宿迁市',
                spell: 'suqian',
                value: 174
            }
        ]
    },
    {
        label: '浙江省',
        value: 11,
        spell: 'zhejiang',
        children: [
            {
                label: '杭州市',
                spell: 'hangzhou',
                value: 175
            },
            {
                label: '宁波市',
                spell: 'ningbo',
                value: 176
            },
            {
                label: '温州市',
                spell: 'wenzhou',
                value: 177
            },
            {
                label: '嘉兴市',
                spell: 'jiaxing',
                value: 178
            },
            {
                label: '湖州市',
                spell: 'huzhou',
                value: 179
            },
            {
                label: '绍兴市',
                spell: 'shaoxing',
                value: 180
            },
            {
                label: '舟山市',
                spell: 'zhoushan',
                value: 181
            },
            {
                label: '衢州市',
                spell: 'quzhou',
                value: 182
            },
            {
                label: '金华市',
                spell: 'jinhua',
                value: 183
            },
            {
                label: '台州市',
                spell: 'taizhou',
                value: 184
            },
            {
                label: '丽水市',
                spell: 'lishui',
                value: 185
            }
        ]
    },
    {
        label: '安徽省',
        value: 12,
        spell: 'anhui',
        children: [
            {
                label: '合肥市',
                spell: 'hefei',
                value: 186
            },
            {
                label: '芜湖市',
                spell: 'wuhu',
                value: 187
            },
            {
                label: '蚌埠市',
                spell: 'bangbu',
                value: 188
            },
            {
                label: '淮南市',
                spell: 'huainan',
                value: 189
            },
            {
                label: '马鞍山市',
                spell: 'maanshan',
                value: 190
            },
            {
                label: '淮北市',
                spell: 'huaibei',
                value: 191
            },
            {
                label: '铜陵市',
                spell: 'tongling',
                value: 192
            },
            {
                label: '安庆市',
                spell: 'anqing',
                value: 193
            },
            {
                label: '黄山市',
                spell: 'huangshan',
                value: 194
            },
            {
                label: '滁州市',
                spell: 'chuzhou',
                value: 195
            },
            {
                label: '阜阳市',
                spell: 'fuyang',
                value: 196
            },
            {
                label: '宿州市',
                spell: 'suzhou',
                value: 197
            },
            {
                label: '巢湖市',
                spell: 'chaohu',
                value: 198
            },
            {
                label: '六安市',
                spell: 'liuan',
                value: 199
            },
            {
                label: '亳州市',
                spell: 'bozhou',
                value: 200
            },
            {
                label: '池州市',
                spell: 'chizhou',
                value: 201
            },
            {
                label: '宣城市',
                spell: 'xuancheng',
                value: 202
            }
        ]
    },
    {
        label: '福建省',
        value: 13,
        spell: 'fujian',
        children: [
            {
                label: '福州市',
                spell: 'fuzhou',
                value: 203
            },
            {
                label: '厦门市',
                spell: 'xiamen',
                value: 204
            },
            {
                label: '莆田市',
                spell: 'putian',
                value: 205
            },
            {
                label: '三明市',
                spell: 'sanming',
                value: 206
            },
            {
                label: '泉州市',
                spell: 'quanzhou',
                value: 207
            },
            {
                label: '漳州市',
                spell: 'zhangzhou',
                value: 208
            },
            {
                label: '南平市',
                spell: 'nanping',
                value: 209
            },
            {
                label: '龙岩市',
                spell: 'longyan',
                value: 210
            },
            {
                label: '宁德市',
                spell: 'ningde',
                value: 211
            }
        ]
    },
    {
        label: '江西省',
        value: 14,
        spell: 'jiangxi',
        children: [
            {
                label: '南昌市',
                spell: 'nanchang',
                value: 212
            },
            {
                label: '景德镇市',
                spell: 'jingdezhen',
                value: 213
            },
            {
                label: '萍乡市',
                spell: 'pingxiang',
                value: 214
            },
            {
                label: '九江市',
                spell: 'jiujiang',
                value: 215
            },
            {
                label: '新余市',
                spell: 'xinyu',
                value: 216
            },
            {
                label: '鹰潭市',
                spell: 'yingtan',
                value: 217
            },
            {
                label: '赣州市',
                spell: 'ganzhou',
                value: 218
            },
            {
                label: '吉安市',
                spell: 'jian',
                value: 219
            },
            {
                label: '宜春市',
                spell: 'yichun',
                value: 220
            },
            {
                label: '抚州市',
                spell: 'fuzhou',
                value: 221
            },
            {
                label: '上饶市',
                spell: 'shangrao',
                value: 222
            }
        ]
    },
    {
        label: '山东省',
        value: 15,
        spell: 'shandong',
        children: [
            {
                label: '济南市',
                spell: 'jinan',
                value: 223
            },
            {
                label: '青岛市',
                spell: 'qingdao',
                value: 224
            },
            {
                label: '淄博市',
                spell: 'zibo',
                value: 225
            },
            {
                label: '枣庄市',
                spell: 'zaozhuang',
                value: 226
            },
            {
                label: '东营市',
                spell: 'dongying',
                value: 227
            },
            {
                label: '烟台市',
                spell: 'yantai',
                value: 228
            },
            {
                label: '潍坊市',
                spell: 'weifang',
                value: 229
            },
            {
                label: '济宁市',
                spell: 'jining',
                value: 230
            },
            {
                label: '泰安市',
                spell: 'taian',
                value: 231
            },
            {
                label: '威海市',
                spell: 'weihai',
                value: 232
            },
            {
                label: '日照市',
                spell: 'rizhao',
                value: 233
            },
            {
                label: '莱芜市',
                spell: 'laiwu',
                value: 234
            },
            {
                label: '临沂市',
                spell: 'linyi',
                value: 235
            },
            {
                label: '德州市',
                spell: 'dezhou',
                value: 236
            },
            {
                label: '聊城市',
                spell: 'liaocheng',
                value: 237
            },
            {
                label: '滨州市',
                spell: 'binzhou',
                value: 238
            },
            {
                label: '菏泽市',
                spell: 'heze',
                value: 239
            }
        ]
    },
    {
        label: '河南省',
        value: 16,
        spell: 'henan',
        children: [
            {
                label: '郑州市',
                spell: 'zhengzhou',
                value: 240
            },
            {
                label: '开封市',
                spell: 'kaifeng',
                value: 241
            },
            {
                label: '洛阳市',
                spell: 'luoyang',
                value: 242
            },
            {
                label: '平顶山市',
                spell: 'pingdingshan',
                value: 243
            },
            {
                label: '安阳市',
                spell: 'anyang',
                value: 244
            },
            {
                label: '鹤壁市',
                spell: 'hebi',
                value: 245
            },
            {
                label: '新乡市',
                spell: 'xinxiang',
                value: 246
            },
            {
                label: '焦作市',
                spell: 'jiaozuo',
                value: 247
            },
            {
                label: '濮阳市',
                spell: 'puyang',
                value: 248
            },
            {
                label: '许昌市',
                spell: 'xuchang',
                value: 249
            },
            {
                label: '漯河市',
                spell: 'luohe',
                value: 250
            },
            {
                label: '三门峡市',
                spell: 'sanmenxia',
                value: 251
            },
            {
                label: '南阳市',
                spell: 'nanyang',
                value: 252
            },
            {
                label: '商丘市',
                spell: 'shangqiu',
                value: 253
            },
            {
                label: '信阳市',
                spell: 'xinyang',
                value: 254
            },
            {
                label: '周口市',
                spell: 'zhoukou',
                value: 255
            },
            {
                label: '驻马店市',
                spell: 'zhumadian',
                value: 256
            },
            {
                label: '济源市',
                spell: 'jiyuan',
                value: 257
            }
        ]
    },
    {
        label: '湖北省',
        value: 17,
        spell: 'hubei',
        children: [
            {
                label: '武汉市',
                spell: 'wuhan',
                value: 258
            },
            {
                label: '黄石市',
                spell: 'huangshi',
                value: 259
            },
            {
                label: '十堰市',
                spell: 'shiyan',
                value: 260
            },
            {
                label: '宜昌市',
                spell: 'yichang',
                value: 261
            },
            {
                label: '襄阳市',
                spell: 'xiangyang',
                value: 262
            },
            {
                label: '鄂州市',
                spell: 'ezhou',
                value: 263
            },
            {
                label: '荆门市',
                spell: 'jingmen',
                value: 264
            },
            {
                label: '孝感市',
                spell: 'xiaogan',
                value: 265
            },
            {
                label: '荆州市',
                spell: 'jingzhou',
                value: 266
            },
            {
                label: '黄冈市',
                spell: 'huanggang',
                value: 267
            },
            {
                label: '咸宁市',
                spell: 'xianning',
                value: 268
            },
            {
                label: '随州市',
                spell: 'suizhou',
                value: 269
            },
            {
                label: '恩施土家族苗族自治州',
                spell: 'enshi',
                value: 270
            },
            {
                label: '仙桃市',
                spell: 'xiantao',
                value: 271
            },
            {
                label: '潜江市',
                spell: 'qianjiang',
                value: 272
            },
            {
                label: '天门市',
                spell: 'tianmen',
                value: 273
            },
            {
                label: '神农架林区',
                spell: 'shennongjia',
                value: 274
            }
        ]
    },
    {
        label: '湖南省',
        value: 18,
        spell: 'hunan',
        children: [
            {
                label: '长沙市',
                spell: 'changsha',
                value: 275
            },
            {
                label: '株洲市',
                spell: 'zhuzhou',
                value: 276
            },
            {
                label: '湘潭市',
                spell: 'xiangtan',
                value: 277
            },
            {
                label: '衡阳市',
                spell: 'hengyang',
                value: 278
            },
            {
                label: '邵阳市',
                spell: 'shaoyang',
                value: 279
            },
            {
                label: '岳阳市',
                spell: 'yueyang',
                value: 280
            },
            {
                label: '常德市',
                spell: 'changde',
                value: 281
            },
            {
                label: '张家界市',
                spell: 'zhangjiajie',
                value: 282
            },
            {
                label: '益阳市',
                spell: 'yiyang',
                value: 283
            },
            {
                label: '郴州市',
                spell: 'chenzhou',
                value: 284
            },
            {
                label: '永州市',
                spell: 'yongzhou',
                value: 285
            },
            {
                label: '怀化市',
                spell: 'huaihua',
                value: 286
            },
            {
                label: '娄底市',
                spell: 'loudi',
                value: 287
            },
            {
                label: '湘西土家族苗族自治州',
                spell: 'xiangxi',
                value: 288
            }
        ]
    },
    {
        label: '广东省',
        value: 19,
        spell: 'guangdong',
        children: [
            {
                label: '广州市',
                spell: 'guangzhou',
                value: 289
            },
            {
                label: '韶关市',
                spell: 'shaoguan',
                value: 290
            },
            {
                label: '深圳市',
                spell: 'shenzhen',
                value: 291
            },
            {
                label: '珠海市',
                spell: 'zhuhai',
                value: 292
            },
            {
                label: '汕头市',
                spell: 'shantou',
                value: 293
            },
            {
                label: '佛山市',
                spell: 'foshan',
                value: 294
            },
            {
                label: '江门市',
                spell: 'jiangmen',
                value: 295
            },
            {
                label: '湛江市',
                spell: 'zhanjiang',
                value: 296
            },
            {
                label: '茂名市',
                spell: 'maoming',
                value: 297
            },
            {
                label: '肇庆市',
                spell: 'zhaoqing',
                value: 298
            },
            {
                label: '惠州市',
                spell: 'huizhou',
                value: 299
            },
            {
                label: '梅州市',
                spell: 'meizhou',
                value: 300
            },
            {
                label: '汕尾市',
                spell: 'shanwei',
                value: 301
            },
            {
                label: '河源市',
                spell: 'heyuan',
                value: 302
            },
            {
                label: '阳江市',
                spell: 'yangjiang',
                value: 303
            },
            {
                label: '清远市',
                spell: 'qingyuan',
                value: 304
            },
            {
                label: '东莞市',
                spell: 'dongguan',
                value: 305
            },
            {
                label: '中山市',
                spell: 'zhongshan',
                value: 306
            },
            {
                label: '潮州市',
                spell: 'chaozhou',
                value: 307
            },
            {
                label: '揭阳市',
                spell: 'jieyang',
                value: 308
            },
            {
                label: '云浮市',
                spell: 'yunfu',
                value: 309
            }
        ]
    },
    {
        label: '广西壮族自治区',
        value: 20,
        spell: 'guangxi',
        children: [
            {
                label: '南宁市',
                spell: 'nanning',
                value: 310
            },
            {
                label: '柳州市',
                spell: 'liuzhou',
                value: 311
            },
            {
                label: '桂林市',
                spell: 'guilin',
                value: 312
            },
            {
                label: '梧州市',
                spell: 'wuzhou',
                value: 313
            },
            {
                label: '北海市',
                spell: 'beihai',
                value: 314
            },
            {
                label: '防城港市',
                spell: 'fangchenggang',
                value: 315
            },
            {
                label: '钦州市',
                spell: 'qinzhou',
                value: 316
            },
            {
                label: '贵港市',
                spell: 'guigang',
                value: 317
            },
            {
                label: '玉林市',
                spell: 'yulin',
                value: 318
            },
            {
                label: '百色市',
                spell: 'baise',
                value: 319
            },
            {
                label: '贺州市',
                spell: 'hezhou',
                value: 320
            },
            {
                label: '河池市',
                spell: 'hechi',
                value: 321
            },
            {
                label: '来宾市',
                spell: 'laibin',
                value: 322
            },
            {
                label: '崇左市',
                spell: 'chongzuo',
                value: 323
            }
        ]
    },
    {
        label: '海南省',
        value: 21,
        spell: 'hainan',
        children: [
            {
                label: '海口市',
                spell: 'haikou',
                value: 324
            },
            {
                label: '三亚市',
                spell: 'sanya',
                value: 325
            },
            {
                label: '五指山市',
                spell: 'wuzhishan',
                value: 326
            },
            {
                label: '琼海市',
                spell: 'qionghai',
                value: 327
            },
            {
                label: '儋州市',
                spell: 'danzhou',
                value: 328
            },
            {
                label: '文昌市',
                spell: 'wenchang',
                value: 329
            },
            {
                label: '万宁市',
                spell: 'wanning',
                value: 330
            },
            {
                label: '东方市',
                spell: 'dongfang',
                value: 331
            },
            {
                label: '定安县',
                spell: 'dingan',
                value: 332
            },
            {
                label: '屯昌县',
                spell: 'tunchang',
                value: 333
            },
            {
                label: '澄迈县',
                spell: 'chengmai',
                value: 334
            },
            {
                label: '临高县',
                spell: 'lingao',
                value: 335
            },
            {
                label: '白沙黎族自治县',
                spell: 'baisha',
                value: 336
            },
            {
                label: '昌江黎族自治县',
                spell: 'changjiang',
                value: 337
            },
            {
                label: '乐东黎族自治县',
                spell: 'ledong',
                value: 338
            },
            {
                label: '陵水黎族自治县',
                spell: 'lingshui',
                value: 339
            },
            {
                label: '保亭黎族苗族自治县',
                spell: 'baoting',
                value: 340
            },
            {
                label: '琼中黎族苗族自治县',
                spell: 'qiongzhong',
                value: 341
            },
            {
                label: '西沙群岛',
                spell: 'xisha',
                value: 342
            },
            {
                label: '南沙群岛',
                spell: 'nansha',
                value: 343
            },
            {
                label: '中沙群岛的岛礁及其海域',
                spell: 'zhongsha',
                value: 344
            }
        ]
    },
    {
        label: '重庆',
        value: 22,
        spell: 'chongqing',
        children: [
            {
                label: '重庆',
                spell: 'chongqing',
                value: 62
            }
        ]
    },
    {
        label: '四川省',
        value: 23,
        spell: 'sichuan',
        children: [
            {
                label: '成都市',
                spell: 'chengdu',
                value: 385
            },
            {
                label: '自贡市',
                spell: 'zigong',
                value: 386
            },
            {
                label: '攀枝花市',
                spell: 'panzhihua',
                value: 387
            },
            {
                label: '泸州市',
                spell: 'luzhou',
                value: 388
            },
            {
                label: '德阳市',
                spell: 'deyang',
                value: 389
            },
            {
                label: '绵阳市',
                spell: 'mianyang',
                value: 390
            },
            {
                label: '广元市',
                spell: 'guangyuan',
                value: 391
            },
            {
                label: '遂宁市',
                spell: 'suining',
                value: 392
            },
            {
                label: '内江市',
                spell: 'neijiang',
                value: 393
            },
            {
                label: '乐山市',
                spell: 'leshan',
                value: 394
            },
            {
                label: '南充市',
                spell: 'nanchong',
                value: 395
            },
            {
                label: '眉山市',
                spell: 'meishan',
                value: 396
            },
            {
                label: '宜宾市',
                spell: 'yibin',
                value: 397
            },
            {
                label: '广安市',
                spell: 'guangan',
                value: 398
            },
            {
                label: '达州市',
                spell: 'dazhou',
                value: 399
            },
            {
                label: '雅安市',
                spell: 'yaan',
                value: 400
            },
            {
                label: '巴中市',
                spell: 'bazhong',
                value: 401
            },
            {
                label: '资阳市',
                spell: 'ziyang',
                value: 402
            },
            {
                label: '阿坝藏族羌族自治州',
                spell: 'aba',
                value: 403
            },
            {
                label: '甘孜藏族自治州',
                spell: 'ganzi',
                value: 404
            },
            {
                label: '凉山彝族自治州',
                spell: 'liangshan',
                value: 405
            }
        ]
    },
    {
        label: '贵州省',
        value: 24,
        spell: 'guizhou',
        children: [
            {
                label: '贵阳市',
                spell: 'guiyang',
                value: 406
            },
            {
                label: '六盘水市',
                spell: 'liupanshui',
                value: 407
            },
            {
                label: '遵义市',
                spell: 'zunyi',
                value: 408
            },
            {
                label: '安顺市',
                spell: 'anshun',
                value: 409
            },
            {
                label: '铜仁地区',
                spell: 'tongrendi',
                value: 410
            },
            {
                label: '黔西南布依族苗族自治州',
                spell: 'qianxinan',
                value: 411
            },
            {
                label: '毕节地区',
                spell: 'bijiedi',
                value: 412
            },
            {
                label: '黔东南苗族侗族自治州',
                spell: 'qiandongnan',
                value: 413
            },
            {
                label: '黔南布依族苗族自治州',
                spell: 'qiannan',
                value: 414
            }
        ]
    },
    {
        label: '云南省',
        value: 25,
        spell: 'yunnan',
        children: [
            {
                label: '昆明市',
                spell: 'kunming',
                value: 415
            },
            {
                label: '曲靖市',
                spell: 'qujing',
                value: 416
            },
            {
                label: '玉溪市',
                spell: 'yuxi',
                value: 417
            },
            {
                label: '保山市',
                spell: 'baoshan',
                value: 418
            },
            {
                label: '昭通市',
                spell: 'zhaotong',
                value: 419
            },
            {
                label: '丽江市',
                spell: 'lijiang',
                value: 420
            },
            {
                label: '思茅市',
                spell: 'simao',
                value: 421
            },
            {
                label: '临沧市',
                spell: 'lincang',
                value: 422
            },
            {
                label: '楚雄彝族自治州',
                spell: 'chuxiong',
                value: 423
            },
            {
                label: '红河哈尼族彝族自治州',
                spell: 'honghe',
                value: 424
            },
            {
                label: '文山壮族苗族自治州',
                spell: 'wenshan',
                value: 425
            },
            {
                label: '西双版纳傣族自治州',
                spell: 'xishuangbanna',
                value: 426
            },
            {
                label: '大理白族自治州',
                spell: 'dali',
                value: 427
            },
            {
                label: '德宏傣族景颇族自治州',
                spell: 'dehong',
                value: 428
            },
            {
                label: '怒江傈僳族自治州',
                spell: 'nujiang',
                value: 429
            },
            {
                label: '迪庆藏族自治州',
                spell: 'diqing',
                value: 430
            }
        ]
    },
    {
        label: '西藏自治区',
        value: 26,
        spell: 'xizang',
        children: [
            {
                label: '拉萨市',
                spell: 'lasa',
                value: 431
            },
            {
                label: '昌都地区',
                spell: 'changdu',
                value: 432
            },
            {
                label: '山南地区',
                spell: 'shannan',
                value: 433
            },
            {
                label: '日喀则地区',
                spell: 'rikaze',
                value: 434
            },
            {
                label: '那曲地区',
                spell: 'naqu',
                value: 435
            },
            {
                label: '阿里地区',
                spell: 'ali',
                value: 436
            },
            {
                label: '林芝地区',
                spell: 'linzhi',
                value: 437
            }
        ]
    },
    {
        label: '陕西省',
        value: 27,
        spell: 'shanxi',
        children: [
            {
                label: '西安市',
                spell: 'xian',
                value: 438
            },
            {
                label: '铜川市',
                spell: 'tongchuan',
                value: 439
            },
            {
                label: '宝鸡市',
                spell: 'baoji',
                value: 440
            },
            {
                label: '咸阳市',
                spell: 'xianyang',
                value: 441
            },
            {
                label: '渭南市',
                spell: 'weinan',
                value: 442
            },
            {
                label: '延安市',
                spell: 'yanan',
                value: 443
            },
            {
                label: '汉中市',
                spell: 'hanzhong',
                value: 444
            },
            {
                label: '榆林市',
                spell: 'yulin',
                value: 445
            },
            {
                label: '安康市',
                spell: 'ankang',
                value: 446
            },
            {
                label: '商洛市',
                spell: 'shangluo',
                value: 447
            }
        ]
    },
    {
        label: '甘肃省',
        value: 28,
        spell: 'gansu',
        children: [
            {
                label: '兰州市',
                spell: 'lanzhou',
                value: 448
            },
            {
                label: '嘉峪关市',
                spell: 'jiayuguan',
                value: 449
            },
            {
                label: '金昌市',
                spell: 'jinchang',
                value: 450
            },
            {
                label: '白银市',
                spell: 'baiyin',
                value: 451
            },
            {
                label: '天水市',
                spell: 'tianshui',
                value: 452
            },
            {
                label: '武威市',
                spell: 'wuwei',
                value: 453
            },
            {
                label: '张掖市',
                spell: 'zhangye',
                value: 454
            },
            {
                label: '平凉市',
                spell: 'pingliang',
                value: 455
            },
            {
                label: '酒泉市',
                spell: 'jiuquan',
                value: 456
            },
            {
                label: '庆阳市',
                spell: 'qingyang',
                value: 457
            },
            {
                label: '定西市',
                spell: 'dingxi',
                value: 458
            },
            {
                label: '陇南市',
                spell: 'longnan',
                value: 459
            },
            {
                label: '临夏回族自治州',
                spell: 'linxia',
                value: 460
            },
            {
                label: '甘南藏族自治州',
                spell: 'gannan',
                value: 461
            }
        ]
    },
    {
        label: '青海省',
        value: 29,
        spell: 'qinghai',
        children: [
            {
                label: '西宁市',
                spell: 'xining',
                value: 462
            },
            {
                label: '海东地区',
                spell: 'haidong',
                value: 463
            },
            {
                label: '海北藏族自治州',
                spell: 'haibei',
                value: 464
            },
            {
                label: '黄南藏族自治州',
                spell: 'huangnan',
                value: 465
            },
            {
                label: '海南藏族自治州',
                spell: 'hainan',
                value: 466
            },
            {
                label: '果洛藏族自治州',
                spell: 'guoluo',
                value: 467
            },
            {
                label: '玉树藏族自治州',
                spell: 'yushu',
                value: 468
            },
            {
                label: '海西蒙古族藏族自治州',
                spell: 'haixi',
                value: 469
            }
        ]
    },
    {
        label: '宁夏回族自治区',
        value: 30,
        spell: 'ningxia',
        children: [
            {
                label: '银川市',
                spell: 'yinchuan',
                value: 470
            },
            {
                label: '石嘴山市',
                spell: 'shizuishan',
                value: 471
            },
            {
                label: '吴忠市',
                spell: 'wuzhong',
                value: 472
            },
            {
                label: '固原市',
                spell: 'guyuan',
                value: 473
            },
            {
                label: '中卫市',
                spell: 'zhongwei',
                value: 474
            }
        ]
    },
    {
        label: '新疆维吾尔自治区',
        value: 31,
        spell: 'xinjiang',
        children: [
            {
                label: '乌鲁木齐市',
                spell: 'wulumuqi',
                value: 475
            },
            {
                label: '克拉玛依市',
                spell: 'kelamayi',
                value: 476
            },
            {
                label: '吐鲁番地区',
                spell: 'tulufan',
                value: 477
            },
            {
                label: '哈密地区',
                spell: 'hami',
                value: 478
            },
            {
                label: '昌吉回族自治州',
                spell: 'changji',
                value: 479
            },
            {
                label: '博尔塔拉蒙古自治州',
                spell: 'boertala',
                value: 480
            },
            {
                label: '巴音郭楞蒙古自治州',
                spell: 'bayinguoleng',
                value: 481
            },
            {
                label: '阿克苏地区',
                spell: 'akesu',
                value: 482
            },
            {
                label: '克孜勒苏柯尔克孜自治州',
                spell: 'kezilesukeerkezi',
                value: 483
            },
            {
                label: '喀什地区',
                spell: 'kashi',
                value: 484
            },
            {
                label: '和田地区',
                spell: 'hetian',
                value: 485
            },
            {
                label: '伊犁哈萨克自治州',
                spell: 'yilihasake',
                value: 486
            },
            {
                label: '塔城地区',
                spell: 'tacheng',
                value: 487
            },
            {
                label: '阿勒泰地区',
                spell: 'aletai',
                value: 488
            },
            {
                label: '石河子市',
                spell: 'shihezi',
                value: 489
            },
            {
                label: '阿拉尔市',
                spell: 'alaer',
                value: 490
            },
            {
                label: '图木舒克市',
                spell: 'tumushuke',
                value: 491
            },
            {
                label: '五家渠市',
                spell: 'wujiaqu',
                value: 492
            }
        ]
    },
    {
        label: '台湾省',
        value: 32,
        spell: 'taiwan',
        children: [
            {
                label: '台北市',
                spell: 'taibei',
                value: 493
            },
            {
                label: '高雄市',
                spell: 'gaoxiong',
                value: 494
            },
            {
                label: '基隆市',
                spell: 'jilong',
                value: 495
            },
            {
                label: '台中市',
                spell: 'taizhong',
                value: 496
            },
            {
                label: '台南市',
                spell: 'tainan',
                value: 497
            },
            {
                label: '新竹市',
                spell: 'xinzhu',
                value: 498
            },
            {
                label: '嘉义市',
                spell: 'jiayi',
                value: 499
            },
            {
                label: '台北县',
                spell: 'taibei',
                value: 500
            },
            {
                label: '宜兰县',
                spell: 'yilan',
                value: 501
            },
            {
                label: '桃园县',
                spell: 'taoyuan',
                value: 502
            },
            {
                label: '新竹县',
                spell: 'xinzhu',
                value: 503
            },
            {
                label: '苗栗县',
                spell: 'miaoli',
                value: 504
            },
            {
                label: '台中县',
                spell: 'taizhong',
                value: 505
            },
            {
                label: '彰化县',
                spell: 'zhanghua',
                value: 506
            },
            {
                label: '南投县',
                spell: 'nantou',
                value: 507
            },
            {
                label: '云林县',
                spell: 'yunlin',
                value: 508
            },
            {
                label: '嘉义县',
                spell: 'jiayi',
                value: 509
            },
            {
                label: '台南县',
                spell: 'tainan',
                value: 510
            },
            {
                label: '高雄县',
                spell: 'gaoxiong',
                value: 511
            },
            {
                label: '屏东县',
                spell: 'pingdong',
                value: 512
            },
            {
                label: '澎湖县',
                spell: 'penghu',
                value: 513
            },
            {
                label: '台东县',
                spell: 'taidong',
                value: 514
            },
            {
                label: '花莲县',
                spell: 'hualian',
                value: 515
            }
        ]
    },
    {
        label: '香港特别行政区',
        value: 33,
        spell: 'xianggang',
        children: [
            {
                label: '中西区',
                spell: 'zhongxi',
                value: 516
            },
            {
                label: '东区',
                spell: 'dongqu',
                value: 517
            },
            {
                label: '九龙城区',
                spell: 'jiulongcheng',
                value: 518
            },
            {
                label: '观塘区',
                spell: 'guantang',
                value: 519
            },
            {
                label: '南区',
                spell: 'nanqu',
                value: 520
            },
            {
                label: '深水埗区',
                spell: 'shenshuibu',
                value: 521
            },
            {
                label: '黄大仙区',
                spell: 'huangdaxian',
                value: 522
            },
            {
                label: '湾仔区',
                spell: 'wanzi',
                value: 523
            },
            {
                label: '油尖旺区',
                spell: 'youjianwang',
                value: 524
            },
            {
                label: '离岛区',
                spell: 'lidao',
                value: 525
            },
            {
                label: '葵青区',
                spell: 'kuiqing',
                value: 526
            },
            {
                label: '北区',
                spell: 'beiqu',
                value: 527
            },
            {
                label: '西贡区',
                spell: 'xigong',
                value: 528
            },
            {
                label: '沙田区',
                spell: 'shatian',
                value: 529
            },
            {
                label: '屯门区',
                spell: 'tunmen',
                value: 530
            },
            {
                label: '大埔区',
                spell: 'dapu',
                value: 531
            },
            {
                label: '荃湾区',
                spell: 'quanwan',
                value: 532
            },
            {
                label: '元朗区',
                spell: 'yuanlang',
                value: 533
            }
        ]
    },
    {
        label: '澳门特别行政区',
        value: 34,
        spell: 'aomen',
        children: [
            {
                label: '澳门特别行政区',
                spell: 'aomen',
                value: 534
            }
        ]
    }
];

export default cityWithSpell;
