var ctf_bolig = function(Almennyttigt_boligbyggeri, Ejerbolig, Privat_udlejning, Privat_andelsboligforening, Stat_og_kommune,  m2_Under_40, m2_40_59, m2_60_79, m2_80_99, m2_100_119, m2_120_og_derover){
    if ( Almennyttigt_boligbyggeri <= 0.5 ) {
    if ( Ejerbolig <= 0.5 ) {
    if ( m2_120_og_derover <= 0.5 ) {
    if ( m2_40_59 <= 0.5 ) {
    if ( Privat_udlejning <= 0.5 ) {
    if ( Stat_og_kommune <= 0.5 ) {
    if ( m2_60_79 <= 0.5 ) {
    return [[ 2654,  2279,  1563,   569,  2447,  4701,  1770,  1493,  4184,  5692,]];
    } else {
    return [[ 3226,  3279,  3031,   681,  1593,  5154,  2740,  1468,  3714,  3544,]];
    }
    } else {
    if ( m2_Under_40 <= 0.5 ) {
    return [[  11,   74,   10,   15,  382,  483,   11,    7,  144,   10,]];
    } else {
    return [[  51,    0,  264,  563,  144,  492,  354,    0,    0,  198,]];
    }
    }
    } else {
    if ( m2_60_79 <= 0.5 ) {
    if ( m2_Under_40 <= 0.5 ) {
    return [[ 2449,  1303,  1000,   392,  3560,  1882,  1247,   699,  1999,  3205,]];
    } else {
    return [[ 1600,   833,   768,   156,   795,   866,   261,   135,   566,  1183,]];
    }
    } else {
    return [[ 1983,  1844,  1447,   697,  1954,  2320,  1836,  1819,  1411,  2843,]];
    }
    }
    } else {
    if ( Stat_og_kommune <= 0.5 ) {
    if ( Privat_udlejning <= 0.5 ) {
    return [[ 1561,  3520,  3845,   723,   907,  4247,  2186,  1940,  3402,  2701,]];
    } else {
    return [[ 1101,  2630,  2790,   773,  1777,  3416,  1712,  2169,  1754,  2844,]];
    }
    } else {
    return [[  10,    4,    1,  101,  326,   51,   22,    0,   36,   35,]];
    }
    }
    } else {
    if ( Privat_andelsboligforening <= 0.5 ) {
    if ( Privat_udlejning <= 0.5 ) {
    return [[  13,    6,    7,    5,  126,    4,    7,    6,   36,   17,]];
    } else {
    return [[  563,   289,   161,   129,  2970,   625,   231,   271,   590,  1380,]];
    }
    } else {
    return [[  810,   424,   208,    84,  1203,  1417,   424,   217,  1176,  1865,]];
    }
    }
    } else {
    if ( m2_40_59 <= 0.5 ) {
    if ( m2_120_og_derover <= 0.5 ) {
    if ( m2_60_79 <= 0.5 ) {
    if ( m2_Under_40 <= 0.5 ) {
    if ( m2_100_119<= 0.5 ) {
    return [[ 1963,  1021,   383,  1069,   993,   468,  1119,   950,  1234,  1281,]];
    } else {
    return [[ 2056,   956,   348,  1072,  1015,   237,   849,   894,   760,   996,]];
    }
    } else {
    return [[ 254,  181,  153,   64,  244,  205,  241,   72,  107,  174,]];
    }
    } else {
    return [[ 1142,  1381,   509,   749,   810,   760,  1050,  1126,   898,  1397,]];
    }
    } else {
    return [[ 2075,  1456,   700,  2070,  2675,   374,  1799,  1755,   733,  2231,]];
    }
    } else {
    return [[  412,  1475,   626,   336,   609,   987,   779,   721,   827,   986,]];
    }
    }
    } else {
    if ( m2_80_99 <= 0.5 ) {
    if ( m2_Under_40 <= 0.5 ) {
    if ( m2_100_119<= 0.5 ) {
    if ( m2_120_og_derover <= 0.5 ) {
    if ( m2_40_59 <= 0.5 ) {
    return [[ 1765,  1633,  4006,  2938,   387,  2571,  2422,   817,  2820,  1727,]];
    } else {
    return [[ 1292,   812,  2795,  1351,   115,  1406,  1178,   636,  1430,  1033,]];
    }
    } else {
    return [[  48,   73,   17,   26,   25,  106,    1,   19,   47,  107,]];
    }
    } else {
    return [[ 880,   90,  187,  555,   84,  232,  548,  116,  412,  228,]];
    }
    } else {
    return [[ 948,  153,   81,  298,  136,  521,  122,  114,  260,  180,]];
    }
    } else {
    return [[ 2175,  1159,  1526,  2785,   493,  3420,  1278,   784,   877,   991,]];
    }
    }
}

var ctf_person = function(Kategori, Alder15_19, Alder20_29, Alder30_64, mere65){
    if ( Kategori <= 6.5 ) {
    if ( Alder20_29  <= 0.5 ) {
    if ( Alder30_64  <= 0.5 ) {
    if ( Kategori <= 4.5 ) {
    if ( Kategori <= 2.5 ) {
    if ( Alder15_19  <= 0.5 ) {
    if ( Kategori <= 1.5 ) {
    return [[ 64,  44,  65,  51,  80,  79,  40,  32,  45,  93,]];
    } else {
    return [[ 186,  114,  166,  181,  182,  221,  156,  109,  164,  235,]];
    }
    } else {
    if ( Kategori <= 1.5 ) {
    return [[ 1742,  1432,  1249,  1820,  1452,  2028,  1648,  1284,  1262,  2177,]];
    } else {
    return [[ 315,  224,  255,  266,  218,  338,  248,  177,  210,  336,]];
    }
    }
    } else {
    if ( Kategori <= 3.5 ) {
    if ( Alder15_19  <= 0.5 ) {
    return [[ 1159,   925,   897,  1106,   697,   910,  1002,   767,   763,  1146,]];
    } else {
    return [[ 119,   86,   81,   87,   80,  141,  110,   71,   85,  116,]];
    }
    } else {
    if ( mere65 <= 0.5 ) {
    return [[ 49,  35,  47,  26,  30,  40,  39,  25,  28,  27,]];
    } else {
    return [[ 2046,  1952,  2104,  1979,  1533,  2108,  2124,  1471,  1680,  2641,]];
    }
    }
    }
    } else {
    if ( Kategori <= 5.5 ) {
    if ( Alder15_19  <= 0.5 ) {
    return [[ 1259,  1115,   918,  1120,  1540,   901,  1072,  1167,   693,  1950,]];
    } else {
    return [[ 12,  10,  14,   6,  11,  10,  15,   5,  10,  17,]];
    }
    } else {
    if ( Alder15_19  <= 0.5 ) {
    return [[ 597,  439,  333,  453,  991,  352,  408,  558,  278,  983,]];
    } else {
    return [[ 0,  0,  0,  0,  0,  1,  1,  0,  1,  0,]];
    }
    }
    }
    } else {
    if ( Kategori <= 1.5 ) {
    return [[ 1339,  1077,  1045,   791,  1879,  1601,   840,   607,  1505,  1815,]];
    } else {
    if ( Kategori <= 4.5 ) {
    if ( Kategori <= 2.5 ) {
    return [[  738,   628,   736,   533,   745,  1115,   586,   400,   878,   764,]];
    } else {
    if ( Kategori <= 3.5 ) {
    return [[ 1985,  1748,  2513,  1579,  1195,  3058,  1767,   983,  2462,  1855,]];
    } else {
    return [[ 2464,  2007,  2885,  2231,  1299,  3940,  2104,  1263,  2534,  2174,]];
    }
    }
    } else {
    if ( Kategori <= 5.5 ) {
    return [[ 4353,  3975,  4158,  3144,  2593,  5188,  3561,  2475,  4466,  4392,]];
    } else {
    return [[ 6118,  5497,  4517,  3668,  3609,  6494,  5069,  4099,  5867,  6463,]];
    }
    }
    }
    }
    } else {
    if ( Kategori <= 4.5 ) {
    if ( Kategori <= 1.5 ) {
    return [[ 1167,   971,  1093,   812,  1183,  1581,   747,   573,   984,  1182,]];
    } else {
    if ( Kategori <= 2.5 ) {
    return [[ 2347,  2251,  2650,  1156,  1688,  4348,  1481,  1054,  2117,  2370,]];
    } else {
    if ( Kategori <= 3.5 ) {
    return [[ 2401,  2488,  3023,  1139,  1954,  5319,  1783,  1273,  2640,  2974,]];
    } else {
    return [[ 2068,  2223,  2466,   925,  1727,  4259,  1693,  1157,  2273,  2590,]];
    }
    }
    }
    } else {
    if ( Kategori <= 5.5 ) {
    return [[ 1864,  2288,  2365,   959,  1492,  3444,  1818,  1292,  2225,  2329,]];
    } else {
    return [[ 1347,  1521,  1465,   576,  1043,  2299,  1315,   979,  1608,  1702,]];
    }
    }
    }
    } else {
    if ( mere65 <= 0.5 ) {
    if ( Kategori <= 9.5 ) {
    if ( Kategori <= 7.5 ) {
    if ( Alder20_29  <= 0.5 ) {
    if ( Alder30_64  <= 0.5 ) {
    return [[ 0,  0,  0,  1,  0,  0,  0,  0,  0,  0,]];
    } else {
    return [[ 4554,  3667,  2503,  2563,  3383,  4573,  3451,  2970,  4592,  5611,]];
    }
    } else {
    return [[ 530,  461,  371,  146,  519,  762,  423,  271,  604,  806,]];
    }
    } else {
    if ( Alder20_29  <= 0.5 ) {
    if ( Kategori <= 8.5 ) {
    return [[ 2549,  1775,  1027,  1347,  2216,  2011,  1762,  1684,  2287,  3080,]];
    } else {
    return [[ 1245,   838,   499,   730,  1236,   750,   865,   818,  1098,  1582,]];
    }
    } else {
    if ( Kategori <= 8.5 ) {
    return [[ 191,  127,   88,   42,  166,  200,   91,   70,  184,  275,]];
    } else {
    return [[  66,   42,   11,    8,   72,   49,   28,   22,   59,  100,]];
    }
    }
    }
    } else {
    if ( Alder30_64  <= 0.5 ) {
    if ( Alder15_19  <= 0.5 ) {
    return [[ 61,  18,  13,   6,  83,  45,  19,  10,  43,  77,]];
    } else {
    return [[ 0,  0,  0,  0,  0,  1,  0,  0,  0,  0,]];
    }
    } else {
    return [[ 1800,  1121,   568,   935,  2617,   832,  1133,  1096,  1420,  2732,]];
    }
    }
    } else {
    if ( Kategori <= 9.5 ) {
    if ( Kategori <= 7.5 ) {
    return [[ 244,  174,  147,  165,  590,  152,  199,  205,  126,  474,]];
    } else {
    if ( Kategori <= 8.5 ) {
    return [[  97,   64,   53,   89,  335,   55,   67,  113,   58,  223,]];
    } else {
    return [[  49,   24,   28,   46,  190,   26,   36,   43,   23,  108,]];
    }
    }
    } else {
    return [[  72,   41,   41,   44,  446,   36,   54,   66,   41,  241,]];
    }
    }
    }
}

var ctf_person2 = function(Dansk, Indvandrere, alder16_17, alder18_19, alder20_24, alder_25_29, alder_30_39, alder40_59, alder_60_66, Grundskole, Erhvervsfaglig, Erhvervsgymnasial, Almen_gymnasial, Bachelor, Mellemlang_videregående, lang_videregående){
    if ( Dansk <= 0.5 ) {
    if ( Indvandrere <= 0.5 ) {
    if ( Grundskole <= 0.5 ) {
    if ( alder40_59 <= 0.5 ) {
    if ( lang_videregående <= 0.5 ) {
    if ( Bachelor <= 0.5 ) {
    if ( alder_30_39 <= 0.5 ) {
    return [[ 394,  266,  580,  369,  119,  600,  408,  157,  341,  265,]];
    } else {
    return [[ 160,   91,  191,  132,   56,  191,  142,   84,  165,  141,]];
    }
    } else {
    if ( alder_30_39 <= 0.5 ) {
    return [[ 54,  49,  42,  30,  23,  97,  28,  22,  56,  50,]];
    } else {
    return [[ 17,  12,  10,   5,   5,  24,  14,   6,  23,  11,]];
    }
    }
    } else {
    if ( alder_60_66 <= 0.5 ) {
    if ( alder_25_29 <= 0.5 ) {
    return [[ 72,  30,  36,  19,  24,  87,  53,  17,  54,  62,]];
    } else {
    return [[ 30,  14,  20,   8,  11,  26,  18,  12,  28,  28,]];
    }
    } else {
    return [[ 1,  0,  3,  1,  4,  1,  0,  0,  0,  1,]];
    }
    }
    } else {
    if ( Erhvervsfaglig <= 0.5 ) {
    if ( Erhvervsgymnasial <= 0.5 ) {
    if ( Bachelor <= 0.5 ) {
    return [[ 20,  24,  28,  22,  45,  36,  30,  17,  47,  46,]];
    } else {
    return [[ 2,  0,  0,  1,  5,  2,  0,  1,  7,  4,]];
    }
    } else {
    return [[ 0,  2,  1,  0,  6,  0,  1,  0,  2,  5,]];
    }
    } else {
    return [[ 19,  11,  18,  12,   6,  17,  16,   6,  21,  18,]];
    }
    }
    } else {
    if ( alder16_17<= 0.5 ) {
    if ( alder18_19<= 0.5 ) {
    if ( alder20_24 <= 0.5 ) {
    if ( alder_30_39 <= 0.5 ) {
    return [[  86,   62,  124,   93,   37,  146,   95,   38,  106,   91,]];
    } else {
    return [[ 114,   57,  113,  100,   31,  143,   94,   44,  137,   61,]];
    }
    } else {
    return [[ 147,   88,  225,  216,   33,  280,  143,   57,  131,   75,]];
    }
    } else {
    return [[ 190,   96,  183,  196,   32,  324,  151,   60,  102,   85,]];
    }
    } else {
    return [[ 212,  123,  200,  268,   26,  478,  190,   85,  119,  110,]];
    }
    }
    } else {
    if ( lang_videregående <= 0.5 ) {
    if ( alder40_59 <= 0.5 ) {
    if ( Grundskole <= 0.5 ) {
    if ( Bachelor <= 0.5 ) {
    if ( alder_60_66 <= 0.5 ) {
    return [[ 1246,   950,  1497,  1006,   566,  1417,   876,   526,  1066,   855,]];
    } else {
    return [[ 301,  216,  258,  230,  231,  377,  214,  149,  273,  286,]];
    }
    } else {
    if ( alder_30_39 <= 0,5 ) {
    return [[ 187,  112,  143,   70,  199,  299,   70,   52,  143,  176,]];
    } else {
    return [[  90,   74,   77,   46,   41,  127,   54,   28,   65,   64,]];
    }
    }
    } else {
    if ( alder20_24 <= 0.5 ) {
    if ( alder16_17<= 0.5 ) {
    return [[ 2708,  2176,  3268,  2558,  2310,  3452,  2036,  1169,  2921,  2888,]];
    } else {
    return [[ 44,  31,  49,  92,  31,  78,  54,  24,  32,  42,]];
    }
    } else {
    return [[ 786,  454,  755,  549,  712,  838,  387,  265,  634,  763,]];
    }
    }
    } else {
    if ( Mellemlang_videregående <= 0.5 ) {
    if ( Grundskole <= 0.5 ) {
    if ( Bachelor <= 0.5 ) {
    return [[ 1130,   758,  1349,  1173,   467,  1676,   869,   473,   957,   863,]];
    } else {
    return [[ 24,  20,  29,  22,  37,  41,  20,  10,  24,  33,]];
    }
    } else {
    return [[ 1171,   840,  1440,  1353,   871,  1800,  1003,   492,  1263,  1008,]];
    }
    } else {
    return [[ 327,  209,  333,  254,  213,  428,  210,  156,  293,  342,]];
    }
    }
    } else {
    if ( alder_60_66 <= 0.5 ) {
    if ( alder_25_29 <= 0.5 ) {
    if ( alder40_59 <= 0.5 ) {
    if ( alder20_24 <= 0.5 ) {
    return [[ 453,  266,  274,  199,  306,  439,  200,  141,  371,  401,]];
    } else {
    return [[ 13,   7,   5,   2,   4,   5,   3,   3,   2,  11,]];
    }
    } else {
    return [[ 291,  193,  213,  198,  288,  353,  174,  130,  262,  374,]];
    }
    } else {
    return [[ 197,  125,  187,   62,  154,  288,   84,   68,  169,  232,]];
    }
    } else {
    return [[ 45,  28,  46,  39,  92,  72,  34,  25,  41,  98,]];
    }
    }
    }
    } else {
    if ( Erhvervsfaglig <= 0.5 ) {
    if ( Grundskole <= 0.5 ) {
    if ( alder40_59 <= 0.5 ) {
    if ( alder_60_66 <= 0.5 ) {
    if ( alder_30_39 <= 0.5 ) {
    if ( Bachelor <= 0.5 ) {
    return [[  5530,   5670,   6105,   1806,   5400,  11790,   4228,   3325,   6156,
        7953,]];
    } else {
    return [[ 1406,  1312,  1352,   192,  1672,  3989,   771,   589,  1749,  2121,]];
    }
    } else {
    if ( lang_videregående <= 0.5 ) {
    return [[ 3234,  2806,  2285,  1165,  2332,  4548,  2466,  1890,  4123,  3629,]];
    } else {
    return [[ 2905,  2079,  1406,   917,  2593,  4246,  1748,  1332,  3581,  3786,]];
    }
    }
    } else {
    if ( lang_videregående <= 0.5 ) {
    if ( Bachelor <= 0.5 ) {
    return [[  665,   505,   404,   605,  1015,   549,   528,   651,   520,  1117,]];
    } else {
    return [[  43,   25,   36,   23,  115,   46,   35,   36,   45,   91,]];
    }
    } else {
    return [[ 290,  169,  171,  240,  833,  224,  227,  282,  216,  615,]];
    }
    }
    } else {
    if ( lang_videregående <= 0.5 ) {
    if ( Almen_gymnasial <= 0.5 ) {
    if ( Bachelor <= 0.5 ) {
    return [[ 2188,  1867,  1258,  1758,  2270,  2175,  2007,  2165,  2258,  3590,]];
    } else {
    return [[ 294,  237,  167,  171,  417,  374,  214,  204,  385,  495,]];
    }
    } else {
    return [[ 584,  514,  360,  394,  895,  740,  460,  444,  806,  993,]];
    }
    } else {
    return [[ 1666,  1223,   866,  1205,  2879,  1821,  1361,  1601,  2025,  3724,]];
    }
    }
    } else {
    if ( alder16_17<= 0.5 ) {
    if ( alder18_19<= 0.5 ) {
    if ( alder_25_29 <= 0.5 ) {
    if ( alder20_24 <= 0.5 ) {
    return [[ 3678,  3397,  3334,  2340,  2037,  3188,  3091,  2004,  3471,  3018,]];
    } else {
    return [[ 805,  980,  812,  485,  525,  885,  708,  518,  655,  770,]];
    }
    } else {
    return [[ 581,  702,  562,  272,  289,  750,  519,  346,  547,  485,]];
    }
    } else {
    return [[ 596,  508,  394,  461,  506,  442,  520,  513,  433,  707,]];
    }
    } else {
    return [[ 577,  507,  329,  547,  590,  503,  582,  519,  455,  873,]];
    }
    }
    } else {
    if ( alder_60_66 <= 0.5 ) {
    if ( alder40_59 <= 0.5 ) {
    if ( alder_30_39 <= 0.5 ) {
    if ( alder_25_29 <= 0.5 ) {
    if ( alder18_19<= 0.5 ) {
    return [[ 368,  492,  388,  217,  187,  347,  472,  320,  368,  319,]];
    } else {
    return [[ 4,  5,  1,  1,  1,  1,  1,  4,  2,  2,]];
    }
    } else {
    return [[ 749,  935,  774,  338,  391,  889,  790,  582,  814,  739,]];
    }
    } else {
    return [[ 1618,  1601,  1145,   736,   670,  1357,  1439,   981,  1534,  1341,]];
    }
    } else {
    return [[ 2898,  2843,  1853,  2021,  1390,  1846,  2497,  2130,  2065,  2634,]];
    }
    } else {
    return [[ 966,  876,  703,  812,  598,  583,  778,  716,  569,  984,]];
    }
    }
    }
}

var ctf_civil_born = function(ægtepar_regPartnere, par_samboende, enlig_kvinde, enlig_mand, barn0, barn1, barn2, barn3, barn3mere){
    if ( ægtepar_regPartnere <= 0.5 ) {
    if ( barn0 <= 0.5 ) {
    if ( barn3mere <= 0.5 ) {
    if ( par_samboende <= 0.5 ) {
    if ( barn3 <= 0.5 ) {
    if ( barn2 <= 0.5 ) {
    if ( enlig_kvinde <= 0.5 ) {
    return [[261.0,247.0,220.0,200.0,240.0,263.0,227.0,161.0,270.0,284.0]];
    } else {
    return [[1175.0,972.0,942.0,787.0,886.0,1325.0,1073.0,717.0,1306.0,1483.0]];
    }
    } else {
    if ( enlig_kvinde <= 0.5 ) {
    return [[59.0,45.0,49.0,47.0,46.0,54.0,45.0,37.0,53.0,70.0]];
    } else {
    return [[566.0,452.0,403.0,440.0,399.0,618.0,523.0,298.0,473.0,728.0]];
    }
    }
    } else {
    if ( enlig_mand <= 0.5 ) {
    return [[123.0,70.0,123.0,136.0,51.0,172.0,103.0,57.0,90.0,128.0]];
    } else {
    return [[5.0,4.0,5.0,10.0,7.0,9.0,7.0,3.0,3.0,13.0]];
    }
    }
    } else {
    if ( barn1 <= 0.5 ) {
    if ( barn3 <= 0.5 ) {
    return [[627.0,443.0,248.0,336.0,426.0,605.0,446.0,340.0,609.0,616.0]];
    } else {
    return [[104.0,64.0,48.0,83.0,75.0,105.0,80.0,57.0,73.0,122.0]];
    }
    } else {
    return [[1057.0,836.0,658.0,443.0,783.0,1337.0,714.0,508.0,1116.0,1188.0]];
    }
    }
    } else {
    if ( par_samboende <= 0.5 ) {
    if ( enlig_mand <= 0.5 ) {
    return [[45.0,16.0,42.0,68.0,11.0,97.0,44.0,19.0,12.0,23.0]];
    } else {
    return [[0.0,2.0,1.0,2.0,0.0,4.0,2.0,0.0,0.0,1.0]];
    }
    } else {
    return [[15.0,6.0,26.0,19.0,11.0,36.0,15.0,11.0,9.0,15.0]];
    }
    }
    } else {
    if ( enlig_mand <= 0.5 ) {
    if ( par_samboende <= 0.5 ) {
    if ( enlig_kvinde <= 0.5 ) {
    return [[60.0,36.0,44.0,29.0,66.0,57.0,58.0,31.0,43.0,74.0]];
    } else {
    return [[10275.0,9839.0,10695.0,5590.0,10241.0,15747.0,8387.0,6232.0,10768.0,13888.0]];
    }
    } else {
    return [[2953.0,3012.0,2854.0,1071.0,2416.0,4743.0,2390.0,1709.0,3552.0,3812.0]];
    }
    } else {
    return [[10682.0,10089.0,11941.0,6148.0,9920.0,15570.0,8619.0,6012.0,12637.0,12376.0]];
    }
    }
    } else {
    if ( barn0 <= 0.5 ) {
    if ( barn3mere <= 0.5 ) {
    if ( barn3 <= 0.5 ) {
    if ( barn2 <= 0.5 ) {
    return [[1562.0,1142.0,1007.0,1112.0,1010.0,1259.0,1110.0,844.0,1181.0,1526.0]];
    } else {
    return [[1892.0,1301.0,877.0,1494.0,1103.0,1324.0,1389.0,1266.0,1340.0,1839.0]];
    }
    } else {
    return [[472.0,335.0,296.0,595.0,262.0,457.0,464.0,369.0,326.0,451.0]];
    }
    } else {
    return [[107.0,61.0,128.0,181.0,46.0,220.0,98.0,54.0,60.0,78.0]];
    }
    } else {
    return [[3413.0,2547.0,2082.0,2613.0,3088.0,2180.0,2358.0,2229.0,2152.0,3458.0]];
    }
    }
}
var indexOfMax = function (arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}
var sumUpArrays = function (array1, array2, array3, array4){
    var sum = [];
    for(var i = 0; i < array1[0].length; i++){
       sum.push(array1[0][i] + array2[0][i] + array3[0][i] + array4[0][i]);
    }
    return sum;
}
var getLabel = function (arr){
    var labels = ["Amager Vest", "Amager Øst", "Bispebjerg", "Brønshøj-Husum", "Indre By", "Nørrebro", "Valby", "Vanløse", "Vesterbro/Kongens Enghave", "Østerbro"];
    var index = indexOfMax(arr);
    return labels[index];
}
//ctf_bolig(Almennyttigt_boligbyggeri, Ejerbolig, Privat_udlejning, Privat_andelsboligforening, Stat_og_kommune,  m2_Under_40, m2_40_59, m2_60_79, m2_80_99, m2_100_119, m2_120_og_derover)
var result1 = ctf_bolig(0,0,1,0,0,0,1,0,0,0,0);
//ctf_person(Kategori, Alder15_19, Alder20_29, Alder30_64, mere65)
var result2 = ctf_person(1,0,1,0,0);
//ctf_person2(Dansk, Indvandrere, alder16_17, alder18_19, alder20_24, alder_25_29, alder_30_39, alder40_59, alder_60_66, Grundskole, Erhvervsfaglig, Erhvervsgymnasial, Almen_gymnasial, Bachelor, Mellemlang_videregående, lang_videregående)
var result3 = ctf_person2(1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0);
//ctf_civil(ægtepar_regPartnere, par_samboende, enlig_kvinde, enlig_mand, barn0, barn1, barn2, barn3, barn3mere)
var result4 = ctf_civil_born(0,1,0,0,1,0,0,0,0);

var result = sumUpArrays(result1,result2,result3,result4);

var forestVote = function(Almennyttigt_boligbyggeri, Ejerbolig, Privat_udlejning, Privat_andelsboligforening, Stat_og_kommune,  m2_Under_40, m2_40_59, m2_60_79, m2_80_99, m2_100_119, m2_120_og_derover,
    Kategori, Alder15_19, Alder20_29, Alder30_64, mere65,
    Dansk, Indvandrere, alder16_17, alder18_19, alder20_24, alder_25_29, alder_30_39, alder40_59, alder_60_66, Grundskole, Erhvervsfaglig, Erhvervsgymnasial, Almen_gymnasial, Bachelor, Mellemlang_videregående, lang_videregående,
    ægtepar_regPartnere, par_samboende, enlig_kvinde, enlig_mand, barn0, barn1, barn2, barn3, barn3mere){
    var result1 = ctf_bolig(Almennyttigt_boligbyggeri, Ejerbolig, Privat_udlejning, Privat_andelsboligforening, Stat_og_kommune,  m2_Under_40, m2_40_59, m2_60_79, m2_80_99, m2_100_119, m2_120_og_derover);
    var result2 = ctf_person(Kategori, Alder15_19, Alder20_29, Alder30_64, mere65);
    var result3 = ctf_person2(Dansk, Indvandrere, alder16_17, alder18_19, alder20_24, alder_25_29, alder_30_39, alder40_59, alder_60_66, Grundskole, Erhvervsfaglig, Erhvervsgymnasial, Almen_gymnasial, Bachelor, Mellemlang_videregående, lang_videregående);
    var result4 = ctf_civil_born(ægtepar_regPartnere, par_samboende, enlig_kvinde, enlig_mand, barn0, barn1, barn2, barn3, barn3mere);
    var result = sumUpArrays(result1,result2,result3,result4);
    return getLabel(result)
}


function predict() {
    var own1 = document.getElementById("own1").checked;
    var own2 = document.getElementById("own2").checked;
    var own3 = document.getElementById("own3").checked;
    var own4 = document.getElementById("own4").checked;
    var own5 = document.getElementById("own5").checked;

    var m1 = document.getElementById("m1").checked;
    var m2 = document.getElementById("m2").checked;
    var m3 = document.getElementById("m3").checked;
    var m4 = document.getElementById("m4").checked;
    var m5 = document.getElementById("m5").checked;

    var e = document.getElementById("incomeSel");
    var incomeCat = e.options[e.selectedIndex].value;

    var age1 = document.getElementById("age1").checked;
    var age2 = document.getElementById("age2").checked;
    var age3 = document.getElementById("age3").checked;
    var age4 = document.getElementById("age4").checked;

    var her1 = document.getElementById("her1").checked;
    var her2 = document.getElementById("her2").checked;

    var a1 = document.getElementById("a1").checked;
    var a2 = document.getElementById("a2").checked;
    var a3 = document.getElementById("a3").checked;
    var a4 = document.getElementById("a4").checked;
    var a5 = document.getElementById("a5").checked;
    var a6 = document.getElementById("a6").checked;
    var a7 = document.getElementById("a7").checked;

    var ed1 = document.getElementById("ed1").checked;
    var ed2 = document.getElementById("ed2").checked;
    var ed3 = document.getElementById("ed3").checked;
    var ed4 = document.getElementById("ed4").checked;
    var ed5 = document.getElementById("ed5").checked;
    var ed6 = document.getElementById("ed6").checked;
    var ed7 = document.getElementById("ed7").checked;

    var cs1 = document.getElementById("cs1").checked;
    var cs2 = document.getElementById("cs2").checked;
    var cs3 = document.getElementById("cs3").checked;
    var cs4 = document.getElementById("cs4").checked;

    var c1 = document.getElementById("c1").checked;
    var c2 = document.getElementById("c2").checked;
    var c3 = document.getElementById("c3").checked;
    var c4 = document.getElementById("c4").checked;
    var c5 = document.getElementById("c5").checked;

    var result = forestVote(own1, own2, own3, own4, own5, m1, m2, m3, m4, m5, incomeCat, age1, age2, age3, age4, her1, her2, a1, a2, a3, a4, a5, a6, a7, ed1, ed2, ed3, ed4, ed5, ed6, ed7, cs1, cs2, cs3, cs4, c1, c2, c3, c4, c5)
    var result2 = forestVote(0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0)
    console.log(result);
        console.log(result2);
}

console.log(result);
console.log(getLabel(result));
