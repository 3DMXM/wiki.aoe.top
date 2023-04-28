# 武器 ID

**武器 列表**
- [大剑](#great-sword)
- [剑盾](#sword--shield)
- [锤](#hammer)
- [长矛](#lance)
- [太刀](#long-sword)
- [开关斧](#switch-axe)
- [枪炮](#gunlance)
- [双刀](#dual-blades)
- [狩猎笛](#hunting-horn)
- [操虫棍](#insect-glaive)
- [盾斧](#charge-blade)
- [轻弩](#light-bowgun)
- [重弩](#heavy-bowgun)
- [弓](#bow)
- [昆虫]](#kinsect)

snow.data.ContentsIdSystem:
- AllItemMixFlag: `0x80000000`
- MainCategoryStartBit: `26`
- SubCategoryStartBit: `20`
- SubCategoryStartBitMask: `0x000FFFFF`

snow.data.ContentsIdSystem.MainCategoryType:
- `0x08000000` Weapon

snow.data.ContentsIdSystem.SubCategoryType:
- `0x08000000` W_Unclassified
- `0x08100000` W_GreatSword
- `0x08200000` W_ShortSword
- `0x08300000` W_Hammer
- `0x08400000` W_Lance
- `0x08500000` W_LongSword
- `0x08600000` W_SlashAxe
- `0x08700000` W_GunLance
- `0x08800000` W_DualBlades
- `0x08900000` W_Horn
- `0x08A00000` W_InsectGlaive
- `0x08B00000` W_ChargeAxe
- `0x08C00000` W_LightBowgun
- `0x08D00000` W_HeavyBowgun
- `0x08E00000` W_Bow
- `0x08F00000` W_Insect
- `0x09000000` W_Max

snow.data.DataDef.PlArmorId:
- `0x00000000` A_Table_None
- `0x0C000000` A_None
- `0x0000FFFF` A_NoneForPlEquipPack
- `0x00010000` A_Error
- `0x00010001` A_Changed_EX
- `0x0C1000AC` A_Head_Max
- `0x0C2000AC` A_Chest_Max
- `0x0C3000AC` A_Arm_Max
- `0x0C4000AC` A_Waist_Max
- `0x0C5000AC` A_Leg_Max

snow.data.ContentsIdSystem.WeaponId:
- `0x08000000` W_None
- `0x08000001` W_Unclassified_Max
- `0x08100084` W_GreatSword_Max
- `0x0820008A` W_ShortSword_Max
- `0x0830008D` W_Hammer_Max
- `0x08400086` W_Lance_Max
- `0x08D00078` W_HeavyBowgun_Max
- `0x08C00075` W_LightBowgun_Max
- `0x0850008B` W_LongSword_Max
- `0x0860008B` W_SlashAxe_Max
- `0x08700088` W_GunLance_Max
- `0x08E00091` W_Bow_Max
- `0x08800085` W_DualBlades_Max
- `0x08900085` W_Horn_Max
- `0x08A00081` W_InsectGlaive_Max
- `0x08B00078` W_ChargeAxe_Max
- `0x08F00014` W_Insect_Max
- `0x08F00015` Error

# Great Sword
| Weapon ID | Enum Name | Model ID | Model Name | Sort ID | Weapon Name |
| --- | --- | --- | --- | --- | --- |
| 08100000 | W_GreatSword_000 | 08100005 | G_Swd024 | 39 | Buster Sword I |
| 08100001 | W_GreatSword_001 | 08100005 | G_Swd024 | 40 | Buster Blade |
| 08100002 | W_GreatSword_002 | 08100014 | G_Swd059 | 37 | Iron Sword I |
| 08100003 | W_GreatSword_003 | 08100014 | G_Swd059 | 38 | Steel Sword |
| 08100004 | W_GreatSword_004 | 08100006 | G_Swd025 | 13 | Axeblade I |
| 08100005 | W_GreatSword_005 | 08100006 | G_Swd025 | 14 | Axeblade II |
| 08100006 | W_GreatSword_006 | 08100006 | G_Swd025 | 15 | Colossal Axeblade |
| 08100007 | W_GreatSword_007 | 08100015 | G_Swd060 | 41 | Chrome Razor I |
| 08100008 | W_GreatSword_008 | 08100015 | G_Swd060 | 42 | Chrome Quietus |
| 08100009 | W_GreatSword_009 | 08100008 | G_Swd027 | 58 | Bone Blade I |
| 0810000A | W_GreatSword_010 | 08100008 | G_Swd027 | 59 | Bone Slasher |
| 0810000B | W_GreatSword_011 | 08100009 | G_Swd028 | 60 | Jawblade I |
| 0810000C | W_GreatSword_012 | 08100009 | G_Swd028 | 61 | Giant Jawblade |
| 0810000D | W_GreatSword_013 | 08100016 | G_Swd061 | 62 | Wyvern Fang I |
| 0810000E | W_GreatSword_014 | 08100016 | G_Swd061 | 63 | Great Wyvern Fang |
| 0810000F | W_GreatSword_015 | 08100007 | G_Swd026 | 64 | Golem Blade I |
| 08100010 | W_GreatSword_016 | 08100007 | G_Swd026 | 65 | Blade of Talos |
| 08100011 | W_GreatSword_017 | 08100017 | G_Swd062 | 43 | Barbaroi Blade I |
| 08100012 | W_GreatSword_018 | 08100017 | G_Swd062 | 44 | Barbaroi Blade II |
| 08100013 | W_GreatSword_019 | 08100017 | G_Swd062 | 45 | Crimson Goat |
| 08100014 | W_GreatSword_020 | 0810000B | G_Swd050 | 1 | Kamura Cleaver I |
| 08100015 | W_GreatSword_021 | 0810000B | G_Swd050 | 2 | Kamura Cleaver II |
| 08100016 | W_GreatSword_022 | 0810000B | G_Swd050 | 3 | Kamura Cleaver III |
| 08100017 | W_GreatSword_023 | 0810000B | G_Swd050 | 4 | Kamura Cleaver IV |
| 08100018 | W_GreatSword_024 | 0810000B | G_Swd050 | 5 | Kamura Cleaver V |
| 08100019 | W_GreatSword_025 | 0810000B | G_Swd050 | 6 | Kamura Ninja Cleaver |
| 0810001A | W_GreatSword_026 | 0810002C | G_Swd086 | 127 | Rampage Cleaver I |
| 0810001B | W_GreatSword_027 | 0810002C | G_Swd086 | 128 | Rampage Cleaver II |
| 0810001C | W_GreatSword_028 | 0810002C | G_Swd086 | 129 | Rampage Cleaver III |
| 0810001D | W_GreatSword_029 | 0810002C | G_Swd086 | 132 | Rampage Cleaver S |
| 0810001E | W_GreatSword_030 | 08100018 | G_Swd063 | 118 | Frozen Speartuna I |
| 0810001F | W_GreatSword_031 | 08100018 | G_Swd063 | 119 | Frozen Speartuna II |
| 08100020 | W_GreatSword_032 | 08100018 | G_Swd063 | 120 | Freezer Speartuna |
| 08100021 | W_GreatSword_033 | 0810002D | G_Swd087 | 121 | Ninja Parasol I |
| 08100022 | W_GreatSword_034 | 0810002D | G_Swd087 | 122 | Ninja Parasol II |
| 08100023 | W_GreatSword_035 | 0810002D | G_Swd087 | 123 | Dragonslayer Parasol |
| 08100024 | W_GreatSword_036 | 0810001A | G_Swd065 | 124 | Cat's Soul I |
| 08100025 | W_GreatSword_037 | 0810001A | G_Swd065 | 125 | Cat's Soul II |
| 08100026 | W_GreatSword_038 | 0810001A | G_Swd065 | 126 | Cat's Curse |
| 08100027 | W_GreatSword_039 | 08100019 | G_Swd064 | 112 | Wyvern's Perch I |
| 08100028 | W_GreatSword_040 | 08100019 | G_Swd064 | 113 | Wyvern's Perch II |
| 08100029 | W_GreatSword_041 | 08100019 | G_Swd064 | 114 | Roguish Deathcap |
| 0810002A | W_GreatSword_042 | 08100029 | G_Swd083 | 115 | Sleepy Shellblade I |
| 0810002B | W_GreatSword_043 | 08100029 | G_Swd083 | 116 | Sleepy Shellblade II |
| 0810002C | W_GreatSword_044 | 08100029 | G_Swd083 | 117 | Soporific Shellblade |
| 0810002D | W_GreatSword_045 | 0810000C | G_Swd051 | 25 | Izuchi Blade I |
| 0810002E | W_GreatSword_046 | 0810000C | G_Swd051 | 26 | Izuchi Blade II |
| 0810002F | W_GreatSword_047 | 0810000C | G_Swd051 | 27 | Snapper Blade |
| 08100030 | W_GreatSword_048 | 0810000D | G_Swd052 | 52 | Aknosom Blade I |
| 08100031 | W_GreatSword_049 | 0810000D | G_Swd052 | 53 | Aknosom Blade II |
| 08100032 | W_GreatSword_050 | 0810000D | G_Swd052 | 54 | Daybreak Cleaver |
| 08100033 | W_GreatSword_051 | 0810000E | G_Swd053 | 55 | Tetranadon Edge I |
| 08100034 | W_GreatSword_052 | 0810000E | G_Swd053 | 56 | Tetranadon Edge II |
| 08100035 | W_GreatSword_053 | 0810000E | G_Swd053 | 57 | Tetranadon Cutter |
| 08100036 | W_GreatSword_054 | 0810000F | G_Swd054 | 34 | Frilled Blade I |
| 08100037 | W_GreatSword_055 | 0810000F | G_Swd054 | 35 | Frilled Blade II |
| 08100038 | W_GreatSword_056 | 0810000F | G_Swd054 | 36 | Illusory Frilled Blade |
| 08100039 | W_GreatSword_057 | 08100010 | G_Swd055 | 93 | Sinister Blade I |
| 0810003A | W_GreatSword_058 | 08100010 | G_Swd055 | 94 | Sinister Blade II |
| 0810003B | W_GreatSword_059 | 08100010 | G_Swd055 | 95 | Sinister Shadowblade |
| 0810003C | W_GreatSword_060 | 08100011 | G_Swd056 | 7 | Gossblade I |
| 0810003D | W_GreatSword_061 | 08100011 | G_Swd056 | 8 | Gossblade II |
| 0810003E | W_GreatSword_062 | 08100011 | G_Swd056 | 9 | Abominable Great Sword |
| 0810003F | W_GreatSword_063 | 08100012 | G_Swd057 | 99 | Azure Elder Great Sword I |
| 08100040 | W_GreatSword_064 | 08100012 | G_Swd057 | 100 | Azure Elder Great Sword II |
| 08100041 | W_GreatSword_065 | 08100012 | G_Swd057 | 101 | Abyssal Galeblade |
| 08100042 | W_GreatSword_066 | 08100013 | G_Swd058 | 102 | Thunderbolt Great Sword I |
| 08100043 | W_GreatSword_067 | 08100013 | G_Swd058 | 103 | Abyssal Storm Cleaver |
| 08100044 | W_GreatSword_068 | 0810002A | G_Swd084 | 110 | Redwing Claymore I |
| 08100045 | W_GreatSword_069 | 0810002A | G_Swd084 | 111 | Reddnaught Claymore |
| 08100046 | W_GreatSword_070 | 0810001B | G_Swd066 | 90 | Snowclad I |
| 08100047 | W_GreatSword_071 | 0810001B | G_Swd066 | 91 | Snowclad II |
| 08100048 | W_GreatSword_072 | 0810001B | G_Swd066 | 92 | Lagombi Charlotte |
| 08100049 | W_GreatSword_073 | 0810001D | G_Swd068 | 87 | Cataclysm Sword I |
| 0810004A | W_GreatSword_074 | 0810001D | G_Swd068 | 88 | Cataclysm Sword II |
| 0810004B | W_GreatSword_075 | 0810001D | G_Swd068 | 89 | Cataclysm Blade |
| 0810004C | W_GreatSword_076 | 0810001E | G_Swd069 | 16 | Carapace Sword I |
| 0810004D | W_GreatSword_077 | 0810001E | G_Swd069 | 17 | Carapace Sword II |
| 0810004E | W_GreatSword_078 | 0810001E | G_Swd069 | 18 | Carapace Blade |
| 0810004F | W_GreatSword_079 | 0810001F | G_Swd070 | 22 | Khezu Shock Sword I |
| 08100050 | W_GreatSword_080 | 0810001F | G_Swd070 | 23 | Khezu Shock Sword II |
| 08100051 | W_GreatSword_081 | 0810001F | G_Swd070 | 24 | Khezu Shock Blade |
| 08100052 | W_GreatSword_082 | 08100020 | G_Swd071 | 28 | Deadly Serpentblade I |
| 08100053 | W_GreatSword_083 | 08100020 | G_Swd071 | 29 | Deadly Serpentblade II |
| 08100054 | W_GreatSword_084 | 08100020 | G_Swd071 | 30 | Poison Serpentblade |
| 08100055 | W_GreatSword_085 | 0810000A | G_Swd030 | 46 | Pukei Edge I |
| 08100056 | W_GreatSword_086 | 0810000A | G_Swd030 | 47 | Pukei Edge II |
| 08100057 | W_GreatSword_087 | 0810000A | G_Swd030 | 48 | Datura Cleaver |
| 08100058 | W_GreatSword_088 | 0810002B | G_Swd085 | 69 | Jyura Mudblade I |
| 08100059 | W_GreatSword_089 | 0810002B | G_Swd085 | 70 | Jyura Mudblade II |
| 0810005A | W_GreatSword_090 | 0810002B | G_Swd085 | 71 | Terracutter |
| 0810005B | W_GreatSword_091 | 08100021 | G_Swd072 | 66 | Valkyrie Blade I |
| 0810005C | W_GreatSword_092 | 08100021 | G_Swd072 | 67 | Valkyrie Blade II |
| 0810005D | W_GreatSword_093 | 08100021 | G_Swd072 | 68 | Sieglinde |
| 0810005E | W_GreatSword_094 | 08100003 | G_Swd011 | 49 | Icicle Fang I |
| 0810005F | W_GreatSword_095 | 08100003 | G_Swd011 | 50 | Icicle Fang II |
| 08100060 | W_GreatSword_096 | 08100003 | G_Swd011 | 51 | Paladire |
| 08100061 | W_GreatSword_097 | 08100002 | G_Swd005 | 81 | Flammenzahn I |
| 08100062 | W_GreatSword_098 | 08100002 | G_Swd005 | 82 | Flammenzahn II |
| 08100063 | W_GreatSword_099 | 08100002 | G_Swd005 | 83 | Gnashing Flammenzahn |
| 08100064 | W_GreatSword_100 | 08100022 | G_Swd074 | 31 | Hidden Blade I |
| 08100065 | W_GreatSword_101 | 08100022 | G_Swd074 | 32 | Hidden Blade II |
| 08100066 | W_GreatSword_102 | 08100022 | G_Swd074 | 33 | Dark of Night |
| 08100067 | W_GreatSword_103 | 08100023 | G_Swd075 | 10 | Hanayako Yohino I |
| 08100068 | W_GreatSword_104 | 08100023 | G_Swd075 | 11 | Hanayako Yohino II |
| 08100069 | W_GreatSword_105 | 08100023 | G_Swd075 | 12 | Akanesasu |
| 0810006A | W_GreatSword_106 | 08100001 | G_Swd003 | 72 | Red Wing I |
| 0810006B | W_GreatSword_107 | 08100001 | G_Swd003 | 73 | Red Wing II |
| 0810006C | W_GreatSword_108 | 08100001 | G_Swd003 | 74 | Rathalos Firesword |
| 0810006D | W_GreatSword_109 | 08100024 | G_Swd076 | 84 | Usurper's Storm I |
| 0810006E | W_GreatSword_110 | 08100024 | G_Swd076 | 85 | Usurper's Storm II |
| 0810006F | W_GreatSword_111 | 08100024 | G_Swd076 | 86 | Despot's Blackstorm |
| 08100070 | W_GreatSword_112 | 08100004 | G_Swd015 | 19 | Tiger Jawblade I |
| 08100071 | W_GreatSword_113 | 08100004 | G_Swd015 | 20 | Tiger Jawblade II |
| 08100072 | W_GreatSword_114 | 08100004 | G_Swd015 | 21 | Tigrex Great Sword |
| 08100073 | W_GreatSword_115 | 08100025 | G_Swd078 | 75 | Quarrel Hornsword I |
| 08100074 | W_GreatSword_116 | 08100025 | G_Swd078 | 76 | Quarrel Hornsword II |
| 08100075 | W_GreatSword_117 | 08100025 | G_Swd078 | 77 | Feud Hornsword |
| 08100076 | W_GreatSword_118 | 08100000 | G_Swd001 | 104 | Icesteel Edge I |
| 08100077 | W_GreatSword_119 | 08100000 | G_Swd001 | 105 | Daora's Decimator |
| 08100078 | W_GreatSword_120 | 08100026 | G_Swd079 | 106 | Teostra Blade I |
| 08100079 | W_GreatSword_121 | 08100026 | G_Swd079 | 107 | King Teostra Blade |
| 0810007A | W_GreatSword_122 | 08100027 | G_Swd080 | 108 | Grand Shamshir I |
| 0810007B | W_GreatSword_123 | 08100027 | G_Swd080 | 109 | Foreboding Shamshir |
| 0810007C | W_GreatSword_124 | 08100028 | G_Swd081 | 96 | Demon Rod I |
| 0810007D | W_GreatSword_125 | 08100028 | G_Swd081 | 97 | Demon Rod II |
| 0810007E | W_GreatSword_126 | 08100028 | G_Swd081 | 98 | Great Demon Rod |
| 0810007F | W_GreatSword_127 | 0810001C | G_Swd067 | 78 | Hack Blade I |
| 08100080 | W_GreatSword_128 | 0810001C | G_Swd067 | 79 | Hack Blade II |
| 08100081 | W_GreatSword_129 | 0810001C | G_Swd067 | 80 | Jaggi Greatblade |
| 08100082 | W_GreatSword_130 | 0810002C | G_Swd086 | 130 | Rampage Cleaver IV |
| 08100083 | W_GreatSword_131 | 0810002C | G_Swd086 | 131 | Rampage Cleaver V |

# Sword & Shield
| Weapon ID | Enum Name | Model ID | Model Name | Sort ID | Weapon Name |
| --- | --- | --- | --- | --- | --- |
| 08200000 | W_ShortSword_000 | 08200005 | S_Swd018 | 31 | Hunter's Knife I |
| 08200001 | W_ShortSword_001 | 08200005 | S_Swd018 | 32 | Hunter's Knife II |
| 08200002 | W_ShortSword_002 | 08200005 | S_Swd018 | 33 | Fighter Sword |
| 08200003 | W_ShortSword_003 | 08200012 | S_Swd058 | 28 | Frost Edge I |
| 08200004 | W_ShortSword_004 | 08200012 | S_Swd058 | 29 | Frost Edge II |
| 08200005 | W_ShortSword_005 | 08200012 | S_Swd058 | 30 | Hi Frost Edge |
| 08200006 | W_ShortSword_006 | 08200006 | S_Swd019 | 34 | Iron Beater I |
| 08200007 | W_ShortSword_007 | 08200006 | S_Swd019 | 35 | Iron Beater II |
| 08200008 | W_ShortSword_008 | 08200006 | S_Swd019 | 36 | Smithy's Pride |
| 08200009 | W_ShortSword_009 | 08200013 | S_Swd059 | 131 | Ninja Sword I |
| 0820000A | W_ShortSword_010 | 08200013 | S_Swd059 | 132 | Hi Ninja Sword |
| 0820000B | W_ShortSword_011 | 08200014 | S_Swd060 | 40 | Odyssey Blade I |
| 0820000C | W_ShortSword_012 | 08200014 | S_Swd060 | 41 | Odyssey Blade II |
| 0820000D | W_ShortSword_013 | 08200014 | S_Swd060 | 42 | Master Odyssey |
| 0820000E | W_ShortSword_014 | 08200007 | S_Swd021 | 61 | Bone Kukri I |
| 0820000F | W_ShortSword_015 | 08200007 | S_Swd021 | 62 | Bone Kukri II |
| 08200010 | W_ShortSword_016 | 08200007 | S_Swd021 | 63 | Chief Kukri |
| 08200011 | W_ShortSword_017 | 08200008 | S_Swd022 | 64 | Bone Barong I |
| 08200012 | W_ShortSword_018 | 08200008 | S_Swd022 | 65 | Bone Barong II |
| 08200013 | W_ShortSword_019 | 08200008 | S_Swd022 | 66 | Grand Barong |
| 08200014 | W_ShortSword_020 | 08200015 | S_Swd061 | 70 | Bone Tabar I |
| 08200015 | W_ShortSword_021 | 08200015 | S_Swd061 | 71 | Bone Tabar II |
| 08200016 | W_ShortSword_022 | 08200015 | S_Swd061 | 72 | Ragdos Tabar |
| 08200017 | W_ShortSword_023 | 0820000A | S_Swd050 | 1 | Kamura Sword I |
| 08200018 | W_ShortSword_024 | 0820000A | S_Swd050 | 2 | Kamura Sword II |
| 08200019 | W_ShortSword_025 | 0820000A | S_Swd050 | 3 | Kamura Sword III |
| 0820001A | W_ShortSword_026 | 0820000A | S_Swd050 | 4 | Kamura Sword IV |
| 0820001B | W_ShortSword_027 | 0820000A | S_Swd050 | 5 | Kamura Sword V |
| 0820001C | W_ShortSword_028 | 0820000A | S_Swd050 | 6 | Kamura Ninja Sword |
| 0820001D | W_ShortSword_029 | 0820002E | S_Swd089 | 133 | Rampage Sword I |
| 0820001E | W_ShortSword_030 | 0820002E | S_Swd089 | 134 | Rampage Sword II |
| 0820001F | W_ShortSword_031 | 0820002E | S_Swd089 | 135 | Rampage Sword III |
| 08200020 | W_ShortSword_032 | 0820002E | S_Swd089 | 138 | Rampage Sword S |
| 08200021 | W_ShortSword_033 | 08200016 | S_Swd063 | 128 | Catspaw I |
| 08200022 | W_ShortSword_034 | 08200016 | S_Swd063 | 129 | Catspaw II |
| 08200023 | W_ShortSword_035 | 08200016 | S_Swd063 | 130 | Catburglar |
| 08200024 | W_ShortSword_036 | 0820002D | S_Swd088 | 125 | Sleepy Shellsword I |
| 08200025 | W_ShortSword_037 | 0820002D | S_Swd088 | 126 | Sleepy Shellsword II |
| 08200026 | W_ShortSword_038 | 0820002D | S_Swd088 | 127 | Waking Nightmare |
| 08200027 | W_ShortSword_039 | 0820000B | S_Swd051 | 88 | Izuchi Sickle I |
| 08200028 | W_ShortSword_040 | 0820000B | S_Swd051 | 89 | Izuchi Sickle II |
| 08200029 | W_ShortSword_041 | 0820000B | S_Swd051 | 90 | Snapper Sickle |
| 0820002A | W_ShortSword_042 | 0820000C | S_Swd052 | 52 | Cunning Riposte I |
| 0820002B | W_ShortSword_043 | 0820000C | S_Swd052 | 53 | Cunning Riposte II |
| 0820002C | W_ShortSword_044 | 0820000C | S_Swd052 | 54 | Guard Breaker |
| 0820002D | W_ShortSword_045 | 0820000D | S_Swd053 | 13 | Exorcising Sword I |
| 0820002E | W_ShortSword_046 | 0820000D | S_Swd053 | 14 | Exorcising Sword II |
| 0820002F | W_ShortSword_047 | 0820000D | S_Swd053 | 15 | Shaucha Pureblade |
| 08200030 | W_ShortSword_048 | 0820000E | S_Swd054 | 108 | Sinister Sword I |
| 08200031 | W_ShortSword_049 | 0820000E | S_Swd054 | 109 | Sinister Sword II |
| 08200032 | W_ShortSword_050 | 0820000E | S_Swd054 | 110 | Sinister Shadekeeper |
| 08200033 | W_ShortSword_051 | 0820000F | S_Swd055 | 85 | Mincing Blade I |
| 08200034 | W_ShortSword_052 | 0820000F | S_Swd055 | 86 | Mincing Blade II |
| 08200035 | W_ShortSword_053 | 0820000F | S_Swd055 | 87 | Chef's Knife |
| 08200036 | W_ShortSword_054 | 08200010 | S_Swd056 | 114 | Azure Elder Sword I |
| 08200037 | W_ShortSword_055 | 08200010 | S_Swd056 | 115 | Azure Elder Sword II |
| 08200038 | W_ShortSword_056 | 08200010 | S_Swd056 | 116 | Abyssal Gale Shredder |
| 08200039 | W_ShortSword_057 | 08200011 | S_Swd057 | 117 | Thunderbolt Sword I |
| 0820003A | W_ShortSword_058 | 08200011 | S_Swd057 | 118 | Abyssal Storm Shredder |
| 0820003B | W_ShortSword_059 | 0820002C | S_Swd087 | 123 | Redwing Swiftblade I |
| 0820003C | W_ShortSword_060 | 0820002C | S_Swd087 | 124 | Vermilion Orgul |
| 0820003D | W_ShortSword_061 | 08200017 | S_Swd064 | 79 | Brash Buddies I |
| 0820003E | W_ShortSword_062 | 08200017 | S_Swd064 | 80 | Brash Buddies II |
| 0820003F | W_ShortSword_063 | 08200017 | S_Swd064 | 81 | Cocky Comrades |
| 08200040 | W_ShortSword_064 | 08200018 | S_Swd065 | 94 | Secta Nulo I |
| 08200041 | W_ShortSword_065 | 08200018 | S_Swd065 | 95 | Secta Unu |
| 08200042 | W_ShortSword_066 | 0820001C | S_Swd069 | 105 | Secta Nulo Red I |
| 08200043 | W_ShortSword_067 | 0820001C | S_Swd069 | 106 | Secta Nulo Red II |
| 08200044 | W_ShortSword_068 | 0820001C | S_Swd069 | 107 | Secta Unu Red |
| 08200045 | W_ShortSword_069 | 0820001A | S_Swd067 | 103 | Secta Nulo Yellow I |
| 08200046 | W_ShortSword_070 | 0820001A | S_Swd067 | 104 | Secta Unu Yellow |
| 08200047 | W_ShortSword_071 | 0820001B | S_Swd068 | 96 | Secta Nulo White I |
| 08200048 | W_ShortSword_072 | 0820001B | S_Swd068 | 97 | Secta Unu White |
| 08200049 | W_ShortSword_073 | 08200019 | S_Swd066 | 101 | Secta Nulo Green I |
| 0820004A | W_ShortSword_074 | 08200019 | S_Swd066 | 102 | Secta Unu Green |
| 0820004B | W_ShortSword_075 | 0820001D | S_Swd070 | 98 | Secta Nulo Black I |
| 0820004C | W_ShortSword_076 | 0820001D | S_Swd070 | 99 | Secta Nulo Black II |
| 0820004D | W_ShortSword_077 | 0820001D | S_Swd070 | 100 | Secta Unu Black |
| 0820004E | W_ShortSword_078 | 0820001E | S_Swd071 | 58 | Hypnos Knife I |
| 0820004F | W_ShortSword_079 | 0820001E | S_Swd071 | 59 | Hypnos Knife II |
| 08200050 | W_ShortSword_080 | 0820001E | S_Swd071 | 60 | Morpheus Knife |
| 08200051 | W_ShortSword_081 | 0820001F | S_Swd072 | 37 | Soldier's Dagger I |
| 08200052 | W_ShortSword_082 | 0820001F | S_Swd072 | 38 | Soldier's Dagger II |
| 08200053 | W_ShortSword_083 | 0820001F | S_Swd072 | 39 | Commander's Dagger |
| 08200054 | W_ShortSword_084 | 08200020 | S_Swd073 | 19 | Dirty Baron I |
| 08200055 | W_ShortSword_085 | 08200020 | S_Swd073 | 20 | Dirty Baron II |
| 08200056 | W_ShortSword_086 | 08200020 | S_Swd073 | 21 | Dirty Marquis |
| 08200057 | W_ShortSword_087 | 08200021 | S_Swd074 | 22 | Royal Claw I |
| 08200058 | W_ShortSword_088 | 08200021 | S_Swd074 | 23 | Royal Claw II |
| 08200059 | W_ShortSword_089 | 08200021 | S_Swd074 | 24 | Royal Ludroth Claw |
| 0820005A | W_ShortSword_090 | 08200022 | S_Swd075 | 73 | Carapace Mace I |
| 0820005B | W_ShortSword_091 | 08200022 | S_Swd075 | 74 | Carapace Mace II |
| 0820005C | W_ShortSword_092 | 08200022 | S_Swd075 | 75 | Barroth Club |
| 0820005D | W_ShortSword_093 | 08200023 | S_Swd076 | 55 | Khezu Razor I |
| 0820005E | W_ShortSword_094 | 08200023 | S_Swd076 | 56 | Khezu Razor II |
| 0820005F | W_ShortSword_095 | 08200023 | S_Swd076 | 57 | Painful Razor |
| 08200060 | W_ShortSword_096 | 08200024 | S_Swd077 | 91 | Lava Pick I |
| 08200061 | W_ShortSword_097 | 08200024 | S_Swd077 | 92 | Lava Pick II |
| 08200062 | W_ShortSword_098 | 08200024 | S_Swd077 | 93 | Burly Beak |
| 08200063 | W_ShortSword_099 | 08200009 | S_Swd030 | 43 | Pukei Sword I |
| 08200064 | W_ShortSword_100 | 08200009 | S_Swd030 | 44 | Pukei Sword II |
| 08200065 | W_ShortSword_101 | 08200009 | S_Swd030 | 45 | Venomedge |
| 08200066 | W_ShortSword_102 | 08200001 | S_Swd003 | 67 | Princess Rapier I |
| 08200067 | W_ShortSword_103 | 08200001 | S_Swd003 | 68 | Princess Rapier II |
| 08200068 | W_ShortSword_104 | 08200001 | S_Swd003 | 69 | Queen Rapier |
| 08200069 | W_ShortSword_105 | 08200025 | S_Swd078 | 49 | Icicle Spike I |
| 0820006A | W_ShortSword_106 | 08200025 | S_Swd078 | 50 | Icicle Spike II |
| 0820006B | W_ShortSword_107 | 08200025 | S_Swd078 | 51 | Nardebosche |
| 0820006C | W_ShortSword_108 | 08200002 | S_Swd006 | 82 | Flammensucher I |
| 0820006D | W_ShortSword_109 | 08200002 | S_Swd006 | 83 | Flammensucher II |
| 0820006E | W_ShortSword_110 | 08200002 | S_Swd006 | 84 | Gnashing Flammensucher |
| 0820006F | W_ShortSword_111 | 08200004 | S_Swd014 | 7 | Hidden Edge I |
| 08200070 | W_ShortSword_112 | 08200004 | S_Swd014 | 8 | Hidden Edge II |
| 08200071 | W_ShortSword_113 | 08200004 | S_Swd014 | 9 | Flash in the Night |
| 08200072 | W_ShortSword_114 | 08200026 | S_Swd080 | 10 | Hana no Nagoriwo I |
| 08200073 | W_ShortSword_115 | 08200026 | S_Swd080 | 11 | Hana no Nagoriwo II |
| 08200074 | W_ShortSword_116 | 08200026 | S_Swd080 | 12 | Kurenawi Ougi |
| 08200075 | W_ShortSword_117 | 08200027 | S_Swd081 | 46 | Djinn I |
| 08200076 | W_ShortSword_118 | 08200027 | S_Swd081 | 47 | Djinn II |
| 08200077 | W_ShortSword_119 | 08200027 | S_Swd081 | 48 | Blazing Falchion |
| 08200078 | W_ShortSword_120 | 08200028 | S_Swd082 | 16 | Usurper's Firebolt I |
| 08200079 | W_ShortSword_121 | 08200028 | S_Swd082 | 17 | Usurper's Firebolt II |
| 0820007A | W_ShortSword_122 | 08200028 | S_Swd082 | 18 | Despot's Crookbolt |
| 0820007B | W_ShortSword_123 | 08200003 | S_Swd010 | 25 | Rex Talon I |
| 0820007C | W_ShortSword_124 | 08200003 | S_Swd010 | 26 | Rex Talon II |
| 0820007D | W_ShortSword_125 | 08200003 | S_Swd010 | 27 | Tigrex Sword |
| 0820007E | W_ShortSword_126 | 08200029 | S_Swd084 | 76 | Studded Club I |
| 0820007F | W_ShortSword_127 | 08200029 | S_Swd084 | 77 | Studded Club II |
| 08200080 | W_ShortSword_128 | 08200029 | S_Swd084 | 78 | Spiked Bat |
| 08200081 | W_ShortSword_129 | 0820002A | S_Swd085 | 119 | Icesteel Dagger I |
| 08200082 | W_ShortSword_130 | 0820002A | S_Swd085 | 120 | Daora's Razor |
| 08200083 | W_ShortSword_131 | 08200000 | S_Swd001 | 121 | Teostra's Spada I |
| 08200084 | W_ShortSword_132 | 08200000 | S_Swd001 | 122 | Teostra's Emblem |
| 08200085 | W_ShortSword_133 | 0820002B | S_Swd086 | 111 | Rajang Club I |
| 08200086 | W_ShortSword_134 | 0820002B | S_Swd086 | 112 | Rajang Club II |
| 08200087 | W_ShortSword_135 | 0820002B | S_Swd086 | 113 | Banned Rajang Club |
| 08200088 | W_ShortSword_136 | 0820002E | S_Swd089 | 136 | Rampage Sword IV |
| 08200089 | W_ShortSword_137 | 0820002E | S_Swd089 | 137 | Rampage Sword V |

# Hammer
| Weapon ID | Enum Name | Model ID | Model Name | Sort ID | Weapon Name |
| --- | --- | --- | --- | --- | --- |
| 08300000 | W_Hammer_000 | 08300004 | Ham019 | 25 | Iron Hammer I |
| 08300001 | W_Hammer_001 | 08300004 | Ham019 | 26 | Iron Devil |
| 08300002 | W_Hammer_002 | 08300003 | Ham018 | 27 | War Hammer I |
| 08300003 | W_Hammer_003 | 08300003 | Ham018 | 28 | War Mace |
| 08300004 | W_Hammer_004 | 08300013 | Ham059 | 22 | Gun Hammer I |
| 08300005 | W_Hammer_005 | 08300013 | Ham059 | 23 | Gun Hammer II |
| 08300006 | W_Hammer_006 | 08300013 | Ham059 | 24 | Deadeye Revolver |
| 08300007 | W_Hammer_007 | 08300014 | Ham060 | 31 | Great Nova I |
| 08300008 | W_Hammer_008 | 08300014 | Ham060 | 32 | Great Nova II |
| 08300009 | W_Hammer_009 | 08300014 | Ham060 | 33 | Super Nova |
| 0830000A | W_Hammer_010 | 08300001 | Ham007 | 58 | Frozen Core I |
| 0830000B | W_Hammer_011 | 08300001 | Ham007 | 59 | Frozen Core II |
| 0830000C | W_Hammer_012 | 08300001 | Ham007 | 60 | Cocytus |
| 0830000D | W_Hammer_013 | 08300015 | Ham061 | 46 | Devil Masher I |
| 0830000E | W_Hammer_014 | 08300015 | Ham061 | 47 | Devil Masher II |
| 0830000F | W_Hammer_015 | 08300015 | Ham061 | 48 | Iron Devil's Soul |
| 08300010 | W_Hammer_016 | 08300016 | Ham062 | 29 | War Stamp I |
| 08300011 | W_Hammer_017 | 08300016 | Ham062 | 30 | War Basher |
| 08300012 | W_Hammer_018 | 08300017 | Ham063 | 61 | Bone Hammer I |
| 08300013 | W_Hammer_019 | 08300017 | Ham063 | 62 | Bone Hammer II |
| 08300014 | W_Hammer_020 | 08300017 | Ham063 | 63 | Hard Bone Hammer |
| 08300015 | W_Hammer_021 | 08300018 | Ham064 | 70 | Cyclo-Hammer I |
| 08300016 | W_Hammer_022 | 08300018 | Ham064 | 71 | Cyclo-Hammer II |
| 08300017 | W_Hammer_023 | 08300018 | Ham064 | 72 | Atlas Hammer |
| 08300018 | W_Hammer_024 | 08300005 | Ham020 | 64 | Bone Bludgeon I |
| 08300019 | W_Hammer_025 | 08300005 | Ham020 | 65 | Bone Bludgeon II |
| 0830001A | W_Hammer_026 | 08300005 | Ham020 | 66 | Heavy Bone Bludgeon |
| 0830001B | W_Hammer_027 | 0830000A | Ham050 | 1 | Kamura Hammer I |
| 0830001C | W_Hammer_028 | 0830000A | Ham050 | 2 | Kamura Hammer II |
| 0830001D | W_Hammer_029 | 0830000A | Ham050 | 3 | Kamura Hammer III |
| 0830001E | W_Hammer_030 | 0830000A | Ham050 | 4 | Kamura Hammer IV |
| 0830001F | W_Hammer_031 | 0830000A | Ham050 | 5 | Kamura Hammer V |
| 08300020 | W_Hammer_032 | 0830000A | Ham050 | 6 | Kamura Ninja Hammer |
| 08300021 | W_Hammer_033 | 0830002E | Ham089 | 136 | Rampage Hammer I |
| 08300022 | W_Hammer_034 | 0830002E | Ham089 | 137 | Rampage Hammer II |
| 08300023 | W_Hammer_035 | 0830002E | Ham089 | 138 | Rampage Hammer III |
| 08300024 | W_Hammer_036 | 0830002E | Ham089 | 141 | Rampage Hammer S |
| 08300025 | W_Hammer_037 | 08300019 | Ham065 | 126 | Teddybear I |
| 08300026 | W_Hammer_038 | 08300019 | Ham065 | 127 | Teddybear II |
| 08300027 | W_Hammer_039 | 08300019 | Ham065 | 128 | Sleepy Bear |
| 08300028 | W_Hammer_040 | 0830001B | Ham068 | 129 | Graceful Death I |
| 08300029 | W_Hammer_041 | 0830001B | Ham068 | 130 | Graceful Death II |
| 0830002A | W_Hammer_042 | 0830001B | Ham068 | 131 | Graceful Death III |
| 0830002B | W_Hammer_043 | 0830001B | Ham068 | 132 | Yadora Morte |
| 0830002C | W_Hammer_044 | 0830001A | Ham066 | 133 | Pumpking I |
| 0830002D | W_Hammer_045 | 0830001A | Ham066 | 134 | Pumpking II |
| 0830002E | W_Hammer_046 | 0830001A | Ham066 | 135 | Jack-'o-lantern King |
| 0830002F | W_Hammer_047 | 0830000B | Ham051 | 95 | Izuchi Hammer I |
| 08300030 | W_Hammer_048 | 0830000B | Ham051 | 96 | Izuchi Hammer II |
| 08300031 | W_Hammer_049 | 0830000B | Ham051 | 97 | Snapper Hammer |
| 08300032 | W_Hammer_050 | 0830000C | Ham052 | 16 | Five-Pronged Hammer I |
| 08300033 | W_Hammer_051 | 0830000C | Ham052 | 17 | Five-Pronged Hammer II |
| 08300034 | W_Hammer_052 | 0830000C | Ham052 | 18 | Great Pronged Hammer |
| 08300035 | W_Hammer_053 | 0830000D | Ham053 | 52 | Frilled Blow I |
| 08300036 | W_Hammer_054 | 0830000D | Ham053 | 53 | Frilled Blow II |
| 08300037 | W_Hammer_055 | 0830000D | Ham053 | 54 | Illusory Frilled Blow |
| 08300038 | W_Hammer_056 | 0830000E | Ham054 | 104 | Sinister Hammer I |
| 08300039 | W_Hammer_057 | 0830000E | Ham054 | 105 | Sinister Hammer II |
| 0830003A | W_Hammer_058 | 0830000E | Ham054 | 106 | Sinister Shade Hammer |
| 0830003B | W_Hammer_059 | 0830000F | Ham055 | 82 | Yeti Hammer I |
| 0830003C | W_Hammer_060 | 0830000F | Ham055 | 83 | Yeti Hammer II |
| 0830003D | W_Hammer_061 | 0830000F | Ham055 | 84 | Yeti Hammer III |
| 0830003E | W_Hammer_062 | 0830000F | Ham055 | 85 | Abominable Hammer |
| 0830003F | W_Hammer_063 | 08300010 | Ham056 | 13 | Almudron Hammer I |
| 08300040 | W_Hammer_064 | 08300010 | Ham056 | 14 | Almudron Hammer II |
| 08300041 | W_Hammer_065 | 08300010 | Ham056 | 15 | Doom Bringer Hammer |
| 08300042 | W_Hammer_066 | 08300011 | Ham057 | 113 | Azure Elder Hammer I |
| 08300043 | W_Hammer_067 | 08300011 | Ham057 | 114 | Azure Elder Hammer II |
| 08300044 | W_Hammer_068 | 08300011 | Ham057 | 115 | Abyssal Gale Mauler |
| 08300045 | W_Hammer_069 | 08300012 | Ham058 | 116 | Thunderbolt Hammer I |
| 08300046 | W_Hammer_070 | 08300012 | Ham058 | 117 | Abyssal Storm Mauler |
| 08300047 | W_Hammer_071 | 0830002D | Ham088 | 124 | Redwing Drill I |
| 08300048 | W_Hammer_072 | 0830002D | Ham088 | 125 | Reddnaught Hammer |
| 08300049 | W_Hammer_073 | 0830001C | Ham069 | 107 | Egg Hammer I |
| 0830004A | W_Hammer_074 | 0830001C | Ham069 | 108 | Egg Hammer II |
| 0830004B | W_Hammer_075 | 0830001C | Ham069 | 109 | Gargwa Hammer |
| 0830004C | W_Hammer_076 | 0830001D | Ham070 | 49 | Unbearable Hammer I |
| 0830004D | W_Hammer_077 | 0830001D | Ham070 | 50 | Unbearable Hammer II |
| 0830004E | W_Hammer_078 | 0830001D | Ham070 | 51 | Barbearic Hammer |
| 0830004F | W_Hammer_079 | 0830001E | Ham071 | 19 | Wroggi Hammer I |
| 08300050 | W_Hammer_080 | 0830001E | Ham071 | 20 | Wroggi Hammer II |
| 08300051 | W_Hammer_081 | 0830001E | Ham071 | 21 | Dirty Hammer |
| 08300052 | W_Hammer_082 | 08300006 | Ham027 | 43 | Kulu Bludgeon I |
| 08300053 | W_Hammer_083 | 08300006 | Ham027 | 44 | Kulu Bludgeon II |
| 08300054 | W_Hammer_084 | 08300006 | Ham027 | 45 | Kulu Crusher |
| 08300055 | W_Hammer_085 | 0830001F | Ham072 | 92 | Droth Splashhammer I |
| 08300056 | W_Hammer_086 | 0830001F | Ham072 | 93 | Droth Splashhammer II |
| 08300057 | W_Hammer_087 | 0830001F | Ham072 | 94 | Ludroth Dousehammer |
| 08300058 | W_Hammer_088 | 08300020 | Ham073 | 101 | Carapace Hammer I |
| 08300059 | W_Hammer_089 | 08300020 | Ham073 | 102 | Carapace Hammer II |
| 0830005A | W_Hammer_090 | 08300020 | Ham073 | 103 | Barroth Hammer |
| 0830005B | W_Hammer_091 | 08300021 | Ham074 | 55 | Bag o' Horrors I |
| 0830005C | W_Hammer_092 | 08300021 | Ham074 | 56 | Bag o' Horrors II |
| 0830005D | W_Hammer_093 | 08300021 | Ham074 | 57 | Bag o' Thunder |
| 0830005E | W_Hammer_094 | 08300022 | Ham075 | 89 | Calamitous Portent I |
| 0830005F | W_Hammer_095 | 08300022 | Ham075 | 90 | Calamitous Portent II |
| 08300060 | W_Hammer_096 | 08300022 | Ham075 | 91 | Catastrophic Portent |
| 08300061 | W_Hammer_097 | 08300023 | Ham076 | 10 | Binding Bludgeon I |
| 08300062 | W_Hammer_098 | 08300023 | Ham076 | 11 | Binding Bludgeon II |
| 08300063 | W_Hammer_099 | 08300023 | Ham076 | 12 | Armored Gogue |
| 08300064 | W_Hammer_100 | 08300007 | Ham028 | 73 | Pukei Hammer I |
| 08300065 | W_Hammer_101 | 08300007 | Ham028 | 74 | Pukei Hammer II |
| 08300066 | W_Hammer_102 | 08300007 | Ham028 | 75 | Datura Club |
| 08300067 | W_Hammer_103 | 08300024 | Ham077 | 76 | Basarios Blow I |
| 08300068 | W_Hammer_104 | 08300024 | Ham077 | 77 | Basarios Blow II |
| 08300069 | W_Hammer_105 | 08300024 | Ham077 | 78 | Basarios Bash |
| 0830006A | W_Hammer_106 | 08300009 | Ham043 | 40 | Glacial Bash I |
| 0830006B | W_Hammer_107 | 08300009 | Ham043 | 41 | Glacial Bash II |
| 0830006C | W_Hammer_108 | 08300009 | Ham043 | 42 | Glacial Crunch |
| 0830006D | W_Hammer_109 | 08300008 | Ham030 | 37 | Flaming Fury I |
| 0830006E | W_Hammer_110 | 08300008 | Ham030 | 38 | Flaming Fury II |
| 0830006F | W_Hammer_111 | 08300008 | Ham030 | 39 | Phoenix Fury |
| 08300070 | W_Hammer_112 | 08300002 | Ham012 | 98 | Hidden Breaker I |
| 08300071 | W_Hammer_113 | 08300002 | Ham012 | 99 | Hidden Breaker II |
| 08300072 | W_Hammer_114 | 08300002 | Ham012 | 100 | Night Eternal |
| 08300073 | W_Hammer_115 | 08300025 | Ham079 | 7 | Purity Hammer I |
| 08300074 | W_Hammer_116 | 08300025 | Ham079 | 8 | Purity Hammer II |
| 08300075 | W_Hammer_117 | 08300025 | Ham079 | 9 | Sinter Hammer |
| 08300076 | W_Hammer_118 | 08300026 | Ham080 | 79 | Red Bludgeon I |
| 08300077 | W_Hammer_119 | 08300026 | Ham080 | 80 | Red Bludgeon II |
| 08300078 | W_Hammer_120 | 08300026 | Ham080 | 81 | Huracan Hammer |
| 08300079 | W_Hammer_121 | 08300027 | Ham081 | 86 | Usurper's Thunder I |
| 0830007A | W_Hammer_122 | 08300027 | Ham081 | 87 | Usurper's Thunder II |
| 0830007B | W_Hammer_123 | 08300027 | Ham081 | 88 | Despot's Crackle |
| 0830007C | W_Hammer_124 | 08300028 | Ham082 | 34 | Striped Striker I |
| 0830007D | W_Hammer_125 | 08300028 | Ham082 | 35 | Striped Striker II |
| 0830007E | W_Hammer_126 | 08300028 | Ham082 | 36 | Tigrex Hammer |
| 0830007F | W_Hammer_127 | 08300029 | Ham083 | 67 | Diablos Hammer I |
| 08300080 | W_Hammer_128 | 08300029 | Ham083 | 68 | Diablos Hammer II |
| 08300081 | W_Hammer_129 | 08300029 | Ham083 | 69 | Diablos Tail |
| 08300082 | W_Hammer_130 | 08300000 | Ham001 | 118 | Icesteel Hammer I |
| 08300083 | W_Hammer_131 | 08300000 | Ham001 | 119 | Daora's Colossus |
| 08300084 | W_Hammer_132 | 0830002A | Ham084 | 120 | Teostra Cratermaker I |
| 08300085 | W_Hammer_133 | 0830002A | Ham084 | 121 | Teostra Cratergouger |
| 08300086 | W_Hammer_134 | 0830002B | Ham085 | 122 | Genie's Expanse I |
| 08300087 | W_Hammer_135 | 0830002B | Ham085 | 123 | Diamalto's Dream |
| 08300088 | W_Hammer_136 | 0830002C | Ham086 | 110 | Mane Malice I |
| 08300089 | W_Hammer_137 | 0830002C | Ham086 | 111 | Mane Malice II |
| 0830008A | W_Hammer_138 | 0830002C | Ham086 | 112 | Mane Malice Rajang |
| 0830008B | W_Hammer_139 | 0830002E | Ham089 | 139 | Rampage Hammer IV |
| 0830008C | W_Hammer_140 | 0830002E | Ham089 | 140 | Rampage Hammer V |

# Lance
| Weapon ID | Enum Name | Model ID | Model Name | Sort ID | Weapon Name |
| --- | --- | --- | --- | --- | --- |
| 08400000 | W_Lance_000 | 08400005 | Lan018 | 25 | Iron Lance I |
| 08400001 | W_Lance_001 | 08400005 | Lan018 | 26 | Iron Lance II |
| 08400002 | W_Lance_002 | 08400005 | Lan018 | 27 | Millennial Lance |
| 08400003 | W_Lance_003 | 08400012 | Lan058 | 28 | Paladin Lance I |
| 08400004 | W_Lance_004 | 08400012 | Lan058 | 29 | Paladin Lance II |
| 08400005 | W_Lance_005 | 08400012 | Lan058 | 30 | Rampart |
| 08400006 | W_Lance_006 | 08400006 | Lan020 | 53 | Drill Lance I |
| 08400007 | W_Lance_007 | 08400006 | Lan020 | 54 | Drill Lance II |
| 08400008 | W_Lance_008 | 08400006 | Lan020 | 55 | Gigadrill Lance |
| 08400009 | W_Lance_009 | 0840002B | Lan086 | 59 | Heat Lance I |
| 0840000A | W_Lance_010 | 0840002B | Lan086 | 60 | Heat Lance II |
| 0840000B | W_Lance_011 | 0840002B | Lan086 | 61 | Heatstinger |
| 0840000C | W_Lance_012 | 08400003 | Lan007 | 31 | Babel Spear I |
| 0840000D | W_Lance_013 | 08400003 | Lan007 | 32 | Babel Spear II |
| 0840000E | W_Lance_014 | 08400003 | Lan007 | 33 | Elder Babel Spear |
| 0840000F | W_Lance_015 | 08400013 | Lan059 | 40 | Growling Wyvern I |
| 08400010 | W_Lance_016 | 08400013 | Lan059 | 41 | Growling Wyvern II |
| 08400011 | W_Lance_017 | 08400013 | Lan059 | 42 | Roaring Wyvern |
| 08400012 | W_Lance_018 | 08400007 | Lan021 | 62 | Bone Lance I |
| 08400013 | W_Lance_019 | 08400007 | Lan021 | 63 | Hard Bone Lance |
| 08400014 | W_Lance_020 | 08400014 | Lan060 | 64 | Longhorn Spear I |
| 08400015 | W_Lance_021 | 08400014 | Lan060 | 65 | Longtusk Spear |
| 08400016 | W_Lance_022 | 08400015 | Lan061 | 66 | Barbarian Tusk I |
| 08400017 | W_Lance_023 | 08400015 | Lan061 | 67 | Barbarian Fang |
| 08400018 | W_Lance_024 | 0840000A | Lan050 | 1 | Kamura Spear I |
| 08400019 | W_Lance_025 | 0840000A | Lan050 | 2 | Kamura Spear II |
| 0840001A | W_Lance_026 | 0840000A | Lan050 | 3 | Kamura Spear III |
| 0840001B | W_Lance_027 | 0840000A | Lan050 | 4 | Kamura Spear IV |
| 0840001C | W_Lance_028 | 0840000A | Lan050 | 5 | Kamura Spear V |
| 0840001D | W_Lance_029 | 0840000A | Lan050 | 6 | Kamura Ninja Spear |
| 0840001E | W_Lance_030 | 0840002A | Lan085 | 129 | Rampage Spear I |
| 0840001F | W_Lance_031 | 0840002A | Lan085 | 130 | Rampage Spear II |
| 08400020 | W_Lance_032 | 0840002A | Lan085 | 131 | Rampage Spear III |
| 08400021 | W_Lance_033 | 0840002A | Lan085 | 134 | Rampage Spear S |
| 08400022 | W_Lance_034 | 08400029 | Lan084 | 22 | Sharktooth Spear I |
| 08400023 | W_Lance_035 | 08400029 | Lan084 | 23 | Sharktooth Spear II |
| 08400024 | W_Lance_036 | 08400029 | Lan084 | 24 | Razortooth Spear |
| 08400025 | W_Lance_037 | 08400017 | Lan063 | 119 | Plegis Needle I |
| 08400026 | W_Lance_038 | 08400017 | Lan063 | 120 | Plegis Needle II |
| 08400027 | W_Lance_039 | 08400017 | Lan063 | 121 | Mighty Plegis |
| 08400028 | W_Lance_040 | 08400018 | Lan064 | 122 | Alacrantze I |
| 08400029 | W_Lance_041 | 08400018 | Lan064 | 123 | Alacrantze II |
| 0840002A | W_Lance_042 | 08400018 | Lan064 | 124 | Alacrantze III |
| 0840002B | W_Lance_043 | 08400018 | Lan064 | 125 | Scorpion Lance |
| 0840002C | W_Lance_044 | 08400016 | Lan062 | 126 | Fragrance I |
| 0840002D | W_Lance_045 | 08400016 | Lan062 | 127 | Fragrance II |
| 0840002E | W_Lance_046 | 08400016 | Lan062 | 128 | Classy Fragrance |
| 0840002F | W_Lance_047 | 0840000B | Lan051 | 19 | Wind Thief Lance I |
| 08400030 | W_Lance_048 | 0840000B | Lan051 | 20 | Wind Thief Lance II |
| 08400031 | W_Lance_049 | 0840000B | Lan051 | 21 | Gale Lance |
| 08400032 | W_Lance_050 | 0840000C | Lan052 | 46 | Aknosom Lance I |
| 08400033 | W_Lance_051 | 0840000C | Lan052 | 47 | Aknosom Lance II |
| 08400034 | W_Lance_052 | 0840000C | Lan052 | 48 | Aknosom Lance III |
| 08400035 | W_Lance_053 | 0840000C | Lan052 | 49 | Dawnbreaker Lance |
| 08400036 | W_Lance_054 | 0840000D | Lan053 | 16 | Distension I |
| 08400037 | W_Lance_055 | 0840000D | Lan053 | 17 | Distension II |
| 08400038 | W_Lance_056 | 0840000D | Lan053 | 18 | Croaker |
| 08400039 | W_Lance_057 | 0840000E | Lan054 | 99 | Sinister Spear I |
| 0840003A | W_Lance_058 | 0840000E | Lan054 | 100 | Sinister Spear II |
| 0840003B | W_Lance_059 | 0840000E | Lan054 | 101 | Sinister Shadespear |
| 0840003C | W_Lance_060 | 0840000F | Lan055 | 7 | Goss Lance I |
| 0840003D | W_Lance_061 | 0840000F | Lan055 | 8 | Goss Lance II |
| 0840003E | W_Lance_062 | 0840000F | Lan055 | 9 | Abominable Lance |
| 0840003F | W_Lance_063 | 08400010 | Lan056 | 105 | Azure Elder Spear I |
| 08400040 | W_Lance_064 | 08400010 | Lan056 | 106 | Azure Elder Spear II |
| 08400041 | W_Lance_065 | 08400010 | Lan056 | 107 | Abyssal Gale Lance |
| 08400042 | W_Lance_066 | 08400011 | Lan057 | 108 | Thunderbolt Spear I |
| 08400043 | W_Lance_067 | 08400011 | Lan057 | 109 | Abyssal Storm Lance |
| 08400044 | W_Lance_068 | 08400028 | Lan083 | 117 | Redwing Spear I |
| 08400045 | W_Lance_069 | 08400028 | Lan083 | 118 | Reddnaught Spear |
| 08400046 | W_Lance_070 | 08400019 | Lan065 | 95 | Azure Crest I |
| 08400047 | W_Lance_071 | 08400019 | Lan065 | 96 | Azure Crest II |
| 08400048 | W_Lance_072 | 08400019 | Lan065 | 97 | Azure Crest III |
| 08400049 | W_Lance_073 | 08400019 | Lan065 | 98 | Great Azure |
| 0840004A | W_Lance_074 | 0840001A | Lan067 | 83 | Ploshasta I |
| 0840004B | W_Lance_075 | 0840001A | Lan067 | 84 | Ploshasta II |
| 0840004C | W_Lance_076 | 0840001A | Lan067 | 85 | Rhenohasta |
| 0840004D | W_Lance_077 | 08400008 | Lan029 | 89 | Kulu Spear I |
| 0840004E | W_Lance_078 | 08400008 | Lan029 | 90 | Kulu Spear II |
| 0840004F | W_Lance_079 | 08400008 | Lan029 | 91 | Kulu Skewer |
| 08400050 | W_Lance_080 | 0840001B | Lan068 | 80 | Spiral Lance I |
| 08400051 | W_Lance_081 | 0840001B | Lan068 | 81 | Spiral Lance II |
| 08400052 | W_Lance_082 | 0840001B | Lan068 | 82 | Spiral Splash |
| 08400053 | W_Lance_083 | 0840001C | Lan069 | 50 | Rugged Lance I |
| 08400054 | W_Lance_084 | 0840001C | Lan069 | 51 | Rugged Lance II |
| 08400055 | W_Lance_085 | 0840001C | Lan069 | 52 | Barroth Carver |
| 08400056 | W_Lance_086 | 0840001D | Lan070 | 13 | Naag Serpentblade I |
| 08400057 | W_Lance_087 | 0840001D | Lan070 | 14 | Naag Serpentblade II |
| 08400058 | W_Lance_088 | 0840001D | Lan070 | 15 | Devta Serpentblade |
| 08400059 | W_Lance_089 | 0840001E | Lan071 | 56 | Volvi Stroke I |
| 0840005A | W_Lance_090 | 0840001E | Lan071 | 57 | Volvi Stroke II |
| 0840005B | W_Lance_091 | 0840001E | Lan071 | 58 | Volvi Sweep |
| 0840005C | W_Lance_092 | 08400009 | Lan030 | 74 | Pukei Spear I |
| 0840005D | W_Lance_093 | 08400009 | Lan030 | 75 | Pukei Spear II |
| 0840005E | W_Lance_094 | 08400009 | Lan030 | 76 | Datura Spear |
| 0840005F | W_Lance_095 | 0840001F | Lan072 | 34 | Venom Lance I |
| 08400060 | W_Lance_096 | 0840001F | Lan072 | 35 | Venom Lance II |
| 08400061 | W_Lance_097 | 0840001F | Lan072 | 36 | Basarios Venom Spear |
| 08400062 | W_Lance_098 | 08400020 | Lan073 | 71 | Tusk Lance I |
| 08400063 | W_Lance_099 | 08400020 | Lan073 | 72 | Tusk Lance II |
| 08400064 | W_Lance_100 | 08400020 | Lan073 | 73 | Sabertooth |
| 08400065 | W_Lance_101 | 08400021 | Lan074 | 43 | Kadachi Lance I |
| 08400066 | W_Lance_102 | 08400021 | Lan074 | 44 | Kadachi Lance II |
| 08400067 | W_Lance_103 | 08400021 | Lan074 | 45 | Shockspear |
| 08400068 | W_Lance_104 | 08400022 | Lan075 | 37 | Hidden Stinger I |
| 08400069 | W_Lance_105 | 08400022 | Lan075 | 38 | Hidden Stinger II |
| 0840006A | W_Lance_106 | 08400022 | Lan075 | 39 | Night Rains Black |
| 0840006B | W_Lance_107 | 08400023 | Lan076 | 10 | Hana Mo Hana Nare I |
| 0840006C | W_Lance_108 | 08400023 | Lan076 | 11 | Hana Mo Hana Nare II |
| 0840006D | W_Lance_109 | 08400023 | Lan076 | 12 | Kimi Ga Kiru |
| 0840006E | W_Lance_110 | 08400000 | Lan001 | 77 | Red Tail I |
| 0840006F | W_Lance_111 | 08400000 | Lan001 | 78 | Red Tail II |
| 08400070 | W_Lance_112 | 08400000 | Lan001 | 79 | Spear of Prominence |
| 08400071 | W_Lance_113 | 08400024 | Lan077 | 92 | Usurper's Coming I |
| 08400072 | W_Lance_114 | 08400024 | Lan077 | 93 | Usurper's Coming II |
| 08400073 | W_Lance_115 | 08400024 | Lan077 | 94 | Despot's Cacophony |
| 08400074 | W_Lance_116 | 08400004 | Lan013 | 68 | Tiger Stinger I |
| 08400075 | W_Lance_117 | 08400004 | Lan013 | 69 | Tiger Stinger II |
| 08400076 | W_Lance_118 | 08400004 | Lan013 | 70 | Tigrex Lance |
| 08400077 | W_Lance_119 | 08400025 | Lan079 | 86 | Diablos Lance I |
| 08400078 | W_Lance_120 | 08400025 | Lan079 | 87 | Diablos Lance II |
| 08400079 | W_Lance_121 | 08400025 | Lan079 | 88 | Diablos Spear |
| 0840007A | W_Lance_122 | 08400001 | Lan002 | 113 | Icesteel Spear I |
| 0840007B | W_Lance_123 | 08400001 | Lan002 | 114 | Daora's Fang |
| 0840007C | W_Lance_124 | 08400026 | Lan080 | 115 | Teostra's Howl I |
| 0840007D | W_Lance_125 | 08400026 | Lan080 | 116 | Teostra's Roar |
| 0840007E | W_Lance_126 | 08400027 | Lan081 | 102 | Demon Lance I |
| 0840007F | W_Lance_127 | 08400027 | Lan081 | 103 | Demon Lance II |
| 08400080 | W_Lance_128 | 08400027 | Lan081 | 104 | Great Demon Lance |
| 08400081 | W_Lance_129 | 08400002 | Lan006 | 110 | Rookslayer Lance I |
| 08400082 | W_Lance_130 | 08400002 | Lan006 | 111 | Rookslayer Lance II |
| 08400083 | W_Lance_131 | 08400002 | Lan006 | 112 | Bazel Myniad Lance |
| 08400084 | W_Lance_132 | 0840002A | Lan085 | 132 | Rampage Spear IV |
| 08400085 | W_Lance_133 | 0840002A | Lan085 | 133 | Rampage Spear V |

# Long Sword
| Weapon ID | Enum Name | Model ID | Model Name | Sort ID | Weapon Name |
| --- | --- | --- | --- | --- | --- |
| 08500000 | W_LongSword_000 | 08500005 | L_Swd019 | 28 | Iron Katana I |
| 08500001 | W_LongSword_001 | 08500005 | L_Swd019 | 29 | Iron Katana II |
| 08500002 | W_LongSword_002 | 08500005 | L_Swd019 | 30 | Iron Gospel |
| 08500003 | W_LongSword_003 | 08500014 | L_Swd059 | 43 | Eager Cleaver I |
| 08500004 | W_LongSword_004 | 08500014 | L_Swd059 | 44 | Eager Cleaver II |
| 08500005 | W_LongSword_005 | 08500014 | L_Swd059 | 45 | Devil Slicer |
| 08500006 | W_LongSword_006 | 08500015 | L_Swd060 | 16 | Guardian Sword I |
| 08500007 | W_LongSword_007 | 08500015 | L_Swd060 | 17 | Guardian Sword II |
| 08500008 | W_LongSword_008 | 08500015 | L_Swd060 | 18 | Imperial Sword |
| 08500009 | W_LongSword_009 | 08500016 | L_Swd061 | 49 | Chillblade I |
| 0850000A | W_LongSword_010 | 08500016 | L_Swd061 | 50 | Chillblade II |
| 0850000B | W_LongSword_011 | 08500016 | L_Swd061 | 51 | Rimeblossom |
| 0850000C | W_LongSword_012 | 08500006 | L_Swd021 | 31 | Keen Edge I |
| 0850000D | W_LongSword_013 | 08500006 | L_Swd021 | 32 | Keen Edge II |
| 0850000E | W_LongSword_014 | 08500006 | L_Swd021 | 33 | Julienne Blade |
| 0850000F | W_LongSword_015 | 08500007 | L_Swd024 | 76 | Bone Scythe I |
| 08500010 | W_LongSword_016 | 08500007 | L_Swd024 | 77 | Bone Scythe II |
| 08500011 | W_LongSword_017 | 08500007 | L_Swd024 | 78 | Bone Reaper |
| 08500012 | W_LongSword_018 | 08500017 | L_Swd062 | 100 | Dark Scythe I |
| 08500013 | W_LongSword_019 | 08500017 | L_Swd062 | 101 | Tormentor |
| 08500014 | W_LongSword_020 | 08500018 | L_Swd063 | 58 | Serrated Jaw I |
| 08500015 | W_LongSword_021 | 08500018 | L_Swd063 | 59 | Serrated Jaw II |
| 08500016 | W_LongSword_022 | 08500018 | L_Swd063 | 60 | Serrated Maw |
| 08500017 | W_LongSword_023 | 08500019 | L_Swd064 | 102 | Scythe of Menace I |
| 08500018 | W_LongSword_024 | 08500019 | L_Swd064 | 103 | Scythe of Menace II |
| 08500019 | W_LongSword_025 | 08500019 | L_Swd064 | 104 | Big Menacing Scythe |
| 0850001A | W_LongSword_026 | 0850000C | L_Swd050 | 1 | Kamura Blade I |
| 0850001B | W_LongSword_027 | 0850000C | L_Swd050 | 2 | Kamura Blade II |
| 0850001C | W_LongSword_028 | 0850000C | L_Swd050 | 3 | Kamura Blade III |
| 0850001D | W_LongSword_029 | 0850000C | L_Swd050 | 4 | Kamura Blade IV |
| 0850001E | W_LongSword_030 | 0850000C | L_Swd050 | 5 | Kamura Blade V |
| 0850001F | W_LongSword_031 | 0850000C | L_Swd050 | 6 | Kamura Ninja Blade |
| 08500020 | W_LongSword_032 | 0850002D | L_Swd089 | 134 | Rampage Blade I |
| 08500021 | W_LongSword_033 | 0850002D | L_Swd089 | 135 | Rampage Blade II |
| 08500022 | W_LongSword_034 | 0850002D | L_Swd089 | 136 | Rampage Blade III |
| 08500023 | W_LongSword_035 | 0850002D | L_Swd089 | 139 | Rampage Blade S |
| 08500024 | W_LongSword_036 | 0850002C | L_Swd088 | 131 | Hand-Me-Down Sword I |
| 08500025 | W_LongSword_037 | 0850002C | L_Swd088 | 132 | Hand-Me-Down Sword II |
| 08500026 | W_LongSword_038 | 0850002C | L_Swd088 | 133 | Kamura's Inheritance |
| 08500027 | W_LongSword_039 | 0850001A | L_Swd067 | 127 | Cawscythe I |
| 08500028 | W_LongSword_040 | 0850001A | L_Swd067 | 128 | Cawscythe II |
| 08500029 | W_LongSword_041 | 0850001A | L_Swd067 | 129 | Cawscythe III |
| 0850002A | W_LongSword_042 | 0850001A | L_Swd067 | 130 | Squawkscythe |
| 0850002B | W_LongSword_043 | 0850000D | L_Swd051 | 97 | Wind Thief Scimitar I |
| 0850002C | W_LongSword_044 | 0850000D | L_Swd051 | 98 | Wind Thief Scimitar II |
| 0850002D | W_LongSword_045 | 0850000D | L_Swd051 | 99 | Gale Scimitar |
| 0850002E | W_LongSword_046 | 0850000E | L_Swd052 | 10 | Aknosom Sabre I |
| 0850002F | W_LongSword_047 | 0850000E | L_Swd052 | 11 | Aknosom Sabre II |
| 08500030 | W_LongSword_048 | 0850000E | L_Swd052 | 12 | Daybreak Blade |
| 08500031 | W_LongSword_049 | 0850000F | L_Swd053 | 88 | Frilled Slash I |
| 08500032 | W_LongSword_050 | 0850000F | L_Swd053 | 89 | Frilled Slash II |
| 08500033 | W_LongSword_051 | 0850000F | L_Swd053 | 90 | Illusory Frilled Slash |
| 08500034 | W_LongSword_052 | 08500010 | L_Swd054 | 105 | Sinister Long Sword I |
| 08500035 | W_LongSword_053 | 08500010 | L_Swd054 | 106 | Sinister Long Sword II |
| 08500036 | W_LongSword_054 | 08500010 | L_Swd054 | 107 | Sinister Shade Sword |
| 08500037 | W_LongSword_055 | 08500011 | L_Swd055 | 25 | Almudron Blade I |
| 08500038 | W_LongSword_056 | 08500011 | L_Swd055 | 26 | Almudron Blade II |
| 08500039 | W_LongSword_057 | 08500011 | L_Swd055 | 27 | Doom Bringer Blade |
| 0850003A | W_LongSword_058 | 08500012 | L_Swd056 | 111 | Azure Elder Long Sword I |
| 0850003B | W_LongSword_059 | 08500012 | L_Swd056 | 112 | Azure Elder Long Sword II |
| 0850003C | W_LongSword_060 | 08500012 | L_Swd056 | 113 | Abyssal Gale Sword |
| 0850003D | W_LongSword_061 | 08500013 | L_Swd057 | 114 | Thunderbolt Long Sword I |
| 0850003E | W_LongSword_062 | 08500013 | L_Swd057 | 115 | Abyssal Storm Sword |
| 0850003F | W_LongSword_063 | 0850002B | L_Swd087 | 125 | Redwing Long Sword I |
| 08500040 | W_LongSword_064 | 0850002B | L_Swd087 | 126 | Reddnaught Blade |
| 08500041 | W_LongSword_065 | 0850001B | L_Swd068 | 85 | Anteka Blade I |
| 08500042 | W_LongSword_066 | 0850001B | L_Swd068 | 86 | Anteka Blade II |
| 08500043 | W_LongSword_067 | 0850001B | L_Swd068 | 87 | Anteka Rack |
| 08500044 | W_LongSword_068 | 0850001C | L_Swd069 | 94 | Arzuros Naginata I |
| 08500045 | W_LongSword_069 | 0850001C | L_Swd069 | 95 | Arzuros Naginata II |
| 08500046 | W_LongSword_070 | 0850001C | L_Swd069 | 96 | Arzuros Strikequill |
| 08500047 | W_LongSword_071 | 0850001D | L_Swd070 | 73 | Ananta Blade I |
| 08500048 | W_LongSword_072 | 0850001D | L_Swd070 | 74 | Ananta Blade II |
| 08500049 | W_LongSword_073 | 0850001D | L_Swd070 | 75 | Shadow Slasher |
| 0850004A | W_LongSword_074 | 0850001E | L_Swd071 | 13 | Ivory Rabbit I |
| 0850004B | W_LongSword_075 | 0850001E | L_Swd071 | 14 | Ivory Rabbit II |
| 0850004C | W_LongSword_076 | 0850001E | L_Swd071 | 15 | Iced Rabbit |
| 0850004D | W_LongSword_077 | 0850001F | L_Swd072 | 61 | Canine Katana I |
| 0850004E | W_LongSword_078 | 0850001F | L_Swd072 | 62 | Canine Katana II |
| 0850004F | W_LongSword_079 | 0850001F | L_Swd072 | 63 | Gnash Katana |
| 08500050 | W_LongSword_080 | 08500020 | L_Swd073 | 70 | Wroggi Sword I |
| 08500051 | W_LongSword_081 | 08500020 | L_Swd073 | 71 | Wroggi Sword II |
| 08500052 | W_LongSword_082 | 08500020 | L_Swd073 | 72 | Poison Barb |
| 08500053 | W_LongSword_083 | 08500008 | L_Swd030 | 46 | Kulu Katana I |
| 08500054 | W_LongSword_084 | 08500008 | L_Swd030 | 47 | Kulu Katana II |
| 08500055 | W_LongSword_085 | 08500008 | L_Swd030 | 48 | Kulu Slicer |
| 08500056 | W_LongSword_086 | 08500021 | L_Swd074 | 91 | Drowning Shaft I |
| 08500057 | W_LongSword_087 | 08500021 | L_Swd074 | 92 | Drowning Shaft II |
| 08500058 | W_LongSword_088 | 08500021 | L_Swd074 | 93 | Douser Bardiche |
| 08500059 | W_LongSword_089 | 08500022 | L_Swd075 | 19 | Castello Saif I |
| 0850005A | W_LongSword_090 | 08500022 | L_Swd075 | 20 | Castello Saif II |
| 0850005B | W_LongSword_091 | 08500022 | L_Swd075 | 21 | Castellum Long Sword |
| 0850005C | W_LongSword_092 | 08500009 | L_Swd031 | 82 | Jyura Saber I |
| 0850005D | W_LongSword_093 | 08500009 | L_Swd031 | 83 | Jyura Saber II |
| 0850005E | W_LongSword_094 | 08500009 | L_Swd031 | 84 | Jyura Reaver |
| 0850005F | W_LongSword_095 | 08500023 | L_Swd076 | 22 | Gigant Makra I |
| 08500060 | W_LongSword_096 | 08500023 | L_Swd076 | 23 | Gigant Makra II |
| 08500061 | W_LongSword_097 | 08500023 | L_Swd076 | 24 | Titanic Makra |
| 08500062 | W_LongSword_098 | 08500002 | L_Swd007 | 52 | Wyvern Blade Verde I |
| 08500063 | W_LongSword_099 | 08500002 | L_Swd007 | 53 | Wyvern Blade Verde II |
| 08500064 | W_LongSword_100 | 08500002 | L_Swd007 | 54 | Wyvern Blade Holly |
| 08500065 | W_LongSword_101 | 08500024 | L_Swd077 | 67 | Bastine Edge I |
| 08500066 | W_LongSword_102 | 08500024 | L_Swd077 | 68 | Bastine Edge II |
| 08500067 | W_LongSword_103 | 08500024 | L_Swd077 | 69 | Bastizan Edge |
| 08500068 | W_LongSword_104 | 0850000A | L_Swd032 | 79 | Spark Slicer I |
| 08500069 | W_LongSword_105 | 0850000A | L_Swd032 | 80 | Spark Slicer II |
| 0850006A | W_LongSword_106 | 0850000A | L_Swd032 | 81 | Shocking Slicer |
| 0850006B | W_LongSword_107 | 0850000B | L_Swd033 | 64 | Flammenschwert I |
| 0850006C | W_LongSword_108 | 0850000B | L_Swd033 | 65 | Flammenschwert II |
| 0850006D | W_LongSword_109 | 0850000B | L_Swd033 | 66 | Fervid Flammenschwert |
| 0850006E | W_LongSword_110 | 08500004 | L_Swd015 | 40 | Hidden Saber I |
| 0850006F | W_LongSword_111 | 08500004 | L_Swd015 | 41 | Hidden Saber II |
| 08500070 | W_LongSword_112 | 08500004 | L_Swd015 | 42 | Deepest Night |
| 08500071 | W_LongSword_113 | 08500025 | L_Swd079 | 37 | Kakaru Kumo Naki I |
| 08500072 | W_LongSword_114 | 08500025 | L_Swd079 | 38 | Kakaru Kumo Naki II |
| 08500073 | W_LongSword_115 | 08500025 | L_Swd079 | 39 | Tamonowo |
| 08500074 | W_LongSword_116 | 08500000 | L_Swd003 | 55 | Wyvern Blade Blood I |
| 08500075 | W_LongSword_117 | 08500000 | L_Swd003 | 56 | Wyvern Blade Blood II |
| 08500076 | W_LongSword_118 | 08500000 | L_Swd003 | 57 | Wyvern Blade Maple |
| 08500077 | W_LongSword_119 | 08500026 | L_Swd080 | 7 | Usurper Boltslicer I |
| 08500078 | W_LongSword_120 | 08500026 | L_Swd080 | 8 | Usurper Boltslicer II |
| 08500079 | W_LongSword_121 | 08500026 | L_Swd080 | 9 | Despot Boltbreaker |
| 0850007A | W_LongSword_122 | 08500003 | L_Swd014 | 34 | Tigrine Edge I |
| 0850007B | W_LongSword_123 | 08500003 | L_Swd014 | 35 | Tigrine Edge II |
| 0850007C | W_LongSword_124 | 08500003 | L_Swd014 | 36 | Tigrine Need |
| 0850007D | W_LongSword_125 | 08500027 | L_Swd082 | 119 | Icesteel Blade I |
| 0850007E | W_LongSword_126 | 08500027 | L_Swd082 | 120 | Daora's Raid |
| 0850007F | W_LongSword_127 | 08500028 | L_Swd083 | 121 | Imperial Saber I |
| 08500080 | W_LongSword_128 | 08500028 | L_Swd083 | 122 | Imperial Shimmer |
| 08500081 | W_LongSword_129 | 08500029 | L_Swd084 | 123 | Mirage Finsword I |
| 08500082 | W_LongSword_130 | 08500029 | L_Swd084 | 124 | Phantom Mirage |
| 08500083 | W_LongSword_131 | 0850002A | L_Swd085 | 108 | Demon Halberd I |
| 08500084 | W_LongSword_132 | 0850002A | L_Swd085 | 109 | Demon Halberd II |
| 08500085 | W_LongSword_133 | 0850002A | L_Swd085 | 110 | Great Demon Halberd |
| 08500086 | W_LongSword_134 | 08500001 | L_Swd006 | 116 | Rookslayer Saber I |
| 08500087 | W_LongSword_135 | 08500001 | L_Swd006 | 117 | Rookslayer Saber II |
| 08500088 | W_LongSword_136 | 08500001 | L_Swd006 | 118 | Bazel Varga Rookslayer |
| 08500089 | W_LongSword_137 | 0850002D | L_Swd089 | 137 | Rampage Blade IV |
| 0850008A | W_LongSword_138 | 0850002D | L_Swd089 | 138 | Rampage Blade V |

# Switch Axe
| Weapon ID | Enum Name | Model ID | Model Name | Sort ID | Weapon Name |
| --- | --- | --- | --- | --- | --- |
| 08600000 | W_SlashAxe_000 | 08600010 | S_Axe057 | 33 | Elite Switch Axe I |
| 08600001 | W_SlashAxe_001 | 08600010 | S_Axe057 | 34 | Elite Switch Axe II |
| 08600002 | W_SlashAxe_002 | 08600010 | S_Axe057 | 35 | Czar Switch Axe |
| 08600003 | W_SlashAxe_003 | 08600011 | S_Axe058 | 45 | The Shredder I |
| 08600004 | W_SlashAxe_004 | 08600011 | S_Axe058 | 46 | The Shredder II |
| 08600005 | W_SlashAxe_005 | 08600011 | S_Axe058 | 47 | The Power Shredder |
| 08600006 | W_SlashAxe_006 | 08600012 | S_Axe059 | 48 | Ash Drache I |
| 08600007 | W_SlashAxe_007 | 08600012 | S_Axe059 | 49 | Ash Drache II |
| 08600008 | W_SlashAxe_008 | 08600012 | S_Axe059 | 50 | Fall Drache |
| 08600009 | W_SlashAxe_009 | 08600005 | S_Axe017 | 30 | Proto Iron Axe I |
| 0860000A | W_SlashAxe_010 | 08600005 | S_Axe017 | 31 | Proto Iron Axe II |
| 0860000B | W_SlashAxe_011 | 08600005 | S_Axe017 | 32 | Improved Steel Axe |
| 0860000C | W_SlashAxe_012 | 08600013 | S_Axe060 | 42 | General's Strongaxe I |
| 0860000D | W_SlashAxe_013 | 08600013 | S_Axe060 | 43 | General's Strongaxe II |
| 0860000E | W_SlashAxe_014 | 08600013 | S_Axe060 | 44 | Conqueress |
| 0860000F | W_SlashAxe_015 | 08600006 | S_Axe019 | 65 | Bone Axe I |
| 08600010 | W_SlashAxe_016 | 08600006 | S_Axe019 | 66 | Bone Axe II |
| 08600011 | W_SlashAxe_017 | 08600006 | S_Axe019 | 67 | Daidalos Axe |
| 08600012 | W_SlashAxe_018 | 08600014 | S_Axe061 | 68 | Power Gasher I |
| 08600013 | W_SlashAxe_019 | 08600014 | S_Axe061 | 69 | Power Gasher II |
| 08600014 | W_SlashAxe_020 | 08600014 | S_Axe061 | 70 | Maximal Gasher |
| 08600015 | W_SlashAxe_021 | 08600009 | S_Axe050 | 1 | Kamura Iron Axe I |
| 08600016 | W_SlashAxe_022 | 08600009 | S_Axe050 | 2 | Kamura Iron Axe II |
| 08600017 | W_SlashAxe_023 | 08600009 | S_Axe050 | 3 | Kamura Iron Axe III |
| 08600018 | W_SlashAxe_024 | 08600009 | S_Axe050 | 4 | Kamura Iron Axe IV |
| 08600019 | W_SlashAxe_025 | 08600009 | S_Axe050 | 5 | Kamura Iron Axe V |
| 0860001A | W_SlashAxe_026 | 08600009 | S_Axe050 | 6 | Kamura Ninja Axe |
| 0860001B | W_SlashAxe_027 | 0860002B | S_Axe087 | 134 | Rampage Slicer I |
| 0860001C | W_SlashAxe_028 | 0860002B | S_Axe087 | 135 | Rampage Slicer II |
| 0860001D | W_SlashAxe_029 | 0860002B | S_Axe087 | 136 | Rampage Slicer III |
| 0860001E | W_SlashAxe_030 | 0860002B | S_Axe087 | 139 | Rampage Slicer S |
| 0860001F | W_SlashAxe_031 | 0860002A | S_Axe086 | 122 | Origami Axe I |
| 08600020 | W_SlashAxe_032 | 0860002A | S_Axe086 | 123 | Origami Axe II |
| 08600021 | W_SlashAxe_033 | 0860002A | S_Axe086 | 124 | Petal Cloud |
| 08600022 | W_SlashAxe_034 | 08600015 | S_Axe062 | 125 | Grim Cat I |
| 08600023 | W_SlashAxe_035 | 08600015 | S_Axe062 | 126 | Grim Cat II |
| 08600024 | W_SlashAxe_036 | 08600015 | S_Axe062 | 127 | Grimmige Katze |
| 08600025 | W_SlashAxe_037 | 08600016 | S_Axe063 | 128 | Infernal Axe I |
| 08600026 | W_SlashAxe_038 | 08600016 | S_Axe063 | 129 | Infernal Axe II |
| 08600027 | W_SlashAxe_039 | 08600016 | S_Axe063 | 130 | Hellish Edge |
| 08600028 | W_SlashAxe_040 | 08600029 | S_Axe085 | 131 | Sleepy Shellslice I |
| 08600029 | W_SlashAxe_041 | 08600029 | S_Axe085 | 132 | Sleepy Shellslice II |
| 0860002A | W_SlashAxe_042 | 08600029 | S_Axe085 | 133 | Schale Batis |
| 0860002B | W_SlashAxe_043 | 0860000A | S_Axe051 | 54 | Axenosom I |
| 0860002C | W_SlashAxe_044 | 0860000A | S_Axe051 | 55 | Axenosom II |
| 0860002D | W_SlashAxe_045 | 0860000A | S_Axe051 | 56 | Axenosom III |
| 0860002E | W_SlashAxe_046 | 0860000A | S_Axe051 | 57 | Daybreak Silvaris |
| 0860002F | W_SlashAxe_047 | 0860000B | S_Axe052 | 14 | Wheel Axe I |
| 08600030 | W_SlashAxe_048 | 0860000B | S_Axe052 | 15 | Wheel Axe II |
| 08600031 | W_SlashAxe_049 | 0860000B | S_Axe052 | 16 | Axe of Wisdom |
| 08600032 | W_SlashAxe_050 | 0860000C | S_Axe053 | 100 | Sinister Axe I |
| 08600033 | W_SlashAxe_051 | 0860000C | S_Axe053 | 101 | Sinister Axe II |
| 08600034 | W_SlashAxe_052 | 0860000C | S_Axe053 | 102 | Sinister Shadowslice |
| 08600035 | W_SlashAxe_053 | 0860000D | S_Axe054 | 51 | Almudron Axe I |
| 08600036 | W_SlashAxe_054 | 0860000D | S_Axe054 | 52 | Almudron Axe II |
| 08600037 | W_SlashAxe_055 | 0860000D | S_Axe054 | 53 | Doom Bringer Axe |
| 08600038 | W_SlashAxe_056 | 0860000E | S_Axe055 | 106 | Azure Elder Axe I |
| 08600039 | W_SlashAxe_057 | 0860000E | S_Axe055 | 107 | Azure Elder Axe II |
| 0860003A | W_SlashAxe_058 | 0860000E | S_Axe055 | 108 | Abyssal Gale Axe |
| 0860003B | W_SlashAxe_059 | 0860000F | S_Axe056 | 109 | Thunderbolt Axe I |
| 0860003C | W_SlashAxe_060 | 0860000F | S_Axe056 | 110 | Abyssal Storm Axe |
| 0860003D | W_SlashAxe_061 | 08600028 | S_Axe084 | 120 | Redwing Switch Axe I |
| 0860003E | W_SlashAxe_062 | 08600028 | S_Axe084 | 121 | Reddnaught Dunat |
| 0860003F | W_SlashAxe_063 | 08600017 | S_Axe064 | 23 | Arzuros Axe I |
| 08600040 | W_SlashAxe_064 | 08600017 | S_Axe064 | 24 | Arzuros Axe II |
| 08600041 | W_SlashAxe_065 | 08600017 | S_Axe064 | 25 | Arzuros Revelax |
| 08600042 | W_SlashAxe_066 | 08600018 | S_Axe065 | 61 | Snowfall Axe I |
| 08600043 | W_SlashAxe_067 | 08600018 | S_Axe065 | 62 | Snowfall Axe II |
| 08600044 | W_SlashAxe_068 | 08600018 | S_Axe065 | 63 | Snowfall Axe III |
| 08600045 | W_SlashAxe_069 | 08600018 | S_Axe065 | 64 | Dewdrop Dream |
| 08600046 | W_SlashAxe_070 | 08600019 | S_Axe066 | 96 | Longear Axe I |
| 08600047 | W_SlashAxe_071 | 08600019 | S_Axe066 | 97 | Longear Axe II |
| 08600048 | W_SlashAxe_072 | 08600019 | S_Axe066 | 98 | Longear Axe III |
| 08600049 | W_SlashAxe_073 | 08600019 | S_Axe066 | 99 | Longear Weiss |
| 0860004A | W_SlashAxe_074 | 0860001A | S_Axe067 | 17 | Delex Sail I |
| 0860004B | W_SlashAxe_075 | 0860001A | S_Axe067 | 18 | Delex Sail II |
| 0860004C | W_SlashAxe_076 | 0860001A | S_Axe067 | 19 | Delex Cleaver |
| 0860004D | W_SlashAxe_077 | 0860001B | S_Axe068 | 90 | Ludroth Axe I |
| 0860004E | W_SlashAxe_078 | 0860001B | S_Axe068 | 91 | Ludroth Axe II |
| 0860004F | W_SlashAxe_079 | 0860001B | S_Axe068 | 92 | Splish Splax |
| 08600050 | W_SlashAxe_080 | 0860001C | S_Axe069 | 58 | Assault Axe I |
| 08600051 | W_SlashAxe_081 | 0860001C | S_Axe069 | 59 | Assault Axe II |
| 08600052 | W_SlashAxe_082 | 0860001C | S_Axe069 | 60 | Blitzkrieg |
| 08600053 | W_SlashAxe_083 | 0860001D | S_Axe070 | 20 | Khezu Axe I |
| 08600054 | W_SlashAxe_084 | 0860001D | S_Axe070 | 21 | Khezu Axe II |
| 08600055 | W_SlashAxe_085 | 0860001D | S_Axe070 | 22 | Khezu Cleaver |
| 08600056 | W_SlashAxe_086 | 0860001E | S_Axe071 | 80 | Venom Hatchet I |
| 08600057 | W_SlashAxe_087 | 0860001E | S_Axe071 | 81 | Venom Hatchet II |
| 08600058 | W_SlashAxe_088 | 0860001E | S_Axe071 | 82 | Mortal Serpent |
| 08600059 | W_SlashAxe_089 | 0860001F | S_Axe072 | 86 | Binding Roller I |
| 0860005A | W_SlashAxe_090 | 0860001F | S_Axe072 | 87 | Binding Roller II |
| 0860005B | W_SlashAxe_091 | 0860001F | S_Axe072 | 88 | Binding Roller III |
| 0860005C | W_SlashAxe_092 | 0860001F | S_Axe072 | 89 | Vermilingua |
| 0860005D | W_SlashAxe_093 | 08600007 | S_Axe027 | 36 | Limus Os I |
| 0860005E | W_SlashAxe_094 | 08600007 | S_Axe027 | 37 | Limus Os II |
| 0860005F | W_SlashAxe_095 | 08600007 | S_Axe027 | 38 | Luto Ascia |
| 08600060 | W_SlashAxe_096 | 08600020 | S_Axe073 | 39 | Dragonmaiden Axe I |
| 08600061 | W_SlashAxe_097 | 08600020 | S_Axe073 | 40 | Dragonmaiden Axe II |
| 08600062 | W_SlashAxe_098 | 08600020 | S_Axe073 | 41 | Gríðr's Landmaker |
| 08600063 | W_SlashAxe_099 | 08600003 | S_Axe012 | 26 | Amber Slash I |
| 08600064 | W_SlashAxe_100 | 08600003 | S_Axe012 | 27 | Amber Slash II |
| 08600065 | W_SlashAxe_101 | 08600003 | S_Axe012 | 28 | Amber Slash III |
| 08600066 | W_SlashAxe_102 | 08600003 | S_Axe012 | 29 | Amber Hoarfrost |
| 08600067 | W_SlashAxe_103 | 08600002 | S_Axe005 | 71 | Flammenbeil I |
| 08600068 | W_SlashAxe_104 | 08600002 | S_Axe005 | 72 | Flammenbeil II |
| 08600069 | W_SlashAxe_105 | 08600002 | S_Axe005 | 73 | Gnashing Flammenbeil |
| 0860006A | W_SlashAxe_106 | 08600004 | S_Axe013 | 83 | Hidden Axe I |
| 0860006B | W_SlashAxe_107 | 08600004 | S_Axe013 | 84 | Hidden Axe II |
| 0860006C | W_SlashAxe_108 | 08600004 | S_Axe013 | 85 | Night's Crescent |
| 0860006D | W_SlashAxe_109 | 08600021 | S_Axe076 | 7 | Fond Farewell I |
| 0860006E | W_SlashAxe_110 | 08600021 | S_Axe076 | 8 | Fond Farewell II |
| 0860006F | W_SlashAxe_111 | 08600021 | S_Axe076 | 9 | Parting Slice |
| 08600070 | W_SlashAxe_112 | 08600022 | S_Axe077 | 10 | Rath Flamesplitter I |
| 08600071 | W_SlashAxe_113 | 08600022 | S_Axe077 | 11 | Rath Flamesplitter II |
| 08600072 | W_SlashAxe_114 | 08600022 | S_Axe077 | 12 | Rath Flamesplitter III |
| 08600073 | W_SlashAxe_115 | 08600022 | S_Axe077 | 13 | Rath Blaze Splitter |
| 08600074 | W_SlashAxe_116 | 08600023 | S_Axe078 | 93 | Usurper's Downpour I |
| 08600075 | W_SlashAxe_117 | 08600023 | S_Axe078 | 94 | Usurper's Downpour II |
| 08600076 | W_SlashAxe_118 | 08600023 | S_Axe078 | 95 | Despot's Cloudburst |
| 08600077 | W_SlashAxe_119 | 08600024 | S_Axe079 | 74 | Rex Slasher I |
| 08600078 | W_SlashAxe_120 | 08600024 | S_Axe079 | 75 | Rex Slasher II |
| 08600079 | W_SlashAxe_121 | 08600024 | S_Axe079 | 76 | Rex Gnasher |
| 0860007A | W_SlashAxe_122 | 08600001 | S_Axe003 | 77 | Axe Semper Tyrannis I |
| 0860007B | W_SlashAxe_123 | 08600001 | S_Axe003 | 78 | Axe Semper Tyrannis II |
| 0860007C | W_SlashAxe_124 | 08600001 | S_Axe003 | 79 | Grand Chaos |
| 0860007D | W_SlashAxe_125 | 08600025 | S_Axe080 | 114 | Daora's Farasa I |
| 0860007E | W_SlashAxe_126 | 08600025 | S_Axe080 | 115 | Daora's Janah |
| 0860007F | W_SlashAxe_127 | 08600000 | S_Axe001 | 116 | Teostra's Arx I |
| 08600080 | W_SlashAxe_128 | 08600000 | S_Axe001 | 117 | Teostra's Castle |
| 08600081 | W_SlashAxe_129 | 08600026 | S_Axe081 | 118 | Waxglare Wand I |
| 08600082 | W_SlashAxe_130 | 08600026 | S_Axe081 | 119 | Balor's Mirage |
| 08600083 | W_SlashAxe_131 | 08600027 | S_Axe082 | 103 | Undying Axe I |
| 08600084 | W_SlashAxe_132 | 08600027 | S_Axe082 | 104 | Undying Axe II |
| 08600085 | W_SlashAxe_133 | 08600027 | S_Axe082 | 105 | Undying Light |
| 08600086 | W_SlashAxe_134 | 08600008 | S_Axe037 | 111 | Rookslayer Axe I |
| 08600087 | W_SlashAxe_135 | 08600008 | S_Axe037 | 112 | Rookslayer Axe II |
| 08600088 | W_SlashAxe_136 | 08600008 | S_Axe037 | 113 | Bazelrush Rookslayer |
| 08600089 | W_SlashAxe_137 | 0860002B | S_Axe087 | 137 | Rampage Slicer IV |
| 0860008A | W_SlashAxe_138 | 0860002B | S_Axe087 | 138 | Rampage Slicer V |

# Gunlance
| Weapon ID | Enum Name | Model ID | Model Name | Sort ID | Weapon Name |
| --- | --- | --- | --- | --- | --- |
| 08700000 | W_GunLance_000 | 08700011 | G_Lan057 | 28 | Striker's Gunlance I |
| 08700001 | W_GunLance_001 | 08700011 | G_Lan057 | 29 | Striker's Gunlance II |
| 08700002 | W_GunLance_002 | 08700011 | G_Lan057 | 30 | Imperial Guardlance |
| 08700003 | W_GunLance_003 | 08700006 | G_Lan018 | 25 | Iron Gunlance I |
| 08700004 | W_GunLance_004 | 08700006 | G_Lan018 | 26 | Iron Gunlance II |
| 08700005 | W_GunLance_005 | 08700006 | G_Lan018 | 27 | Eizenlitter |
| 08700006 | W_GunLance_006 | 08700012 | G_Lan058 | 31 | General's Arbalance I |
| 08700007 | W_GunLance_007 | 08700012 | G_Lan058 | 32 | General's Arbalance II |
| 08700008 | W_GunLance_008 | 08700012 | G_Lan058 | 33 | Admiral's Arbalance |
| 08700009 | W_GunLance_009 | 08700007 | G_Lan021 | 60 | Bone Gunlance I |
| 0870000A | W_GunLance_010 | 08700007 | G_Lan021 | 61 | Bone Gunlance II |
| 0870000B | W_GunLance_011 | 08700007 | G_Lan021 | 62 | Wyvern Bone Gunlance |
| 0870000C | W_GunLance_012 | 08700013 | G_Lan059 | 63 | Golem Gunlance I |
| 0870000D | W_GunLance_013 | 08700013 | G_Lan059 | 64 | Golem Gunlance II |
| 0870000E | W_GunLance_014 | 08700013 | G_Lan059 | 65 | Behemoth Gunlance |
| 0870000F | W_GunLance_015 | 0870000A | G_Lan050 | 1 | Kamura Gunlance I |
| 08700010 | W_GunLance_016 | 0870000A | G_Lan050 | 2 | Kamura Gunlance II |
| 08700011 | W_GunLance_017 | 0870000A | G_Lan050 | 3 | Kamura Gunlance III |
| 08700012 | W_GunLance_018 | 0870000A | G_Lan050 | 4 | Kamura Gunlance IV |
| 08700013 | W_GunLance_019 | 0870000A | G_Lan050 | 5 | Kamura Gunlance V |
| 08700014 | W_GunLance_020 | 0870000A | G_Lan050 | 6 | Kamura Ninja Gunlance |
| 08700015 | W_GunLance_021 | 0870002A | G_Lan084 | 131 | Rampage Gunlance I |
| 08700016 | W_GunLance_022 | 0870002A | G_Lan084 | 132 | Rampage Gunlance II |
| 08700017 | W_GunLance_023 | 0870002A | G_Lan084 | 133 | Rampage Gunlance III |
| 08700018 | W_GunLance_024 | 0870002A | G_Lan084 | 136 | Rampage Gunlance S |
| 08700019 | W_GunLance_025 | 08700029 | G_Lan083 | 122 | Canyne Cannon I |
| 0870001A | W_GunLance_026 | 08700029 | G_Lan083 | 123 | Canyne Cannon II |
| 0870001B | W_GunLance_027 | 08700029 | G_Lan083 | 124 | Howlitzer |
| 0870001C | W_GunLance_028 | 08700014 | G_Lan060 | 125 | Cornpopper I |
| 0870001D | W_GunLance_029 | 08700014 | G_Lan060 | 126 | Cornpopper II |
| 0870001E | W_GunLance_030 | 08700014 | G_Lan060 | 127 | Mighty Cornpopper |
| 0870001F | W_GunLance_031 | 08700027 | G_Lan081 | 128 | Sleepy Shellgun I |
| 08700020 | W_GunLance_032 | 08700027 | G_Lan081 | 129 | Sleepy Shellgun II |
| 08700021 | W_GunLance_033 | 08700027 | G_Lan081 | 130 | Soporific Shellgun |
| 08700022 | W_GunLance_034 | 0870000B | G_Lan051 | 40 | Aknosom Gunlance I |
| 08700023 | W_GunLance_035 | 0870000B | G_Lan051 | 41 | Aknosom Gunlance II |
| 08700024 | W_GunLance_036 | 0870000B | G_Lan051 | 42 | Aknosom Gunlance III |
| 08700025 | W_GunLance_037 | 0870000B | G_Lan051 | 43 | Dawnbreaker Gunlance |
| 08700026 | W_GunLance_038 | 0870000C | G_Lan052 | 102 | Sinister Gunlance I |
| 08700027 | W_GunLance_039 | 0870000C | G_Lan052 | 103 | Sinister Gunlance II |
| 08700028 | W_GunLance_040 | 0870000C | G_Lan052 | 104 | Sinister Shadowshot |
| 08700029 | W_GunLance_041 | 0870000D | G_Lan053 | 44 | Almudron Gunlance I |
| 0870002A | W_GunLance_042 | 0870000D | G_Lan053 | 45 | Almudron Gunlance II |
| 0870002B | W_GunLance_043 | 0870000D | G_Lan053 | 46 | Doombringer Gunlance |
| 0870002C | W_GunLance_044 | 0870000E | G_Lan054 | 90 | Rakna Gunlance I |
| 0870002D | W_GunLance_045 | 0870000E | G_Lan054 | 91 | Rakna Gunlance II |
| 0870002E | W_GunLance_046 | 0870000E | G_Lan054 | 92 | Araknalance |
| 0870002F | W_GunLance_047 | 0870000F | G_Lan055 | 108 | Azure Elder Gunlance I |
| 08700030 | W_GunLance_048 | 0870000F | G_Lan055 | 109 | Azure Elder Gunlance II |
| 08700031 | W_GunLance_049 | 0870000F | G_Lan055 | 110 | Abyssal Gale Gunlance |
| 08700032 | W_GunLance_050 | 08700010 | G_Lan056 | 111 | Thunderbolt Gunlance I |
| 08700033 | W_GunLance_051 | 08700010 | G_Lan056 | 112 | Abyssal Storm Gunlance |
| 08700034 | W_GunLance_052 | 08700028 | G_Lan082 | 120 | Redwing Gunlance I |
| 08700035 | W_GunLance_053 | 08700028 | G_Lan082 | 121 | Reddnaught Gunlance |
| 08700036 | W_GunLance_054 | 08700015 | G_Lan061 | 87 | Fiore Nulo I |
| 08700037 | W_GunLance_055 | 08700015 | G_Lan061 | 88 | Fiore Nulo II |
| 08700038 | W_GunLance_056 | 08700015 | G_Lan061 | 89 | Fiore Unu |
| 08700039 | W_GunLance_057 | 08700017 | G_Lan063 | 96 | Fiore Nulo White I |
| 0870003A | W_GunLance_058 | 08700017 | G_Lan063 | 97 | Fiore Nulo White II |
| 0870003B | W_GunLance_059 | 08700017 | G_Lan063 | 98 | Fiore Unu White |
| 0870003C | W_GunLance_060 | 08700016 | G_Lan062 | 99 | Fiore Nulo Green I |
| 0870003D | W_GunLance_061 | 08700016 | G_Lan062 | 100 | Fiore Nulo Green II |
| 0870003E | W_GunLance_062 | 08700016 | G_Lan062 | 101 | Fiore Unu Green |
| 0870003F | W_GunLance_063 | 08700018 | G_Lan064 | 93 | Fiore Nulo Black I |
| 08700040 | W_GunLance_064 | 08700018 | G_Lan064 | 94 | Fiore Nulo Black II |
| 08700041 | W_GunLance_065 | 08700018 | G_Lan064 | 95 | Fiore Unu Black |
| 08700042 | W_GunLance_066 | 08700019 | G_Lan065 | 53 | Baggi Gunlance I |
| 08700043 | W_GunLance_067 | 08700019 | G_Lan065 | 54 | Baggi Gunlance II |
| 08700044 | W_GunLance_068 | 08700019 | G_Lan065 | 55 | Baggi Gunlance III |
| 08700045 | W_GunLance_069 | 08700019 | G_Lan065 | 56 | Lullabyte Sleeplance |
| 08700046 | W_GunLance_070 | 0870001A | G_Lan066 | 79 | Lagomberator I |
| 08700047 | W_GunLance_071 | 0870001A | G_Lan066 | 80 | Lagomberator II |
| 08700048 | W_GunLance_072 | 0870001A | G_Lan066 | 81 | Lagomberator III |
| 08700049 | W_GunLance_073 | 0870001A | G_Lan066 | 82 | Lagomberatrix |
| 0870004A | W_GunLance_074 | 08700026 | G_Lan080 | 16 | Delex Harpoon I |
| 0870004B | W_GunLance_075 | 08700026 | G_Lan080 | 17 | Delex Harpoon II |
| 0870004C | W_GunLance_076 | 08700026 | G_Lan080 | 18 | Sand Blaster Gunlance |
| 0870004D | W_GunLance_077 | 0870001B | G_Lan067 | 83 | Ludroth Harpoon I |
| 0870004E | W_GunLance_078 | 0870001B | G_Lan067 | 84 | Ludroth Harpoon II |
| 0870004F | W_GunLance_079 | 0870001B | G_Lan067 | 85 | Ludroth Harpoon III |
| 08700050 | W_GunLance_080 | 0870001B | G_Lan067 | 86 | Ludroth Shellbreaker |
| 08700051 | W_GunLance_081 | 0870001C | G_Lan068 | 73 | Barroth Loader I |
| 08700052 | W_GunLance_082 | 0870001C | G_Lan068 | 74 | Barroth Loader II |
| 08700053 | W_GunLance_083 | 0870001C | G_Lan068 | 75 | Rugged Loader |
| 08700054 | W_GunLance_084 | 0870001D | G_Lan069 | 47 | Full Voltage I |
| 08700055 | W_GunLance_085 | 0870001D | G_Lan069 | 48 | Full Voltage II |
| 08700056 | W_GunLance_086 | 0870001D | G_Lan069 | 49 | High Volt Gunlance |
| 08700057 | W_GunLance_087 | 0870001E | G_Lan070 | 50 | Shattershot I |
| 08700058 | W_GunLance_088 | 0870001E | G_Lan070 | 51 | Shattershot II |
| 08700059 | W_GunLance_089 | 0870001E | G_Lan070 | 52 | Shatter God |
| 0870005A | W_GunLance_090 | 0870001F | G_Lan071 | 34 | Pukei Gunlance I |
| 0870005B | W_GunLance_091 | 0870001F | G_Lan071 | 35 | Pukei Gunlance II |
| 0870005C | W_GunLance_092 | 0870001F | G_Lan071 | 36 | Datura Gunlance |
| 0870005D | W_GunLance_093 | 08700000 | G_Lan001 | 10 | Princess Panoply I |
| 0870005E | W_GunLance_094 | 08700000 | G_Lan001 | 11 | Princess Panoply II |
| 0870005F | W_GunLance_095 | 08700000 | G_Lan001 | 12 | Ortlinde |
| 08700060 | W_GunLance_096 | 08700004 | G_Lan013 | 22 | Twinfang I |
| 08700061 | W_GunLance_097 | 08700004 | G_Lan013 | 23 | Twinfang II |
| 08700062 | W_GunLance_098 | 08700004 | G_Lan013 | 24 | Ambermarch |
| 08700063 | W_GunLance_099 | 08700003 | G_Lan005 | 57 | Kadachi Striker I |
| 08700064 | W_GunLance_100 | 08700003 | G_Lan005 | 58 | Kadachi Striker II |
| 08700065 | W_GunLance_101 | 08700003 | G_Lan005 | 59 | Mythic Kadachi Striker |
| 08700066 | W_GunLance_102 | 08700008 | G_Lan032 | 69 | Flaming Gunlance I |
| 08700067 | W_GunLance_103 | 08700008 | G_Lan032 | 70 | Flaming Gunlance II |
| 08700068 | W_GunLance_104 | 08700008 | G_Lan032 | 71 | Flaming Gunlance III |
| 08700069 | W_GunLance_105 | 08700008 | G_Lan032 | 72 | Barbarous Firelance |
| 0870006A | W_GunLance_106 | 08700020 | G_Lan072 | 66 | Hidden Gunlance I |
| 0870006B | W_GunLance_107 | 08700020 | G_Lan072 | 67 | Hidden Gunlance II |
| 0870006C | W_GunLance_108 | 08700020 | G_Lan072 | 68 | Fading Night |
| 0870006D | W_GunLance_109 | 08700021 | G_Lan073 | 7 | Ukiyo no Yamiwo I |
| 0870006E | W_GunLance_110 | 08700021 | G_Lan073 | 8 | Ukiyo no Yamiwo II |
| 0870006F | W_GunLance_111 | 08700021 | G_Lan073 | 9 | Mizumori |
| 08700070 | W_GunLance_112 | 08700001 | G_Lan002 | 13 | Red Rook I |
| 08700071 | W_GunLance_113 | 08700001 | G_Lan002 | 14 | Red Rook II |
| 08700072 | W_GunLance_114 | 08700001 | G_Lan002 | 15 | Crimson Rook |
| 08700073 | W_GunLance_115 | 08700022 | G_Lan074 | 19 | Usurper's Roar I |
| 08700074 | W_GunLance_116 | 08700022 | G_Lan074 | 20 | Usurper's Roar II |
| 08700075 | W_GunLance_117 | 08700022 | G_Lan074 | 21 | Despot's Phlogiston |
| 08700076 | W_GunLance_118 | 08700005 | G_Lan014 | 76 | Tiger Blast I |
| 08700077 | W_GunLance_119 | 08700005 | G_Lan014 | 77 | Tiger Blast II |
| 08700078 | W_GunLance_120 | 08700005 | G_Lan014 | 78 | Tigrex Gunlance |
| 08700079 | W_GunLance_121 | 08700023 | G_Lan076 | 37 | Diablos Gunlance I |
| 0870007A | W_GunLance_122 | 08700023 | G_Lan076 | 38 | Diablos Gunlance II |
| 0870007B | W_GunLance_123 | 08700023 | G_Lan076 | 39 | Diablos Cannon |
| 0870007C | W_GunLance_124 | 08700002 | G_Lan003 | 116 | Icesteel Gunlance I |
| 0870007D | W_GunLance_125 | 08700002 | G_Lan003 | 117 | Daora's Brigia |
| 0870007E | W_GunLance_126 | 08700024 | G_Lan077 | 118 | Venomous Cologne I |
| 0870007F | W_GunLance_127 | 08700024 | G_Lan077 | 119 | Venomous Attar |
| 08700080 | W_GunLance_128 | 08700025 | G_Lan078 | 105 | Demon Gunlance I |
| 08700081 | W_GunLance_129 | 08700025 | G_Lan078 | 106 | Demon Gunlance II |
| 08700082 | W_GunLance_130 | 08700025 | G_Lan078 | 107 | Great Demon Gunlance |
| 08700083 | W_GunLance_131 | 08700009 | G_Lan040 | 113 | Bazel Buster I |
| 08700084 | W_GunLance_132 | 08700009 | G_Lan040 | 114 | Bazel Buster II |
| 08700085 | W_GunLance_133 | 08700009 | G_Lan040 | 115 | Bazel Destroyer |
| 08700086 | W_GunLance_134 | 0870002A | G_Lan084 | 134 | Rampage Gunlance IV |
| 08700087 | W_GunLance_135 | 0870002A | G_Lan084 | 135 | Rampage Gunlance V |

# Dual Blades
| Weapon ID | Enum Name | Model ID | Model Name | Sort ID | Weapon Name |
| --- | --- | --- | --- | --- | --- |
| 08800000 | W_DualBlades_000 | 08800004 | D_Bld017 | 22 | Matched Slicers I |
| 08800001 | W_DualBlades_001 | 08800004 | D_Bld017 | 23 | Matched Slicers II |
| 08800002 | W_DualBlades_002 | 08800004 | D_Bld017 | 24 | Dual Daggers |
| 08800003 | W_DualBlades_003 | 08800013 | D_Bld057 | 25 | Hurricane I |
| 08800004 | W_DualBlades_004 | 08800013 | D_Bld057 | 26 | Hurricane II |
| 08800005 | W_DualBlades_005 | 08800013 | D_Bld057 | 27 | Cyclone |
| 08800006 | W_DualBlades_006 | 08800005 | D_Bld018 | 49 | Dual Hatchets I |
| 08800007 | W_DualBlades_007 | 08800005 | D_Bld018 | 50 | Dual Hatchets II |
| 08800008 | W_DualBlades_008 | 08800005 | D_Bld018 | 51 | Dual Cleavers |
| 08800009 | W_DualBlades_009 | 08800001 | D_Bld003 | 119 | Sworn Rapiers I |
| 0880000A | W_DualBlades_010 | 08800001 | D_Bld003 | 120 | Sworn Rapiers II |
| 0880000B | W_DualBlades_011 | 08800001 | D_Bld003 | 121 | Holy Sabers |
| 0880000C | W_DualBlades_012 | 08800014 | D_Bld058 | 122 | Altair I |
| 0880000D | W_DualBlades_013 | 08800014 | D_Bld058 | 123 | Altair II |
| 0880000E | W_DualBlades_014 | 08800014 | D_Bld058 | 124 | Fortis Gran |
| 0880000F | W_DualBlades_015 | 08800006 | D_Bld019 | 46 | Twin Chainsaws I |
| 08800010 | W_DualBlades_016 | 08800006 | D_Bld019 | 47 | Twin Chainsaws II |
| 08800011 | W_DualBlades_017 | 08800006 | D_Bld019 | 48 | Guillotines |
| 08800012 | W_DualBlades_018 | 08800015 | D_Bld059 | 40 | Gelid Mind I |
| 08800013 | W_DualBlades_019 | 08800015 | D_Bld059 | 41 | Gelid Mind II |
| 08800014 | W_DualBlades_020 | 08800015 | D_Bld059 | 42 | Gelid Soul |
| 08800015 | W_DualBlades_021 | 08800007 | D_Bld021 | 58 | Bone Hatchets I |
| 08800016 | W_DualBlades_022 | 08800007 | D_Bld021 | 59 | Bone Hatchets II |
| 08800017 | W_DualBlades_023 | 08800007 | D_Bld021 | 60 | Wild Hatchets |
| 08800018 | W_DualBlades_024 | 08800016 | D_Bld060 | 61 | Talon Carvers I |
| 08800019 | W_DualBlades_025 | 08800016 | D_Bld060 | 62 | Talon Carvers II |
| 0880001A | W_DualBlades_026 | 08800016 | D_Bld060 | 63 | Talon Twins |
| 0880001B | W_DualBlades_027 | 08800017 | D_Bld061 | 82 | Blazeblades I |
| 0880001C | W_DualBlades_028 | 08800017 | D_Bld061 | 83 | Blazeblades II |
| 0880001D | W_DualBlades_029 | 08800017 | D_Bld061 | 84 | Infernal Furies |
| 0880001E | W_DualBlades_030 | 0880000C | D_Bld050 | 1 | Kamura Glintblades I |
| 0880001F | W_DualBlades_031 | 0880000C | D_Bld050 | 2 | Kamura Glintblades II |
| 08800020 | W_DualBlades_032 | 0880000C | D_Bld050 | 3 | Kamura Glintblades III |
| 08800021 | W_DualBlades_033 | 0880000C | D_Bld050 | 4 | Kamura Glintblades IV |
| 08800022 | W_DualBlades_034 | 0880000C | D_Bld050 | 5 | Kamura Glintblades V |
| 08800023 | W_DualBlades_035 | 0880000C | D_Bld050 | 6 | Kamura Ninja Blades |
| 08800024 | W_DualBlades_036 | 0880002A | D_Bld083 | 128 | Rampage Twinblades I |
| 08800025 | W_DualBlades_037 | 0880002A | D_Bld083 | 129 | Rampage Twinblades II |
| 08800026 | W_DualBlades_038 | 0880002A | D_Bld083 | 130 | Rampage Twinblades III |
| 08800027 | W_DualBlades_039 | 0880002A | D_Bld083 | 133 | Rampage Twinblades S |
| 08800028 | W_DualBlades_040 | 0880002B | D_Bld0843 | 125 | Stealth Dango I |
| 08800029 | W_DualBlades_041 | 0880002B | D_Bld0843 | 126 | Stealth Dango II |
| 0880002A | W_DualBlades_042 | 0880002B | D_Bld0843 | 127 | Perfected Dango |
| 0880002B | W_DualBlades_043 | 08800019 | D_Bld064 | 110 | Felyne Claws I |
| 0880002C | W_DualBlades_044 | 08800019 | D_Bld064 | 111 | Felyne Claws II |
| 0880002D | W_DualBlades_045 | 08800019 | D_Bld064 | 112 | Raging Claws |
| 0880002E | W_DualBlades_046 | 08800029 | D_Bld082 | 113 | Rainy Jelly I |
| 0880002F | W_DualBlades_047 | 08800029 | D_Bld082 | 114 | Rainy Jelly II |
| 08800030 | W_DualBlades_048 | 08800029 | D_Bld082 | 115 | Rain of Gore |
| 08800031 | W_DualBlades_049 | 08800018 | D_Bld063 | 116 | Qornu Waga I |
| 08800032 | W_DualBlades_050 | 08800018 | D_Bld063 | 117 | Qornu Waga II |
| 08800033 | W_DualBlades_051 | 08800018 | D_Bld063 | 118 | Ro Waga |
| 08800034 | W_DualBlades_052 | 0880000D | D_Bld051 | 34 | Schirmscorn I |
| 08800035 | W_DualBlades_053 | 0880000D | D_Bld051 | 35 | Schirmscorn II |
| 08800036 | W_DualBlades_054 | 0880000D | D_Bld051 | 36 | Daybreak Daggers |
| 08800037 | W_DualBlades_055 | 0880000E | D_Bld052 | 79 | Frilled Claw I |
| 08800038 | W_DualBlades_056 | 0880000E | D_Bld052 | 80 | Frilled Claw II |
| 08800039 | W_DualBlades_057 | 0880000E | D_Bld052 | 81 | Illusory Frilled Claw |
| 0880003A | W_DualBlades_058 | 0880000F | D_Bld053 | 88 | Sinister Blades I |
| 0880003B | W_DualBlades_059 | 0880000F | D_Bld053 | 89 | Sinister Blades II |
| 0880003C | W_DualBlades_060 | 0880000F | D_Bld053 | 90 | Sinister Famineblades |
| 0880003D | W_DualBlades_061 | 08800010 | D_Bld054 | 7 | Mud Ripper I |
| 0880003E | W_DualBlades_062 | 08800010 | D_Bld054 | 8 | Mud Ripper II |
| 0880003F | W_DualBlades_063 | 08800010 | D_Bld054 | 9 | Mud Twister |
| 08800040 | W_DualBlades_064 | 08800011 | D_Bld055 | 94 | Azure Elder Blades I |
| 08800041 | W_DualBlades_065 | 08800011 | D_Bld055 | 95 | Azure Elder Blades II |
| 08800042 | W_DualBlades_066 | 08800011 | D_Bld055 | 96 | Abyssal Gale Blades |
| 08800043 | W_DualBlades_067 | 08800012 | D_Bld056 | 97 | Thunderbolt Blades I |
| 08800044 | W_DualBlades_068 | 08800012 | D_Bld056 | 98 | Abyssal Storm Blades |
| 08800045 | W_DualBlades_069 | 08800028 | D_Bld081 | 108 | Redwing Blades I |
| 08800046 | W_DualBlades_070 | 08800028 | D_Bld081 | 109 | Reddnaught Dragon Wing |
| 08800047 | W_DualBlades_071 | 0880001A | D_Bld065 | 52 | Cerulean Axes I |
| 08800048 | W_DualBlades_072 | 0880001A | D_Bld065 | 53 | Cerulean Axes II |
| 08800049 | W_DualBlades_073 | 0880001A | D_Bld065 | 54 | Ashigara Axes |
| 0880004A | W_DualBlades_074 | 0880001B | D_Bld066 | 85 | Snow Slicers I |
| 0880004B | W_DualBlades_075 | 0880001B | D_Bld066 | 86 | Snow Slicers II |
| 0880004C | W_DualBlades_076 | 0880001B | D_Bld066 | 87 | Snow Sisters |
| 0880004D | W_DualBlades_077 | 0880001C | D_Bld067 | 16 | Desperado I |
| 0880004E | W_DualBlades_078 | 0880001C | D_Bld067 | 17 | Desperado II |
| 0880004F | W_DualBlades_079 | 0880001C | D_Bld067 | 18 | The Kid |
| 08800050 | W_DualBlades_080 | 08800008 | D_Bld028 | 37 | Kulu's Peck I |
| 08800051 | W_DualBlades_081 | 08800008 | D_Bld028 | 38 | Kulu's Peck II |
| 08800052 | W_DualBlades_082 | 08800008 | D_Bld028 | 39 | Kulu's Lasher |
| 08800053 | W_DualBlades_083 | 0880001D | D_Bld068 | 76 | Ludroth Pair I |
| 08800054 | W_DualBlades_084 | 0880001D | D_Bld068 | 77 | Ludroth Pair II |
| 08800055 | W_DualBlades_085 | 0880001D | D_Bld068 | 78 | Double Droth |
| 08800056 | W_DualBlades_086 | 0880001E | D_Bld069 | 19 | Khezu Daggers I |
| 08800057 | W_DualBlades_087 | 0880001E | D_Bld069 | 20 | Khezu Daggers II |
| 08800058 | W_DualBlades_088 | 0880001E | D_Bld069 | 21 | Khezu Skards |
| 08800059 | W_DualBlades_089 | 08800009 | D_Bld029 | 70 | Jyura Duo I |
| 0880005A | W_DualBlades_090 | 08800009 | D_Bld029 | 71 | Jyura Duo II |
| 0880005B | W_DualBlades_091 | 08800009 | D_Bld029 | 72 | Jyura Pulverizers |
| 0880005C | W_DualBlades_092 | 08800003 | D_Bld012 | 13 | Blizzarioths I |
| 0880005D | W_DualBlades_093 | 08800003 | D_Bld012 | 14 | Blizzarioths II |
| 0880005E | W_DualBlades_094 | 08800003 | D_Bld012 | 15 | Mountain Blizzarioths |
| 0880005F | W_DualBlades_095 | 0880000A | D_Bld030 | 73 | Kadachi Twinblades I |
| 08800060 | W_DualBlades_096 | 0880000A | D_Bld030 | 74 | Kadachi Twinblades II |
| 08800061 | W_DualBlades_097 | 0880000A | D_Bld030 | 75 | Shockblades |
| 08800062 | W_DualBlades_098 | 0880000B | D_Bld031 | 55 | Flammenschild |
| 08800063 | W_DualBlades_099 | 0880000B | D_Bld031 | 56 | Flammenschild |
| 08800064 | W_DualBlades_100 | 0880000B | D_Bld031 | 57 | Gnashing Flammenschild |
| 08800065 | W_DualBlades_101 | 08800020 | D_Bld072 | 43 | Hidden Gemini I |
| 08800066 | W_DualBlades_102 | 08800020 | D_Bld072 | 44 | Hidden Gemini II |
| 08800067 | W_DualBlades_103 | 08800020 | D_Bld072 | 45 | Night Wings |
| 08800068 | W_DualBlades_104 | 08800021 | D_Bld073 | 31 | Morning Dawn I |
| 08800069 | W_DualBlades_105 | 08800021 | D_Bld073 | 32 | Morning Dawn II |
| 0880006A | W_DualBlades_106 | 08800021 | D_Bld073 | 33 | Evening Dusk |
| 0880006B | W_DualBlades_107 | 0880001F | D_Bld070 | 64 | Twin Flames I |
| 0880006C | W_DualBlades_108 | 0880001F | D_Bld070 | 65 | Twin Flames II |
| 0880006D | W_DualBlades_109 | 0880001F | D_Bld070 | 66 | Wyvern Lovers |
| 0880006E | W_DualBlades_110 | 08800022 | D_Bld074 | 10 | Usurper's Fulgur I |
| 0880006F | W_DualBlades_111 | 08800022 | D_Bld074 | 11 | Usurper's Fulgur II |
| 08800070 | W_DualBlades_112 | 08800022 | D_Bld074 | 12 | Despot's Blitz |
| 08800071 | W_DualBlades_113 | 08800023 | D_Bld075 | 28 | Rex Slicers I |
| 08800072 | W_DualBlades_114 | 08800023 | D_Bld075 | 29 | Rex Slicers II |
| 08800073 | W_DualBlades_115 | 08800023 | D_Bld075 | 30 | Tigrex Claws |
| 08800074 | W_DualBlades_116 | 08800024 | D_Bld076 | 67 | Diablos Bashers I |
| 08800075 | W_DualBlades_117 | 08800024 | D_Bld076 | 68 | Diablos Bashers II |
| 08800076 | W_DualBlades_118 | 08800024 | D_Bld076 | 69 | Diablos Mashers |
| 08800077 | W_DualBlades_119 | 08800025 | D_Bld077 | 102 | Icesteel Fang I |
| 08800078 | W_DualBlades_120 | 08800025 | D_Bld077 | 103 | Daora's Hook |
| 08800079 | W_DualBlades_121 | 08800000 | D_Bld001 | 104 | Twin Nails I |
| 0880007A | W_DualBlades_122 | 08800000 | D_Bld001 | 105 | Fire and Ice |
| 0880007B | W_DualBlades_123 | 08800026 | D_Bld078 | 106 | Rouge Flames I |
| 0880007C | W_DualBlades_124 | 08800026 | D_Bld078 | 107 | Dual Chameleos |
| 0880007D | W_DualBlades_125 | 08800027 | D_Bld079 | 91 | Suzuka Takamaru I |
| 0880007E | W_DualBlades_126 | 08800027 | D_Bld079 | 92 | Suzuka Takamaru II |
| 0880007F | W_DualBlades_127 | 08800027 | D_Bld079 | 93 | Suzuka Otakemaru |
| 08800080 | W_DualBlades_128 | 08800002 | D_Bld006 | 99 | Rookslayer Handaxes I |
| 08800081 | W_DualBlades_129 | 08800002 | D_Bld006 | 100 | Rookslayer Handaxes II |
| 08800082 | W_DualBlades_130 | 08800002 | D_Bld006 | 101 | Bazelhawk Rookslayer |
| 08800083 | W_DualBlades_131 | 0880002A | D_Bld083 | 131 | Rampage Twinblades IV |
| 08800084 | W_DualBlades_132 | 0880002A | D_Bld083 | 132 | Rampage Twinblades V |

# Hunting Horn
| Weapon ID | Enum Name | Model ID | Model Name | Sort ID | Weapon Name |
| --- | --- | --- | --- | --- | --- |
| 08900000 | W_Horn_000 | 08900005 | Hrn018 | 33 | Metal Bagpipe I |
| 08900001 | W_Horn_001 | 08900005 | Hrn018 | 34 | Great Bagpipe |
| 08900002 | W_Horn_002 | 08900012 | Hrn058 | 31 | Iron Horn I |
| 08900003 | W_Horn_003 | 08900012 | Hrn058 | 32 | Wind Horn |
| 08900004 | W_Horn_004 | 08900013 | Hrn059 | 35 | Heavy Bagpipe I |
| 08900005 | W_Horn_005 | 08900013 | Hrn059 | 36 | Fortissimo |
| 08900006 | W_Horn_006 | 08900006 | Hrn020 | 61 | Bone Horn I |
| 08900007 | W_Horn_007 | 08900006 | Hrn020 | 62 | Bone Horn II |
| 08900008 | W_Horn_008 | 08900006 | Hrn020 | 63 | Hardened Bone Horn |
| 08900009 | W_Horn_009 | 08900014 | Hrn060 | 64 | Hunter's Horn I |
| 0890000A | W_Horn_010 | 08900014 | Hrn060 | 65 | Native's Horn |
| 0890000B | W_Horn_011 | 0890000A | Hrn050 | 1 | Kamura Chorus I |
| 0890000C | W_Horn_012 | 0890000A | Hrn050 | 2 | Kamura Chorus II |
| 0890000D | W_Horn_013 | 0890000A | Hrn050 | 3 | Kamura Chorus III |
| 0890000E | W_Horn_014 | 0890000A | Hrn050 | 4 | Kamura Chorus IV |
| 0890000F | W_Horn_015 | 0890000A | Hrn050 | 5 | Kamura Chorus V |
| 08900010 | W_Horn_016 | 0890000A | Hrn050 | 6 | Kamura Ninja Horn |
| 08900011 | W_Horn_017 | 0890002C | Hrn087 | 128 | Rampage Agitato I |
| 08900012 | W_Horn_018 | 0890002C | Hrn087 | 129 | Rampage Agitato II |
| 08900013 | W_Horn_019 | 0890002C | Hrn087 | 130 | Rampage Agitato III |
| 08900014 | W_Horn_020 | 0890002C | Hrn087 | 133 | Rampage Agitato S |
| 08900015 | W_Horn_021 | 0890002B | Hrn086 | 125 | Grass Flute I |
| 08900016 | W_Horn_022 | 0890002B | Hrn086 | 126 | Grass Flute II |
| 08900017 | W_Horn_023 | 0890002B | Hrn086 | 127 | Bombadgy's Cry |
| 08900018 | W_Horn_024 | 08900015 | Hrn061 | 118 | Magia Charm I |
| 08900019 | W_Horn_025 | 08900015 | Hrn061 | 119 | Magia Charm II |
| 0890001A | W_Horn_026 | 08900015 | Hrn061 | 120 | Magia Charm III |
| 0890001B | W_Horn_027 | 08900015 | Hrn061 | 121 | Magia Charmbell |
| 0890001C | W_Horn_028 | 08900016 | Hrn062 | 115 | Poison Fungasax I |
| 0890001D | W_Horn_029 | 08900016 | Hrn062 | 116 | Poison Fungasax II |
| 0890001E | W_Horn_030 | 08900016 | Hrn062 | 117 | Toxic Fungasax |
| 0890001F | W_Horn_031 | 08900017 | Hrn063 | 122 | Cornupion I |
| 08900020 | W_Horn_032 | 08900017 | Hrn063 | 123 | Cornupion II |
| 08900021 | W_Horn_033 | 08900017 | Hrn063 | 124 | Webbed Cornupion |
| 08900022 | W_Horn_034 | 0890000B | Hrn051 | 55 | Wind Thief Horn I |
| 08900023 | W_Horn_035 | 0890000B | Hrn051 | 56 | Wind Thief Horn II |
| 08900024 | W_Horn_036 | 0890000B | Hrn051 | 57 | Gale Horn |
| 08900025 | W_Horn_037 | 0890000C | Hrn052 | 52 | Frog Flute I |
| 08900026 | W_Horn_038 | 0890000C | Hrn052 | 53 | Frog Flute II |
| 08900027 | W_Horn_039 | 0890000C | Hrn052 | 54 | Amphibia Allargando |
| 08900028 | W_Horn_040 | 0890000D | Hrn053 | 28 | Frilled Flute I |
| 08900029 | W_Horn_041 | 0890000D | Hrn053 | 29 | Frilled Flute II |
| 0890002A | W_Horn_042 | 0890000D | Hrn053 | 30 | Illusory Flute |
| 0890002B | W_Horn_043 | 0890000E | Hrn054 | 93 | Sinister Strum I |
| 0890002C | W_Horn_044 | 0890000E | Hrn054 | 94 | Sinister Strum II |
| 0890002D | W_Horn_045 | 0890000E | Hrn054 | 95 | Sinister Shadestrum |
| 0890002E | W_Horn_046 | 0890000F | Hrn055 | 10 | Sublime Bell I |
| 0890002F | W_Horn_047 | 0890000F | Hrn055 | 11 | Sublime Bell II |
| 08900030 | W_Horn_048 | 0890000F | Hrn055 | 12 | Araknahorn |
| 08900031 | W_Horn_049 | 08900010 | Hrn056 | 99 | Azure Elder Horn I |
| 08900032 | W_Horn_050 | 08900010 | Hrn056 | 100 | Azure Elder Horn II |
| 08900033 | W_Horn_051 | 08900010 | Hrn056 | 101 | Abyssal Gale Horn |
| 08900034 | W_Horn_052 | 08900011 | Hrn057 | 102 | Thunderbolt Horn I |
| 08900035 | W_Horn_053 | 08900011 | Hrn057 | 103 | Abyssal Storm Horn |
| 08900036 | W_Horn_054 | 0890002A | Hrn084 | 113 | Redwing Flute I |
| 08900037 | W_Horn_055 | 0890002A | Hrn084 | 114 | Reddnaught Ritmico |
| 08900038 | W_Horn_056 | 08900018 | Hrn064 | 69 | Bull Grunt I |
| 08900039 | W_Horn_057 | 08900018 | Hrn064 | 70 | Bull Grunt II |
| 0890003A | W_Horn_058 | 08900018 | Hrn064 | 71 | Wild Grunt |
| 0890003B | W_Horn_059 | 08900019 | Hrn065 | 81 | Vicello Nulo I |
| 0890003C | W_Horn_060 | 08900019 | Hrn065 | 82 | Vicello Nulo II |
| 0890003D | W_Horn_061 | 08900019 | Hrn065 | 83 | Vicello Unu |
| 0890003E | W_Horn_062 | 0890001B | Hrn067 | 90 | Vicello Nulo White I |
| 0890003F | W_Horn_063 | 0890001B | Hrn067 | 91 | Vicello Nulo White II |
| 08900040 | W_Horn_064 | 0890001B | Hrn067 | 92 | Vicello Unu White |
| 08900041 | W_Horn_065 | 0890001A | Hrn066 | 87 | Vicello Nulo Green I |
| 08900042 | W_Horn_066 | 0890001A | Hrn066 | 88 | Vicello Nulo Green II |
| 08900043 | W_Horn_067 | 0890001A | Hrn066 | 89 | Vicello Unu Green |
| 08900044 | W_Horn_068 | 0890001C | Hrn068 | 84 | Vicello Nulo Black I |
| 08900045 | W_Horn_069 | 0890001C | Hrn068 | 85 | Vicello Nulo Black II |
| 08900046 | W_Horn_070 | 0890001C | Hrn068 | 86 | Vicello Uno Black |
| 08900047 | W_Horn_071 | 0890001D | Hrn069 | 19 | Zurogong Primo I |
| 08900048 | W_Horn_072 | 0890001D | Hrn069 | 20 | Zurogong Primo II |
| 08900049 | W_Horn_073 | 0890001D | Hrn069 | 21 | Zurogong Secundo |
| 0890004A | W_Horn_074 | 08900007 | Hrn029 | 75 | Kulu Mosso I |
| 0890004B | W_Horn_075 | 08900007 | Hrn029 | 76 | Kulu Mosso II |
| 0890004C | W_Horn_076 | 08900007 | Hrn029 | 77 | Kulu Grosso |
| 0890004D | W_Horn_077 | 0890001E | Hrn070 | 58 | Droth Drone I |
| 0890004E | W_Horn_078 | 0890001E | Hrn070 | 59 | Droth Drone II |
| 0890004F | W_Horn_079 | 0890001E | Hrn070 | 60 | Droth Roar |
| 08900050 | W_Horn_080 | 0890001F | Hrn071 | 49 | Sandpipe I |
| 08900051 | W_Horn_081 | 0890001F | Hrn071 | 50 | Sandpipe II |
| 08900052 | W_Horn_082 | 0890001F | Hrn071 | 51 | Sandcrier |
| 08900053 | W_Horn_083 | 08900020 | Hrn072 | 78 | Khezu Horn I |
| 08900054 | W_Horn_084 | 08900020 | Hrn072 | 79 | Khezu Horn II |
| 08900055 | W_Horn_085 | 08900020 | Hrn072 | 80 | Khezu Flute |
| 08900056 | W_Horn_086 | 08900008 | Hrn031 | 40 | Pukei Bagpipe I |
| 08900057 | W_Horn_087 | 08900008 | Hrn031 | 41 | Pukei Bagpipe II |
| 08900058 | W_Horn_088 | 08900008 | Hrn031 | 42 | Datura Lurr |
| 08900059 | W_Horn_089 | 08900021 | Hrn073 | 13 | Basarios Rock I |
| 0890005A | W_Horn_090 | 08900021 | Hrn073 | 14 | Basarios Rock Mk.II |
| 0890005B | W_Horn_091 | 08900021 | Hrn073 | 15 | Gigant Rock |
| 0890005C | W_Horn_092 | 08900001 | Hrn002 | 46 | Valkyrie Chordmaker I |
| 0890005D | W_Horn_093 | 08900001 | Hrn002 | 47 | Valkyrie Chordmaker II |
| 0890005E | W_Horn_094 | 08900001 | Hrn002 | 48 | Queen Chordmaker |
| 0890005F | W_Horn_095 | 08900022 | Hrn074 | 25 | Bariguiro I |
| 08900060 | W_Horn_096 | 08900022 | Hrn074 | 26 | Bariguiro II |
| 08900061 | W_Horn_097 | 08900022 | Hrn074 | 27 | Algiguiro |
| 08900062 | W_Horn_098 | 08900009 | Hrn034 | 43 | Flammenkornett I |
| 08900063 | W_Horn_099 | 08900009 | Hrn034 | 44 | Flammenkornett II |
| 08900064 | W_Horn_100 | 08900009 | Hrn034 | 45 | Forte Flammenkornett |
| 08900065 | W_Horn_101 | 08900004 | Hrn013 | 37 | Hidden Harmonic I |
| 08900066 | W_Horn_102 | 08900004 | Hrn013 | 38 | Hidden Harmonic II |
| 08900067 | W_Horn_103 | 08900004 | Hrn013 | 39 | Cry in the Night |
| 08900068 | W_Horn_104 | 08900023 | Hrn076 | 7 | Poetic Bell I |
| 08900069 | W_Horn_105 | 08900023 | Hrn076 | 8 | Poetic Bell II |
| 0890006A | W_Horn_106 | 08900023 | Hrn076 | 9 | Summoning Bell |
| 0890006B | W_Horn_107 | 08900024 | Hrn077 | 72 | Flame Feroce I |
| 0890006C | W_Horn_108 | 08900024 | Hrn077 | 73 | Flame Feroce II |
| 0890006D | W_Horn_109 | 08900024 | Hrn077 | 74 | Rathalos Feroce |
| 0890006E | W_Horn_110 | 08900025 | Hrn078 | 16 | Usurper's Growl I |
| 0890006F | W_Horn_111 | 08900025 | Hrn078 | 17 | Usurper's Growl II |
| 08900070 | W_Horn_112 | 08900025 | Hrn078 | 18 | Despot's Thunderclap |
| 08900071 | W_Horn_113 | 08900003 | Hrn012 | 22 | Striped Dragonga I |
| 08900072 | W_Horn_114 | 08900003 | Hrn012 | 23 | Striped Dragonga II |
| 08900073 | W_Horn_115 | 08900003 | Hrn012 | 24 | Tigrex Horn |
| 08900074 | W_Horn_116 | 08900026 | Hrn080 | 66 | Duo Horn I |
| 08900075 | W_Horn_117 | 08900026 | Hrn080 | 67 | Duo Horn II |
| 08900076 | W_Horn_118 | 08900026 | Hrn080 | 68 | Duo Risoluto |
| 08900077 | W_Horn_119 | 08900027 | Hrn081 | 107 | Daora's Taus I |
| 08900078 | W_Horn_120 | 08900027 | Hrn081 | 108 | Daora's Baphophone |
| 08900079 | W_Horn_121 | 08900000 | Hrn001 | 109 | Teostra's Tiple I |
| 0890007A | W_Horn_122 | 08900000 | Hrn001 | 110 | Teostra's Orphée |
| 0890007B | W_Horn_123 | 08900028 | Hrn082 | 111 | Blessed Ocarina I |
| 0890007C | W_Horn_124 | 08900028 | Hrn082 | 112 | Cursed Ocarina |
| 0890007D | W_Horn_125 | 08900029 | Hrn083 | 96 | Denden Daiko I |
| 0890007E | W_Horn_126 | 08900029 | Hrn083 | 97 | Denden Daiko II |
| 0890007F | W_Horn_127 | 08900029 | Hrn083 | 98 | Denden Doomsounder |
| 08900080 | W_Horn_128 | 08900002 | Hrn006 | 104 | Rookslayer Drum I |
| 08900081 | W_Horn_129 | 08900002 | Hrn006 | 105 | Rookslayer Drum II |
| 08900082 | W_Horn_130 | 08900002 | Hrn006 | 106 | Bazelreid Rookslayer |
| 08900083 | W_Horn_131 | 0890002C | Hrn087 | 131 | Rampage Agitato IV |
| 08900084 | W_Horn_132 | 0890002C | Hrn087 | 132 | Rampage Agitato V |

# Insect Glaive
| Weapon ID | Enum Name | Model ID | Model Name | Sort ID | Weapon Name |
| --- | --- | --- | --- | --- | --- |
| 08A00000 | W_InsectGlaive_000 | 08A00011 | I_Gla058 | 25 | Iron Bayonet I |
| 08A00001 | W_InsectGlaive_001 | 08A00011 | I_Gla058 | 26 | Iron Bayonet II |
| 08A00002 | W_InsectGlaive_002 | 08A00011 | I_Gla058 | 27 | Hiten Blade |
| 08A00003 | W_InsectGlaive_003 | 08A00004 | I_Gla018 | 22 | Iron Blade I |
| 08A00004 | W_InsectGlaive_004 | 08A00004 | I_Gla018 | 23 | Iron Blade II |
| 08A00005 | W_InsectGlaive_005 | 08A00004 | I_Gla018 | 24 | Steel Blade |
| 08A00006 | W_InsectGlaive_006 | 08A00005 | I_Gla020 | 49 | Bone Staff I |
| 08A00007 | W_InsectGlaive_007 | 08A00005 | I_Gla020 | 50 | Bone Staff II |
| 08A00008 | W_InsectGlaive_008 | 08A00005 | I_Gla020 | 51 | Aerial Glaive |
| 08A00009 | W_InsectGlaive_009 | 08A00012 | I_Gla059 | 52 | Sturdy Glaive I |
| 08A0000A | W_InsectGlaive_010 | 08A00012 | I_Gla059 | 53 | Sturdy Glaive II |
| 08A0000B | W_InsectGlaive_011 | 08A00012 | I_Gla059 | 54 | Sturdy Glaive Redux |
| 08A0000C | W_InsectGlaive_012 | 08A00013 | I_Gla060 | 55 | Sky-High Glaive I |
| 08A0000D | W_InsectGlaive_013 | 08A00013 | I_Gla060 | 56 | Sky-High Glaive II |
| 08A0000E | W_InsectGlaive_014 | 08A00013 | I_Gla060 | 57 | Highest of Glaives |
| 08A0000F | W_InsectGlaive_015 | 08A00009 | I_Gla050 | 1 | Kamura Glaive I |
| 08A00010 | W_InsectGlaive_016 | 08A00009 | I_Gla050 | 2 | Kamura Glaive II |
| 08A00011 | W_InsectGlaive_017 | 08A00009 | I_Gla050 | 3 | Kamura Glaive III |
| 08A00012 | W_InsectGlaive_018 | 08A00009 | I_Gla050 | 4 | Kamura Glaive IV |
| 08A00013 | W_InsectGlaive_019 | 08A00009 | I_Gla050 | 5 | Kamura Glaive V |
| 08A00014 | W_InsectGlaive_020 | 08A00009 | I_Gla050 | 6 | Kamura Ninja Glaive |
| 08A00015 | W_InsectGlaive_021 | 08A00029 | I_Gla083 | 124 | Rampage Glaive I |
| 08A00016 | W_InsectGlaive_022 | 08A00029 | I_Gla083 | 125 | Rampage Glaive II |
| 08A00017 | W_InsectGlaive_023 | 08A00029 | I_Gla083 | 126 | Rampage Glaive III |
| 08A00018 | W_InsectGlaive_024 | 08A00029 | I_Gla083 | 129 | Rampage Glaive S |
| 08A00019 | W_InsectGlaive_025 | 08A00028 | I_Gla082 | 121 | Brush Glaive I |
| 08A0001A | W_InsectGlaive_026 | 08A00028 | I_Gla082 | 122 | Brush Glaive II |
| 08A0001B | W_InsectGlaive_027 | 08A00028 | I_Gla082 | 123 | Watercolor Glaive |
| 08A0001C | W_InsectGlaive_028 | 08A00014 | I_Gla061 | 117 | Magia Pitareen I |
| 08A0001D | W_InsectGlaive_029 | 08A00014 | I_Gla061 | 118 | Magia Pitareen II |
| 08A0001E | W_InsectGlaive_030 | 08A00014 | I_Gla061 | 119 | Magia Pitareen III |
| 08A0001F | W_InsectGlaive_031 | 08A00014 | I_Gla061 | 120 | Magia Crescent |
| 08A00020 | W_InsectGlaive_032 | 08A00015 | I_Gla063 | 114 | Deathport Staff I |
| 08A00021 | W_InsectGlaive_033 | 08A00015 | I_Gla063 | 115 | Deathport Staff II |
| 08A00022 | W_InsectGlaive_034 | 08A00015 | I_Gla063 | 116 | Garamorse |
| 08A00023 | W_InsectGlaive_035 | 08A0000A | I_Gla051 | 37 | Aknosom Pike I |
| 08A00024 | W_InsectGlaive_036 | 08A0000A | I_Gla051 | 38 | Aknosom Pike II |
| 08A00025 | W_InsectGlaive_037 | 08A0000A | I_Gla051 | 39 | Daybreak Glaive |
| 08A00026 | W_InsectGlaive_038 | 08A0000B | I_Gla052 | 19 | Leaping Glaive I |
| 08A00027 | W_InsectGlaive_039 | 08A0000B | I_Gla052 | 20 | Leaping Glaive II |
| 08A00028 | W_InsectGlaive_040 | 08A0000B | I_Gla052 | 21 | Leapfrog |
| 08A00029 | W_InsectGlaive_041 | 08A0000C | I_Gla053 | 13 | Frilled Jab I |
| 08A0002A | W_InsectGlaive_042 | 08A0000C | I_Gla053 | 14 | Frilled Jab II |
| 08A0002B | W_InsectGlaive_043 | 08A0000C | I_Gla053 | 15 | Illusory Frilled Jab |
| 08A0002C | W_InsectGlaive_044 | 08A0000D | I_Gla054 | 97 | Sinister Staff I |
| 08A0002D | W_InsectGlaive_045 | 08A0000D | I_Gla054 | 98 | Sinister Staff II |
| 08A0002E | W_InsectGlaive_046 | 08A0000D | I_Gla054 | 99 | Sinister Shadowstaff |
| 08A0002F | W_InsectGlaive_047 | 08A0000E | I_Gla055 | 64 | Gossglaive I |
| 08A00030 | W_InsectGlaive_048 | 08A0000E | I_Gla055 | 65 | Gossglaive II |
| 08A00031 | W_InsectGlaive_049 | 08A0000E | I_Gla055 | 66 | Abominable Glaive |
| 08A00032 | W_InsectGlaive_050 | 08A0000F | I_Gla056 | 103 | Azure Elder Glaive I |
| 08A00033 | W_InsectGlaive_051 | 08A0000F | I_Gla056 | 104 | Azure Elder Glaive II |
| 08A00034 | W_InsectGlaive_052 | 08A0000F | I_Gla056 | 105 | Abyssal Gale Glaive |
| 08A00035 | W_InsectGlaive_053 | 08A00010 | I_Gla057 | 106 | Thunderbolt Glaive I |
| 08A00036 | W_InsectGlaive_054 | 08A00010 | I_Gla057 | 107 | Abyssal Storm Glaive |
| 08A00037 | W_InsectGlaive_055 | 08A00026 | I_Gla080 | 112 | Redwing Glaive I |
| 08A00038 | W_InsectGlaive_056 | 08A00026 | I_Gla080 | 113 | Reddnaught Shuma |
| 08A00039 | W_InsectGlaive_057 | 08A00016 | I_Gla064 | 82 | Rielle Nulo I |
| 08A0003A | W_InsectGlaive_058 | 08A00016 | I_Gla064 | 83 | Rielle Nulo II |
| 08A0003B | W_InsectGlaive_059 | 08A00016 | I_Gla064 | 84 | Rielle Unu |
| 08A0003C | W_InsectGlaive_060 | 08A00019 | I_Gla067 | 85 | Rielle Nulo Red I |
| 08A0003D | W_InsectGlaive_061 | 08A00019 | I_Gla067 | 86 | Rielle Nulo Red II |
| 08A0003E | W_InsectGlaive_062 | 08A00019 | I_Gla067 | 87 | Rielle Vermiglio |
| 08A0003F | W_InsectGlaive_063 | 08A00018 | I_Gla066 | 91 | Rielle Nulo White I |
| 08A00040 | W_InsectGlaive_064 | 08A00018 | I_Gla066 | 92 | Rielle Nulo White II |
| 08A00041 | W_InsectGlaive_065 | 08A00018 | I_Gla066 | 93 | Rielle Unu White |
| 08A00042 | W_InsectGlaive_066 | 08A00017 | I_Gla065 | 94 | Rielle Nulo Green I |
| 08A00043 | W_InsectGlaive_067 | 08A00017 | I_Gla065 | 95 | Rielle Nulo Green II |
| 08A00044 | W_InsectGlaive_068 | 08A00017 | I_Gla065 | 96 | Rielle Unu Green |
| 08A00045 | W_InsectGlaive_069 | 08A0001A | I_Gla068 | 88 | Rielle Nulo Black I |
| 08A00046 | W_InsectGlaive_070 | 08A0001A | I_Gla068 | 89 | Rielle Nulo Black II |
| 08A00047 | W_InsectGlaive_071 | 08A0001A | I_Gla068 | 90 | Rielle Nerissimo |
| 08A00048 | W_InsectGlaive_072 | 08A0001B | I_Gla069 | 79 | Hortadent I |
| 08A00049 | W_InsectGlaive_073 | 08A0001B | I_Gla069 | 80 | Hortadent II |
| 08A0004A | W_InsectGlaive_074 | 08A0001B | I_Gla069 | 81 | Hortadent Brada |
| 08A0004B | W_InsectGlaive_075 | 08A0001C | I_Gla070 | 46 | Lagombaglaive I |
| 08A0004C | W_InsectGlaive_076 | 08A0001C | I_Gla070 | 47 | Lagombaglaive II |
| 08A0004D | W_InsectGlaive_077 | 08A0001C | I_Gla070 | 48 | Lagombavarice |
| 08A0004E | W_InsectGlaive_078 | 08A00006 | I_Gla027 | 40 | Kulu Glaive I |
| 08A0004F | W_InsectGlaive_079 | 08A00006 | I_Gla027 | 41 | Kulu Glaive II |
| 08A00050 | W_InsectGlaive_080 | 08A00006 | I_Gla027 | 42 | Kulu Pike |
| 08A00051 | W_InsectGlaive_081 | 08A0001D | I_Gla071 | 73 | Royal Bloom I |
| 08A00052 | W_InsectGlaive_082 | 08A0001D | I_Gla071 | 74 | Royal Bloom II |
| 08A00053 | W_InsectGlaive_083 | 08A0001D | I_Gla071 | 75 | Bloom Royale |
| 08A00054 | W_InsectGlaive_084 | 08A0001E | I_Gla072 | 31 | Bolt Chamber I |
| 08A00055 | W_InsectGlaive_085 | 08A0001E | I_Gla072 | 32 | Bolt Chamber II |
| 08A00056 | W_InsectGlaive_086 | 08A0001E | I_Gla072 | 33 | Full Bolt Chamber |
| 08A00057 | W_InsectGlaive_087 | 08A00007 | I_Gla028 | 67 | Pukei Rod I |
| 08A00058 | W_InsectGlaive_088 | 08A00007 | I_Gla028 | 68 | Pukei Rod II |
| 08A00059 | W_InsectGlaive_089 | 08A00007 | I_Gla028 | 69 | Datura Pike |
| 08A0005A | W_InsectGlaive_090 | 08A0001F | I_Gla073 | 34 | Princess Regalia I |
| 08A0005B | W_InsectGlaive_091 | 08A0001F | I_Gla073 | 35 | Princess Regalia II |
| 08A0005C | W_InsectGlaive_092 | 08A0001F | I_Gla073 | 36 | Queen Regalia |
| 08A0005D | W_InsectGlaive_093 | 08A00003 | I_Gla012 | 70 | Amber Piton I |
| 08A0005E | W_InsectGlaive_094 | 08A00003 | I_Gla012 | 71 | Amber Piton II |
| 08A0005F | W_InsectGlaive_095 | 08A00003 | I_Gla012 | 72 | Fenrir Storm |
| 08A00060 | W_InsectGlaive_096 | 08A00008 | I_Gla029 | 43 | Kadachi Glaive I |
| 08A00061 | W_InsectGlaive_097 | 08A00008 | I_Gla029 | 44 | Kadachi Glaive II |
| 08A00062 | W_InsectGlaive_098 | 08A00008 | I_Gla029 | 45 | Shocking Pike |
| 08A00063 | W_InsectGlaive_099 | 08A00002 | I_Gla005 | 61 | Flammenkaefer I |
| 08A00064 | W_InsectGlaive_100 | 08A00002 | I_Gla005 | 62 | Flammenkaefer II |
| 08A00065 | W_InsectGlaive_101 | 08A00002 | I_Gla005 | 63 | Gnashing Flammenkaefer |
| 08A00066 | W_InsectGlaive_102 | 08A00020 | I_Gla074 | 7 | Hidden Scythe I |
| 08A00067 | W_InsectGlaive_103 | 08A00020 | I_Gla074 | 8 | Hidden Scythe II |
| 08A00068 | W_InsectGlaive_104 | 08A00020 | I_Gla074 | 9 | Evening Calm |
| 08A00069 | W_InsectGlaive_105 | 08A00021 | I_Gla075 | 10 | Fox Halberd I |
| 08A0006A | W_InsectGlaive_106 | 08A00021 | I_Gla075 | 11 | Fox Halberd II |
| 08A0006B | W_InsectGlaive_107 | 08A00021 | I_Gla075 | 12 | Curved Naganagi |
| 08A0006C | W_InsectGlaive_108 | 08A00001 | I_Gla003 | 28 | Rathmaul I |
| 08A0006D | W_InsectGlaive_109 | 08A00001 | I_Gla003 | 29 | Rathmaul II |
| 08A0006E | W_InsectGlaive_110 | 08A00001 | I_Gla003 | 30 | Firedance Rathmaul |
| 08A0006F | W_InsectGlaive_111 | 08A00027 | I_Gla081 | 76 | Royal Bolt Scepter I |
| 08A00070 | W_InsectGlaive_112 | 08A00027 | I_Gla081 | 77 | Royal Bolt Scepter II |
| 08A00071 | W_InsectGlaive_113 | 08A00027 | I_Gla081 | 78 | Despot's Twinbolt |
| 08A00072 | W_InsectGlaive_114 | 08A00022 | I_Gla076 | 16 | Tigrex Kaina I |
| 08A00073 | W_InsectGlaive_115 | 08A00022 | I_Gla076 | 17 | Tigrex Kaina II |
| 08A00074 | W_InsectGlaive_116 | 08A00022 | I_Gla076 | 18 | Tigerclaw Glaive |
| 08A00075 | W_InsectGlaive_117 | 08A00023 | I_Gla077 | 58 | Diablos Rod I |
| 08A00076 | W_InsectGlaive_118 | 08A00023 | I_Gla077 | 59 | Diablos Rod II |
| 08A00077 | W_InsectGlaive_119 | 08A00023 | I_Gla077 | 60 | Tyrant Rod |
| 08A00078 | W_InsectGlaive_120 | 08A00000 | I_Gla002 | 108 | Daora's Entom I |
| 08A00079 | W_InsectGlaive_121 | 08A00000 | I_Gla002 | 109 | Daora's Tethidine |
| 08A0007A | W_InsectGlaive_122 | 08A00024 | I_Gla078 | 110 | Caster's Rod I |
| 08A0007B | W_InsectGlaive_123 | 08A00024 | I_Gla078 | 111 | Hazy Caster |
| 08A0007C | W_InsectGlaive_124 | 08A00025 | I_Gla079 | 100 | Metal Mauler I |
| 08A0007D | W_InsectGlaive_125 | 08A00025 | I_Gla079 | 101 | Metal Mauler II |
| 08A0007E | W_InsectGlaive_126 | 08A00025 | I_Gla079 | 102 | Metalmangler |
| 08A0007F | W_InsectGlaive_127 | 08A00029 | I_Gla083 | 127 | Rampage Glaive IV |
| 08A00080 | W_InsectGlaive_128 | 08A00029 | I_Gla083 | 128 | Rampage Glaive V |

# Charge Blade
| Weapon ID | Enum Name | Model ID | Model Name | Sort ID | Weapon Name |
| --- | --- | --- | --- | --- | --- |
| 08B00000 | W_ChargeAxe_000 | 08B00004 | C_Axe018 | 27 | Hyperguard I |
| 08B00001 | W_ChargeAxe_001 | 08B00004 | C_Axe018 | 28 | Hyperguard II |
| 08B00002 | W_ChargeAxe_002 | 08B00004 | C_Axe018 | 29 | Regas Hyper |
| 08B00003 | W_ChargeAxe_003 | 08B00012 | C_Axe059 | 30 | Elite Blade I |
| 08B00004 | W_ChargeAxe_004 | 08B00012 | C_Axe059 | 31 | Elite Blade II |
| 08B00005 | W_ChargeAxe_005 | 08B00012 | C_Axe059 | 32 | Kaiser Blade |
| 08B00006 | W_ChargeAxe_006 | 08B00013 | C_Axe060 | 33 | K. Captain's Blade I |
| 08B00007 | W_ChargeAxe_007 | 08B00013 | C_Axe060 | 34 | K. Captain's Blade II |
| 08B00008 | W_ChargeAxe_008 | 08B00013 | C_Axe060 | 35 | Die Walküre |
| 08B00009 | W_ChargeAxe_009 | 08B00006 | C_Axe021 | 57 | Bone Blade I |
| 08B0000A | W_ChargeAxe_010 | 08B00006 | C_Axe021 | 58 | Bone Blade II |
| 08B0000B | W_ChargeAxe_011 | 08B00006 | C_Axe021 | 59 | Bonesilt Veil |
| 08B0000C | W_ChargeAxe_012 | 08B00005 | C_Axe020 | 54 | Bone Strongarm I |
| 08B0000D | W_ChargeAxe_013 | 08B00005 | C_Axe020 | 55 | Bone Strongarm II |
| 08B0000E | W_ChargeAxe_014 | 08B00005 | C_Axe020 | 56 | Hard Bone Strongarm |
| 08B0000F | W_ChargeAxe_015 | 08B00014 | C_Axe061 | 69 | Poisonous Veil I |
| 08B00010 | W_ChargeAxe_016 | 08B00014 | C_Axe061 | 70 | Poisonous Veil II |
| 08B00011 | W_ChargeAxe_017 | 08B00014 | C_Axe061 | 71 | Infected Veil |
| 08B00012 | W_ChargeAxe_018 | 08B00015 | C_Axe062 | 72 | Dragon Veil I |
| 08B00013 | W_ChargeAxe_019 | 08B00015 | C_Axe062 | 73 | Dragon Veil II |
| 08B00014 | W_ChargeAxe_020 | 08B00015 | C_Axe062 | 74 | Dragonsong |
| 08B00015 | W_ChargeAxe_021 | 08B00009 | C_Axe050 | 1 | Kamura C. Blade I |
| 08B00016 | W_ChargeAxe_022 | 08B00009 | C_Axe050 | 2 | Kamura C. Blade II |
| 08B00017 | W_ChargeAxe_023 | 08B00009 | C_Axe050 | 3 | Kamura C. Blade III |
| 08B00018 | W_ChargeAxe_024 | 08B00009 | C_Axe050 | 4 | Kamura C. Blade IV |
| 08B00019 | W_ChargeAxe_025 | 08B00009 | C_Axe050 | 5 | Kamura C. Blade V |
| 08B0001A | W_ChargeAxe_026 | 08B00009 | C_Axe050 | 6 | Kamura Ninja C. Blade |
| 08B0001B | W_ChargeAxe_027 | 08B00026 | C_Axe081 | 115 | Rampage C. Blade I |
| 08B0001C | W_ChargeAxe_028 | 08B00026 | C_Axe081 | 116 | Rampage C. Blade II |
| 08B0001D | W_ChargeAxe_029 | 08B00026 | C_Axe081 | 117 | Rampage C. Blade III |
| 08B0001E | W_ChargeAxe_030 | 08B00026 | C_Axe081 | 120 | Rampage C. Blade S |
| 08B0001F | W_ChargeAxe_031 | 08B00025 | C_Axe080 | 103 | Ricebane I |
| 08B00020 | W_ChargeAxe_032 | 08B00025 | C_Axe080 | 104 | Ricebane II |
| 08B00021 | W_ChargeAxe_033 | 08B00025 | C_Axe080 | 105 | Pounder of Rice |
| 08B00022 | W_ChargeAxe_034 | 08B00018 | C_Axe065 | 106 | Cuddly Cat I |
| 08B00023 | W_ChargeAxe_035 | 08B00018 | C_Axe065 | 107 | Cuddly Cat II |
| 08B00024 | W_ChargeAxe_036 | 08B00018 | C_Axe065 | 108 | Felyne Fancy |
| 08B00025 | W_ChargeAxe_037 | 08B00017 | C_Axe064 | 109 | Mandible Blade I |
| 08B00026 | W_ChargeAxe_038 | 08B00017 | C_Axe064 | 110 | Mandible Blade II |
| 08B00027 | W_ChargeAxe_039 | 08B00017 | C_Axe064 | 111 | Maxilla Edge |
| 08B00028 | W_ChargeAxe_040 | 08B00016 | C_Axe063 | 112 | Vaik Veil I |
| 08B00029 | W_ChargeAxe_041 | 08B00016 | C_Axe063 | 113 | Vaik Veil II |
| 08B0002A | W_ChargeAxe_042 | 08B00016 | C_Axe063 | 114 | Shieldraad |
| 08B0002B | W_ChargeAxe_043 | 08B0000A | C_Axe051 | 48 | Wind Thief Sickle I |
| 08B0002C | W_ChargeAxe_044 | 08B0000A | C_Axe051 | 49 | Wind Thief Sickle II |
| 08B0002D | W_ChargeAxe_045 | 08B0000A | C_Axe051 | 50 | Gale Sickle |
| 08B0002E | W_ChargeAxe_046 | 08B0000B | C_Axe052 | 17 | Shovedown Blade I |
| 08B0002F | W_ChargeAxe_047 | 08B0000B | C_Axe052 | 18 | Shovedown Blade II |
| 08B00030 | W_ChargeAxe_048 | 08B0000B | C_Axe052 | 19 | Spinning Takedown |
| 08B00031 | W_ChargeAxe_049 | 08B0000C | C_Axe053 | 66 | Bellowing Blow I |
| 08B00032 | W_ChargeAxe_050 | 08B0000C | C_Axe053 | 67 | Bellowing Blow II |
| 08B00033 | W_ChargeAxe_051 | 08B0000C | C_Axe053 | 68 | Illusory Frilled Wail |
| 08B00034 | W_ChargeAxe_052 | 08B0000D | C_Axe054 | 84 | Sinister Slasher I |
| 08B00035 | W_ChargeAxe_053 | 08B0000D | C_Axe054 | 85 | Sinister Slasher II |
| 08B00036 | W_ChargeAxe_054 | 08B0000D | C_Axe054 | 86 | Sinister Shade Axe |
| 08B00037 | W_ChargeAxe_055 | 08B0000E | C_Axe055 | 24 | Surprise Axe I |
| 08B00038 | W_ChargeAxe_056 | 08B0000E | C_Axe055 | 25 | Surprise Axe II |
| 08B00039 | W_ChargeAxe_057 | 08B0000E | C_Axe055 | 26 | Stunning Axe |
| 08B0003A | W_ChargeAxe_058 | 08B0000F | C_Axe056 | 36 | Biting Edge I |
| 08B0003B | W_ChargeAxe_059 | 08B0000F | C_Axe056 | 37 | Biting Edge II |
| 08B0003C | W_ChargeAxe_060 | 08B0000F | C_Axe056 | 38 | Araknablade |
| 08B0003D | W_ChargeAxe_061 | 08B00010 | C_Axe057 | 90 | Azure Elder Blade I |
| 08B0003E | W_ChargeAxe_062 | 08B00010 | C_Axe057 | 91 | Azure Elder Blade II |
| 08B0003F | W_ChargeAxe_063 | 08B00010 | C_Axe057 | 92 | Abyssal Gale Ward |
| 08B00040 | W_ChargeAxe_064 | 08B00011 | C_Axe058 | 93 | Thunderbolt Sawtooth I |
| 08B00041 | W_ChargeAxe_065 | 08B00011 | C_Axe058 | 94 | Abyssal Storm Ward |
| 08B00042 | W_ChargeAxe_066 | 08B00023 | C_Axe077 | 101 | Redwing Edge I |
| 08B00043 | W_ChargeAxe_067 | 08B00023 | C_Axe077 | 102 | Skaltecore |
| 08B00044 | W_ChargeAxe_068 | 08B00019 | C_Axe066 | 75 | Barroth Anchor I |
| 08B00045 | W_ChargeAxe_069 | 08B00019 | C_Axe066 | 76 | Barroth Anchor II |
| 08B00046 | W_ChargeAxe_070 | 08B00019 | C_Axe066 | 77 | Rugged Anchor |
| 08B00047 | W_ChargeAxe_071 | 08B0001A | C_Axe067 | 81 | Rough Roller I |
| 08B00048 | W_ChargeAxe_072 | 08B0001A | C_Axe067 | 82 | Rough Roller II |
| 08B00049 | W_ChargeAxe_073 | 08B0001A | C_Axe067 | 83 | Rotaxion |
| 08B0004A | W_ChargeAxe_074 | 08B00007 | C_Axe028 | 60 | Jyura Silt I |
| 08B0004B | W_ChargeAxe_075 | 08B00007 | C_Axe028 | 61 | Jyura Silt II |
| 08B0004C | W_ChargeAxe_076 | 08B00007 | C_Axe028 | 62 | Clutch of the Deep |
| 08B0004D | W_ChargeAxe_077 | 08B0001B | C_Axe068 | 20 | Giga Grips I |
| 08B0004E | W_ChargeAxe_078 | 08B0001B | C_Axe068 | 21 | Giga Grips II |
| 08B0004F | W_ChargeAxe_079 | 08B0001B | C_Axe068 | 22 | Giga Grips III |
| 08B00050 | W_ChargeAxe_080 | 08B0001B | C_Axe068 | 23 | Titan's Vise |
| 08B00051 | W_ChargeAxe_081 | 08B00001 | C_Axe002 | 7 | Dear Lutemis I |
| 08B00052 | W_ChargeAxe_082 | 08B00001 | C_Axe002 | 8 | Dear Lutemis II |
| 08B00053 | W_ChargeAxe_083 | 08B00001 | C_Axe002 | 9 | Dear Lutemia |
| 08B00054 | W_ChargeAxe_084 | 08B00003 | C_Axe012 | 10 | Weissritter I |
| 08B00055 | W_ChargeAxe_085 | 08B00003 | C_Axe012 | 11 | Weissritter II |
| 08B00056 | W_ChargeAxe_086 | 08B00003 | C_Axe012 | 12 | Weissritter III |
| 08B00057 | W_ChargeAxe_087 | 08B00003 | C_Axe012 | 13 | Paladire |
| 08B00058 | W_ChargeAxe_088 | 08B00008 | C_Axe029 | 45 | Kadachi Slasher I |
| 08B00059 | W_ChargeAxe_089 | 08B00008 | C_Axe029 | 46 | Kadachi Slasher II |
| 08B0005A | W_ChargeAxe_090 | 08B00008 | C_Axe029 | 47 | Kadachi Otenta |
| 08B0005B | W_ChargeAxe_091 | 08B0001C | C_Axe070 | 51 | Hidden Arsenal I |
| 08B0005C | W_ChargeAxe_092 | 08B0001C | C_Axe070 | 52 | Hidden Arsenal II |
| 08B0005D | W_ChargeAxe_093 | 08B0001C | C_Axe070 | 53 | Scream in the Night |
| 08B0005E | W_ChargeAxe_094 | 08B0001D | C_Axe071 | 42 | Mizuniya Drill I |
| 08B0005F | W_ChargeAxe_095 | 08B0001D | C_Axe071 | 43 | Mizuniya Drill II |
| 08B00060 | W_ChargeAxe_096 | 08B0001D | C_Axe071 | 44 | Final Fieldblade |
| 08B00061 | W_ChargeAxe_097 | 08B00002 | C_Axe003 | 63 | Axelion Blade I |
| 08B00062 | W_ChargeAxe_098 | 08B00002 | C_Axe003 | 64 | Axelion Blade II |
| 08B00063 | W_ChargeAxe_099 | 08B00002 | C_Axe003 | 65 | Bardichion Blade |
| 08B00064 | W_ChargeAxe_100 | 08B00024 | C_Axe079 | 14 | Usurper's Lightning I |
| 08B00065 | W_ChargeAxe_101 | 08B00024 | C_Axe079 | 15 | Usurper's Lightning II |
| 08B00066 | W_ChargeAxe_102 | 08B00024 | C_Axe079 | 16 | Despot's Thundergale |
| 08B00067 | W_ChargeAxe_103 | 08B0001E | C_Axe072 | 39 | Tigrex Divide I |
| 08B00068 | W_ChargeAxe_104 | 08B0001E | C_Axe072 | 40 | Tigrex Divide II |
| 08B00069 | W_ChargeAxe_105 | 08B0001E | C_Axe072 | 41 | Tigrex Blade |
| 08B0006A | W_ChargeAxe_106 | 08B0001F | C_Axe073 | 78 | Diablos Strongarm I |
| 08B0006B | W_ChargeAxe_107 | 08B0001F | C_Axe073 | 79 | Diablos Strongarm II |
| 08B0006C | W_ChargeAxe_108 | 08B0001F | C_Axe073 | 80 | Cera Strongarm |
| 08B0006D | W_ChargeAxe_109 | 08B00000 | C_Axe001 | 95 | Daora's Casca I |
| 08B0006E | W_ChargeAxe_110 | 08B00000 | C_Axe001 | 96 | Daora's Thwartoise |
| 08B0006F | W_ChargeAxe_111 | 08B00020 | C_Axe074 | 97 | Teostra's Striker I |
| 08B00070 | W_ChargeAxe_112 | 08B00020 | C_Axe074 | 98 | Teostra's Nova |
| 08B00071 | W_ChargeAxe_113 | 08B00021 | C_Axe075 | 99 | Arcane Draw I |
| 08B00072 | W_ChargeAxe_114 | 08B00021 | C_Axe075 | 100 | Etherward |
| 08B00073 | W_ChargeAxe_115 | 08B00022 | C_Axe076 | 87 | Undying Blade I |
| 08B00074 | W_ChargeAxe_116 | 08B00022 | C_Axe076 | 88 | Undying Blade II |
| 08B00075 | W_ChargeAxe_117 | 08B00022 | C_Axe076 | 89 | Ikaji Immortal |
| 08B00076 | W_ChargeAxe_118 | 08B00026 | C_Axe081 | 118 | Rampage C. Blade IV |
| 08B00077 | W_ChargeAxe_119 | 08B00026 | C_Axe081 | 119 | Rampage C. Blade V |

# Light Bowgun
| Weapon ID | Enum Name | Model ID | Model Name | Sort ID | Weapon Name |
| --- | --- | --- | --- | --- | --- |
| 08C00000 | W_LightBowgun_000 | 08C0000F | L_Bg059 | 31 | Hunter's Rifle I |
| 08C00001 | W_LightBowgun_001 | 08C0000F | L_Bg059 | 32 | Hunter's Rifle II |
| 08C00002 | W_LightBowgun_002 | 08C0000F | L_Bg059 | 33 | Sniper Shot |
| 08C00003 | W_LightBowgun_003 | 08C00010 | L_Bg060 | 34 | Jaeger I |
| 08C00004 | W_LightBowgun_004 | 08C00010 | L_Bg060 | 35 | Jaeger II |
| 08C00005 | W_LightBowgun_005 | 08C00010 | L_Bg060 | 36 | Jaeger Prime |
| 08C00006 | W_LightBowgun_006 | 08C00001 | L_Bg007 | 59 | Cross Bowgun I |
| 08C00007 | W_LightBowgun_007 | 08C00001 | L_Bg007 | 60 | Cross Bowgun II |
| 08C00008 | W_LightBowgun_008 | 08C00001 | L_Bg007 | 61 | Cross Blitz |
| 08C00009 | W_LightBowgun_009 | 08C00011 | L_Bg061 | 62 | Yakt Shooter I |
| 08C0000A | W_LightBowgun_010 | 08C00011 | L_Bg061 | 63 | Yakt Shooter II |
| 08C0000B | W_LightBowgun_011 | 08C00011 | L_Bg061 | 64 | Wyvern Chaser |
| 08C0000C | W_LightBowgun_012 | 08C00006 | L_Bg050 | 1 | Kamura L. Bowgun I |
| 08C0000D | W_LightBowgun_013 | 08C00006 | L_Bg050 | 2 | Kamura L. Bowgun II |
| 08C0000E | W_LightBowgun_014 | 08C00006 | L_Bg050 | 3 | Kamura L. Bowgun III |
| 08C0000F | W_LightBowgun_015 | 08C00006 | L_Bg050 | 4 | Kamura L. Bowgun IV |
| 08C00010 | W_LightBowgun_016 | 08C00006 | L_Bg050 | 5 | Kamura L. Bowgun V |
| 08C00011 | W_LightBowgun_017 | 08C00006 | L_Bg050 | 6 | Kamura Ninja L. Bowgun |
| 08C00012 | W_LightBowgun_018 | 08C00024 | L_Bg084 | 112 | Rampage L. Bowgun I |
| 08C00013 | W_LightBowgun_019 | 08C00024 | L_Bg084 | 113 | Rampage L. Bowgun II |
| 08C00014 | W_LightBowgun_020 | 08C00024 | L_Bg084 | 114 | Rampage L. Bowgun III |
| 08C00015 | W_LightBowgun_021 | 08C00024 | L_Bg084 | 117 | Rampage L. Bowgun S |
| 08C00016 | W_LightBowgun_022 | 08C00023 | L_Bg083 | 106 | Wooden Dog Bowgun I |
| 08C00017 | W_LightBowgun_023 | 08C00023 | L_Bg083 | 107 | Wooden Dog Bowgun II |
| 08C00018 | W_LightBowgun_024 | 08C00023 | L_Bg083 | 108 | Watchdog's Howl |
| 08C00019 | W_LightBowgun_025 | 08C00012 | L_Bg062 | 109 | Springnight Shot I |
| 08C0001A | W_LightBowgun_026 | 08C00012 | L_Bg062 | 110 | Springnight Shot II |
| 08C0001B | W_LightBowgun_027 | 08C00012 | L_Bg062 | 111 | Springnight Spawn |
| 08C0001C | W_LightBowgun_028 | 08C00007 | L_Bg051 | 49 | Wind Thief L. Bowgun I |
| 08C0001D | W_LightBowgun_029 | 08C00007 | L_Bg051 | 50 | Wind Thief L. Bowgun II |
| 08C0001E | W_LightBowgun_030 | 08C00007 | L_Bg051 | 51 | Wind Thief L. Bowgun III |
| 08C0001F | W_LightBowgun_031 | 08C00007 | L_Bg051 | 52 | Gale Bowgun |
| 08C00020 | W_LightBowgun_032 | 08C00008 | L_Bg052 | 13 | Lotus Bowgun I |
| 08C00021 | W_LightBowgun_033 | 08C00008 | L_Bg052 | 14 | Lotus Bowgun II |
| 08C00022 | W_LightBowgun_034 | 08C00008 | L_Bg052 | 15 | Great Lotus Bowgun |
| 08C00023 | W_LightBowgun_035 | 08C00009 | L_Bg053 | 84 | Sinister Bowgun I |
| 08C00024 | W_LightBowgun_036 | 08C00009 | L_Bg053 | 85 | Sinister Bowgun II |
| 08C00025 | W_LightBowgun_037 | 08C00009 | L_Bg053 | 86 | Sinister Shadow Bolt |
| 08C00026 | W_LightBowgun_038 | 08C0000A | L_Bg054 | 27 | Gossgun I |
| 08C00027 | W_LightBowgun_039 | 08C0000A | L_Bg054 | 28 | Gossgun II |
| 08C00028 | W_LightBowgun_040 | 08C0000A | L_Bg054 | 29 | Gossgun III |
| 08C00029 | W_LightBowgun_041 | 08C0000A | L_Bg054 | 30 | Abominable Bowgun |
| 08C0002A | W_LightBowgun_042 | 08C0000B | L_Bg055 | 40 | Almudron Bowgun I |
| 08C0002B | W_LightBowgun_043 | 08C0000B | L_Bg055 | 41 | Almudron Bowgun II |
| 08C0002C | W_LightBowgun_044 | 08C0000B | L_Bg055 | 42 | Doom Bringer Bowgun |
| 08C0002D | W_LightBowgun_045 | 08C0000C | L_Bg056 | 10 | Lumier Bowgun I |
| 08C0002E | W_LightBowgun_046 | 08C0000C | L_Bg056 | 11 | Lumier Bowgun II |
| 08C0002F | W_LightBowgun_047 | 08C0000C | L_Bg056 | 12 | Araknabolt |
| 08C00030 | W_LightBowgun_048 | 08C0000D | L_Bg057 | 90 | Azure Elder Bowgun I |
| 08C00031 | W_LightBowgun_049 | 08C0000D | L_Bg057 | 91 | Azure Elder Bowgun II |
| 08C00032 | W_LightBowgun_050 | 08C0000D | L_Bg057 | 92 | Abyssal Gale Bolt |
| 08C00033 | W_LightBowgun_051 | 08C0000E | L_Bg058 | 93 | Thunderbolt Bowgun I |
| 08C00034 | W_LightBowgun_052 | 08C0000E | L_Bg058 | 94 | Abyssal Storm Bolt |
| 08C00035 | W_LightBowgun_053 | 08C00022 | L_Bg082 | 104 | Redwing Shooter I |
| 08C00036 | W_LightBowgun_054 | 08C00022 | L_Bg082 | 105 | Reddnaught Bowgun |
| 08C00037 | W_LightBowgun_055 | 08C00013 | L_Bg065 | 81 | Royal Launcher I |
| 08C00038 | W_LightBowgun_056 | 08C00013 | L_Bg065 | 82 | Royal Launcher II |
| 08C00039 | W_LightBowgun_057 | 08C00013 | L_Bg065 | 83 | Royal Torrent |
| 08C0003A | W_LightBowgun_058 | 08C00014 | L_Bg066 | 24 | Barro Barrel I |
| 08C0003B | W_LightBowgun_059 | 08C00014 | L_Bg066 | 25 | Barro Barrel II |
| 08C0003C | W_LightBowgun_060 | 08C00014 | L_Bg066 | 26 | Barro Blaster |
| 08C0003D | W_LightBowgun_061 | 08C00015 | L_Bg067 | 16 | Khezu Syringe I |
| 08C0003E | W_LightBowgun_062 | 08C00015 | L_Bg067 | 17 | Khezu Syringe II |
| 08C0003F | W_LightBowgun_063 | 08C00015 | L_Bg067 | 18 | Khezu Syringe III |
| 08C00040 | W_LightBowgun_064 | 08C00015 | L_Bg067 | 19 | Khezu Hypo |
| 08C00041 | W_LightBowgun_065 | 08C00016 | L_Bg068 | 20 | Shotgun (Viper) I |
| 08C00042 | W_LightBowgun_066 | 08C00016 | L_Bg068 | 21 | Shotgun (Viper) II |
| 08C00043 | W_LightBowgun_067 | 08C00016 | L_Bg068 | 22 | Shotgun (Viper) III |
| 08C00044 | W_LightBowgun_068 | 08C00016 | L_Bg068 | 23 | Bullet Rain (Viper) |
| 08C00045 | W_LightBowgun_069 | 08C00017 | L_Bg069 | 43 | Scale Tornado I |
| 08C00046 | W_LightBowgun_070 | 08C00017 | L_Bg069 | 44 | Scale Tornado II |
| 08C00047 | W_LightBowgun_071 | 08C00017 | L_Bg069 | 45 | Uroktor Vortex |
| 08C00048 | W_LightBowgun_072 | 08C00003 | L_Bg030 | 65 | Wishing Star I |
| 08C00049 | W_LightBowgun_073 | 08C00003 | L_Bg030 | 66 | Wishing Star II |
| 08C0004A | W_LightBowgun_074 | 08C00003 | L_Bg030 | 67 | Comet Bolt |
| 08C0004B | W_LightBowgun_075 | 08C00018 | L_Bg070 | 74 | Grenade Launcher I |
| 08C0004C | W_LightBowgun_076 | 08C00018 | L_Bg070 | 75 | Grenade Launcher II |
| 08C0004D | W_LightBowgun_077 | 08C00018 | L_Bg070 | 76 | Grenade Launcher III |
| 08C0004E | W_LightBowgun_078 | 08C00018 | L_Bg070 | 77 | Grenade Revolver |
| 08C0004F | W_LightBowgun_079 | 08C00019 | L_Bg071 | 56 | Valkyrie Fire I |
| 08C00050 | W_LightBowgun_080 | 08C00019 | L_Bg071 | 57 | Valkyrie Fire II |
| 08C00051 | W_LightBowgun_081 | 08C00019 | L_Bg071 | 58 | Valkyrie Blaze |
| 08C00052 | W_LightBowgun_082 | 08C00002 | L_Bg012 | 71 | Blizzard Cannon I |
| 08C00053 | W_LightBowgun_083 | 08C00002 | L_Bg012 | 72 | Blizzard Cannon II |
| 08C00054 | W_LightBowgun_084 | 08C00002 | L_Bg012 | 73 | Blizzard Volley |
| 08C00055 | W_LightBowgun_085 | 08C00004 | L_Bg033 | 53 | Flammenkanone I |
| 08C00056 | W_LightBowgun_086 | 08C00004 | L_Bg033 | 54 | Flammenkanone II |
| 08C00057 | W_LightBowgun_087 | 08C00004 | L_Bg033 | 55 | Furious Flammenkanone |
| 08C00058 | W_LightBowgun_088 | 08C0001A | L_Bg073 | 7 | Hidden Eye I |
| 08C00059 | W_LightBowgun_089 | 08C0001A | L_Bg073 | 8 | Hidden Eye II |
| 08C0005A | W_LightBowgun_090 | 08C0001A | L_Bg073 | 9 | Night Owl |
| 08C0005B | W_LightBowgun_091 | 08C0001B | L_Bg074 | 46 | Desolate Mist I |
| 08C0005C | W_LightBowgun_092 | 08C0001B | L_Bg074 | 47 | Desolate Mist II |
| 08C0005D | W_LightBowgun_093 | 08C0001B | L_Bg074 | 48 | Nifl Mist |
| 08C0005E | W_LightBowgun_094 | 08C0001C | L_Bg075 | 68 | Rathling Gun I |
| 08C0005F | W_LightBowgun_095 | 08C0001C | L_Bg075 | 69 | Rathling Gun II |
| 08C00060 | W_LightBowgun_096 | 08C0001C | L_Bg075 | 70 | Rathling Phoenix |
| 08C00061 | W_LightBowgun_097 | 08C0001D | L_Bg076 | 37 | Usurper's Crime I |
| 08C00062 | W_LightBowgun_098 | 08C0001D | L_Bg076 | 38 | Usurper's Crime II |
| 08C00063 | W_LightBowgun_099 | 08C0001D | L_Bg076 | 39 | Despot's Wildfire |
| 08C00064 | W_LightBowgun_100 | 08C0001E | L_Bg077 | 78 | Tigrex Tank I |
| 08C00065 | W_LightBowgun_101 | 08C0001E | L_Bg077 | 79 | Tigrex Tank II |
| 08C00066 | W_LightBowgun_102 | 08C0001E | L_Bg077 | 80 | Tigrex Wargun |
| 08C00067 | W_LightBowgun_103 | 08C00000 | L_Bg003 | 98 | Icesteel Wasp I |
| 08C00068 | W_LightBowgun_104 | 08C00000 | L_Bg003 | 99 | Daora's Hornet |
| 08C00069 | W_LightBowgun_105 | 08C0001F | L_Bg078 | 100 | Teostra's Dart I |
| 08C0006A | W_LightBowgun_106 | 08C0001F | L_Bg078 | 101 | Teostra's Flamebolt |
| 08C0006B | W_LightBowgun_107 | 08C00020 | L_Bg079 | 102 | Blessed Lamp I |
| 08C0006C | W_LightBowgun_108 | 08C00020 | L_Bg079 | 103 | Cursed Lamp |
| 08C0006D | W_LightBowgun_109 | 08C00021 | L_Bg080 | 87 | Rajang Barrage I |
| 08C0006E | W_LightBowgun_110 | 08C00021 | L_Bg080 | 88 | Rajang Barrage II |
| 08C0006F | W_LightBowgun_111 | 08C00021 | L_Bg080 | 89 | Ten Thousand Volts |
| 08C00070 | W_LightBowgun_112 | 08C00005 | L_Bg034 | 95 | Rookslayer Bowgun I |
| 08C00071 | W_LightBowgun_113 | 08C00005 | L_Bg034 | 96 | Rookslayer Bowgun II |
| 08C00072 | W_LightBowgun_114 | 08C00005 | L_Bg034 | 97 | Bazelfetter Rookslayer |
| 08C00073 | W_LightBowgun_115 | 08C00024 | L_Bg084 | 115 | Rampage L. Bowgun IV |
| 08C00074 | W_LightBowgun_116 | 08C00024 | L_Bg084 | 116 | Rampage L. Bowgun V |

# Heavy Bowgun
| Weapon ID | Enum Name | Model ID | Model Name | Sort ID | Weapon Name |
| --- | --- | --- | --- | --- | --- |
| 08D00000 | W_HeavyBowgun_000 | 08D00005 | H_Bg020 | 29 | Iron Assault I |
| 08D00001 | W_HeavyBowgun_001 | 08D00005 | H_Bg020 | 30 | Iron Assault II |
| 08D00002 | W_HeavyBowgun_002 | 08D00005 | H_Bg020 | 31 | Steel Assault |
| 08D00003 | W_HeavyBowgun_003 | 08D00011 | H_Bg058 | 38 | Meteor Bazooka I |
| 08D00004 | W_HeavyBowgun_004 | 08D00011 | H_Bg058 | 39 | Meteor Bazooka II |
| 08D00005 | W_HeavyBowgun_005 | 08D00011 | H_Bg058 | 40 | Meteor Cannon |
| 08D00006 | W_HeavyBowgun_006 | 08D00012 | H_Bg060 | 32 | Striker's Bowgun I |
| 08D00007 | W_HeavyBowgun_007 | 08D00012 | H_Bg060 | 33 | Striker's Bowgun II |
| 08D00008 | W_HeavyBowgun_008 | 08D00012 | H_Bg060 | 34 | Elite Bowgun |
| 08D00009 | W_HeavyBowgun_009 | 08D00006 | H_Bg021 | 57 | Bone Shooter I |
| 08D0000A | W_HeavyBowgun_010 | 08D00006 | H_Bg021 | 58 | Bone Shooter II |
| 08D0000B | W_HeavyBowgun_011 | 08D00006 | H_Bg021 | 59 | Bone Buster |
| 08D0000C | W_HeavyBowgun_012 | 08D00009 | H_Bg050 | 1 | Kamura H. Bowgun I |
| 08D0000D | W_HeavyBowgun_013 | 08D00009 | H_Bg050 | 2 | Kamura H. Bowgun II |
| 08D0000E | W_HeavyBowgun_014 | 08D00009 | H_Bg050 | 3 | Kamura H. Bowgun III |
| 08D0000F | W_HeavyBowgun_015 | 08D00009 | H_Bg050 | 4 | Kamura H. Bowgun IV |
| 08D00010 | W_HeavyBowgun_016 | 08D00009 | H_Bg050 | 5 | Kamura H. Bowgun V |
| 08D00011 | W_HeavyBowgun_017 | 08D00009 | H_Bg050 | 6 | Kamura Ninja H. Bowgun |
| 08D00012 | W_HeavyBowgun_018 | 08D00026 | H_Bg083 | 115 | Rampage H. Bowgun I |
| 08D00013 | W_HeavyBowgun_019 | 08D00026 | H_Bg083 | 116 | Rampage H. Bowgun II |
| 08D00014 | W_HeavyBowgun_020 | 08D00026 | H_Bg083 | 117 | Rampage H. Bowgun III |
| 08D00015 | W_HeavyBowgun_021 | 08D00026 | H_Bg083 | 120 | Rampage H. Bowgun S |
| 08D00016 | W_HeavyBowgun_022 | 08D00013 | H_Bg061 | 109 | Ladybug Cannon I |
| 08D00017 | W_HeavyBowgun_023 | 08D00013 | H_Bg061 | 110 | Ladybug Cannon II |
| 08D00018 | W_HeavyBowgun_024 | 08D00013 | H_Bg061 | 111 | Ladybug Mortar |
| 08D00019 | W_HeavyBowgun_025 | 08D00015 | H_Bg063 | 112 | Felyne Bowgun I |
| 08D0001A | W_HeavyBowgun_026 | 08D00015 | H_Bg063 | 113 | Felyne Bowgun II |
| 08D0001B | W_HeavyBowgun_027 | 08D00015 | H_Bg063 | 114 | Felyne Cannon |
| 08D0001C | W_HeavyBowgun_028 | 08D00024 | H_Bg081 | 106 | Journey Jelly I |
| 08D0001D | W_HeavyBowgun_029 | 08D00024 | H_Bg081 | 107 | Journey Jelly II |
| 08D0001E | W_HeavyBowgun_030 | 08D00024 | H_Bg081 | 108 | Guiding Light |
| 08D0001F | W_HeavyBowgun_031 | 08D00014 | H_Bg062 | 103 | Carrozza Bazooka I |
| 08D00020 | W_HeavyBowgun_032 | 08D00014 | H_Bg062 | 104 | Carrozza Bazooka II |
| 08D00021 | W_HeavyBowgun_033 | 08D00014 | H_Bg062 | 105 | Cendrillon |
| 08D00022 | W_HeavyBowgun_034 | 08D0000A | H_Bg051 | 50 | Wind Thief Crossbow I |
| 08D00023 | W_HeavyBowgun_035 | 08D0000A | H_Bg051 | 51 | Wind Thief Crossbow II |
| 08D00024 | W_HeavyBowgun_036 | 08D0000A | H_Bg051 | 52 | Wind Thief Crossbow III |
| 08D00025 | W_HeavyBowgun_037 | 08D0000A | H_Bg051 | 53 | Gale Crossbow |
| 08D00026 | W_HeavyBowgun_038 | 08D0000B | H_Bg052 | 13 | Reversal Shot I |
| 08D00027 | W_HeavyBowgun_039 | 08D0000B | H_Bg052 | 14 | Reversal Shot II |
| 08D00028 | W_HeavyBowgun_040 | 08D0000B | H_Bg052 | 15 | Reversal Shot III |
| 08D00029 | W_HeavyBowgun_041 | 08D0000B | H_Bg052 | 16 | Reversal Barrage |
| 08D0002A | W_HeavyBowgun_042 | 08D0000C | H_Bg053 | 78 | Highpriest Bowgun I |
| 08D0002B | W_HeavyBowgun_043 | 08D0000C | H_Bg053 | 79 | Highpriest Bowgun II |
| 08D0002C | W_HeavyBowgun_044 | 08D0000C | H_Bg053 | 80 | Bishaten's Grace |
| 08D0002D | W_HeavyBowgun_045 | 08D0000D | H_Bg054 | 84 | Sinister Volley I |
| 08D0002E | W_HeavyBowgun_046 | 08D0000D | H_Bg054 | 85 | Sinister Volley II |
| 08D0002F | W_HeavyBowgun_047 | 08D0000D | H_Bg054 | 86 | Sinister Dreadvolley |
| 08D00030 | W_HeavyBowgun_048 | 08D0000E | H_Bg055 | 54 | Fulgent Shot I |
| 08D00031 | W_HeavyBowgun_049 | 08D0000E | H_Bg055 | 55 | Fulgent Shot II |
| 08D00032 | W_HeavyBowgun_050 | 08D0000E | H_Bg055 | 56 | Araknamortar |
| 08D00033 | W_HeavyBowgun_051 | 08D0000F | H_Bg056 | 90 | Azure Elder Cannon I |
| 08D00034 | W_HeavyBowgun_052 | 08D0000F | H_Bg056 | 91 | Azure Elder Cannon II |
| 08D00035 | W_HeavyBowgun_053 | 08D0000F | H_Bg056 | 92 | Abyssal Gale Barrage |
| 08D00036 | W_HeavyBowgun_054 | 08D00010 | H_Bg057 | 93 | Thunderbolt Cannon I |
| 08D00037 | W_HeavyBowgun_055 | 08D00010 | H_Bg057 | 94 | Abyssal Storm Barrage |
| 08D00038 | W_HeavyBowgun_056 | 08D00023 | H_Bg080 | 101 | Redwing Cannon I |
| 08D00039 | W_HeavyBowgun_057 | 08D00023 | H_Bg080 | 102 | Diabolica |
| 08D0003A | W_HeavyBowgun_058 | 08D00016 | H_Bg064 | 72 | Rapidcaster I |
| 08D0003B | W_HeavyBowgun_059 | 08D00016 | H_Bg064 | 73 | Rapidcaster II |
| 08D0003C | W_HeavyBowgun_060 | 08D00016 | H_Bg064 | 74 | Cyclecaster |
| 08D0003D | W_HeavyBowgun_061 | 08D00017 | H_Bg065 | 63 | Anteka Burst I |
| 08D0003E | W_HeavyBowgun_062 | 08D00017 | H_Bg065 | 64 | Anteka Burst II |
| 08D0003F | W_HeavyBowgun_063 | 08D00017 | H_Bg065 | 65 | Anteka Blaster |
| 08D00040 | W_HeavyBowgun_064 | 08D00018 | H_Bg066 | 23 | Arzuros Gun I |
| 08D00041 | W_HeavyBowgun_065 | 08D00018 | H_Bg066 | 24 | Arzuros Gun II |
| 08D00042 | W_HeavyBowgun_066 | 08D00018 | H_Bg066 | 25 | Arzuros Fishergun |
| 08D00043 | W_HeavyBowgun_067 | 08D00019 | H_Bg067 | 81 | Spheniscine Slayer I |
| 08D00044 | W_HeavyBowgun_068 | 08D00019 | H_Bg067 | 82 | Spheniscine Slayer II |
| 08D00045 | W_HeavyBowgun_069 | 08D00019 | H_Bg067 | 83 | Spheniscine Ruler |
| 08D00046 | W_HeavyBowgun_070 | 08D0001A | H_Bg068 | 44 | Marino Burst I |
| 08D00047 | W_HeavyBowgun_071 | 08D0001A | H_Bg068 | 45 | Marino Burst II |
| 08D00048 | W_HeavyBowgun_072 | 08D0001A | H_Bg068 | 46 | Marino Cannon |
| 08D00049 | W_HeavyBowgun_073 | 08D0001B | H_Bg069 | 47 | Carom Shot I |
| 08D0004A | W_HeavyBowgun_074 | 08D0001B | H_Bg069 | 48 | Carom Shot II |
| 08D0004B | W_HeavyBowgun_075 | 08D0001B | H_Bg069 | 49 | Rebound Shot |
| 08D0004C | W_HeavyBowgun_076 | 08D00007 | H_Bg033 | 60 | Pukei Launcher I |
| 08D0004D | W_HeavyBowgun_077 | 08D00007 | H_Bg033 | 61 | Pukei Launcher II |
| 08D0004E | W_HeavyBowgun_078 | 08D00007 | H_Bg033 | 62 | Venomhail |
| 08D0004F | W_HeavyBowgun_079 | 08D0001C | H_Bg070 | 41 | Rock Eater I |
| 08D00050 | W_HeavyBowgun_080 | 08D0001C | H_Bg070 | 42 | Rock Eater II |
| 08D00051 | W_HeavyBowgun_081 | 08D0001C | H_Bg070 | 43 | Earth Eater |
| 08D00052 | W_HeavyBowgun_082 | 08D0001D | H_Bg071 | 17 | Queen's Longfire I |
| 08D00053 | W_HeavyBowgun_083 | 08D0001D | H_Bg071 | 18 | Queen's Longfire II |
| 08D00054 | W_HeavyBowgun_084 | 08D0001D | H_Bg071 | 19 | Queen's Farflier |
| 08D00055 | W_HeavyBowgun_085 | 08D0001E | H_Bg072 | 20 | Guerrera Cannon I |
| 08D00056 | W_HeavyBowgun_086 | 08D0001E | H_Bg072 | 21 | Guerrera Cannon II |
| 08D00057 | W_HeavyBowgun_087 | 08D0001E | H_Bg072 | 22 | Thorn Cannon |
| 08D00058 | W_HeavyBowgun_088 | 08D00008 | H_Bg035 | 69 | Kadachi Cannon I |
| 08D00059 | W_HeavyBowgun_089 | 08D00008 | H_Bg035 | 70 | Kadachi Cannon II |
| 08D0005A | W_HeavyBowgun_090 | 08D00008 | H_Bg035 | 71 | Kadachi Raijodo |
| 08D0005B | W_HeavyBowgun_091 | 08D00002 | H_Bg005 | 35 | Flammenkanone I |
| 08D0005C | W_HeavyBowgun_092 | 08D00002 | H_Bg005 | 36 | Flammenkanone II |
| 08D0005D | W_HeavyBowgun_093 | 08D00002 | H_Bg005 | 37 | Gnashing Flammenkanone |
| 08D0005E | W_HeavyBowgun_094 | 08D00004 | H_Bg014 | 75 | Hidden Gambit I |
| 08D0005F | W_HeavyBowgun_095 | 08D00004 | H_Bg014 | 76 | Hidden Gambit II |
| 08D00060 | W_HeavyBowgun_096 | 08D00004 | H_Bg014 | 77 | Baleful Night |
| 08D00061 | W_HeavyBowgun_097 | 08D0001F | H_Bg074 | 10 | Cirrus Blaster I |
| 08D00062 | W_HeavyBowgun_098 | 08D0001F | H_Bg074 | 11 | Cirrus Blaster II |
| 08D00063 | W_HeavyBowgun_099 | 08D0001F | H_Bg074 | 12 | Mountainous Roar |
| 08D00064 | W_HeavyBowgun_100 | 08D00020 | H_Bg075 | 26 | Usurper's Tremor I |
| 08D00065 | W_HeavyBowgun_101 | 08D00020 | H_Bg075 | 27 | Usurper's Tremor II |
| 08D00066 | W_HeavyBowgun_102 | 08D00020 | H_Bg075 | 28 | Despot's Paroxysm |
| 08D00067 | W_HeavyBowgun_103 | 08D00003 | H_Bg013 | 7 | Tigrex Howl I |
| 08D00068 | W_HeavyBowgun_104 | 08D00003 | H_Bg013 | 8 | Tigrex Howl II |
| 08D00069 | W_HeavyBowgun_105 | 08D00003 | H_Bg013 | 9 | Tigrex Skull |
| 08D0006A | W_HeavyBowgun_106 | 08D00001 | H_Bg002 | 66 | Dual Threat I |
| 08D0006B | W_HeavyBowgun_107 | 08D00001 | H_Bg002 | 67 | Dual Threat II |
| 08D0006C | W_HeavyBowgun_108 | 08D00001 | H_Bg002 | 68 | Diablazooka |
| 08D0006D | W_HeavyBowgun_109 | 08D00021 | H_Bg077 | 95 | Daora's Delphinidae I |
| 08D0006E | W_HeavyBowgun_110 | 08D00021 | H_Bg077 | 96 | Daora Grande |
| 08D0006F | W_HeavyBowgun_111 | 08D00000 | H_Bg001 | 97 | Teostra's Artillery I |
| 08D00070 | W_HeavyBowgun_112 | 08D00000 | H_Bg001 | 98 | Teostra's Flames |
| 08D00071 | W_HeavyBowgun_113 | 08D00022 | H_Bg078 | 99 | Kamaeleon I |
| 08D00072 | W_HeavyBowgun_114 | 08D00022 | H_Bg078 | 100 | Veiled Kamaeleon |
| 08D00073 | W_HeavyBowgun_115 | 08D00025 | H_Bg082 | 87 | Rajang Shooter I |
| 08D00074 | W_HeavyBowgun_116 | 08D00025 | H_Bg082 | 88 | Rajang Shooter II |
| 08D00075 | W_HeavyBowgun_117 | 08D00025 | H_Bg082 | 89 | Rajang's Rage |
| 08D00076 | W_HeavyBowgun_118 | 08D00026 | H_Bg083 | 118 | Rampage H. Bowgun IV |
| 08D00077 | W_HeavyBowgun_119 | 08D00026 | H_Bg083 | 119 | Rampage H. Bowgun V |

# Bow
| Weapon ID | Enum Name | Model ID | Model Name | Sort ID | Weapon Name |
| --- | --- | --- | --- | --- | --- |
| 08E00000 | W_Bow_000 | 08E00011 | Bow057 | 36 | Hunter's Stoutbow I |
| 08E00001 | W_Bow_001 | 08E00011 | Bow057 | 37 | Hunter's Stoutbow II |
| 08E00002 | W_Bow_002 | 08E00011 | Bow057 | 38 | Hunter's Proudbow |
| 08E00003 | W_Bow_003 | 08E00012 | Bow058 | 42 | Crystalline Flower I |
| 08E00004 | W_Bow_004 | 08E00012 | Bow058 | 43 | Crystalline Flower II |
| 08E00005 | W_Bow_005 | 08E00012 | Bow058 | 44 | Heaven's Glaze |
| 08E00006 | W_Bow_006 | 08E00005 | Bow019 | 33 | Iron Bow I |
| 08E00007 | W_Bow_007 | 08E00005 | Bow019 | 34 | Iron Bow II |
| 08E00008 | W_Bow_008 | 08E00005 | Bow019 | 35 | Steel Bow |
| 08E00009 | W_Bow_009 | 08E00013 | Bow059 | 39 | Yekla Arc I |
| 08E0000A | W_Bow_010 | 08E00013 | Bow059 | 40 | Yekla Arc II |
| 08E0000B | W_Bow_011 | 08E00013 | Bow059 | 41 | Herald's Battlebow |
| 08E0000C | W_Bow_012 | 08E00003 | Bow007 | 63 | Hunter's Bow I |
| 08E0000D | W_Bow_013 | 08E00003 | Bow007 | 64 | Hunter's Bow II |
| 08E0000E | W_Bow_014 | 08E00003 | Bow007 | 65 | Master Hunter's Bow |
| 08E0000F | W_Bow_015 | 08E00006 | Bow022 | 60 | Bone Gun I |
| 08E00010 | W_Bow_016 | 08E00006 | Bow022 | 61 | Bone Gun II |
| 08E00011 | W_Bow_017 | 08E00006 | Bow022 | 62 | Hyper Bone Gun |
| 08E00012 | W_Bow_018 | 08E0000A | Bow050 | 1 | Kamura Iron Bow I |
| 08E00013 | W_Bow_019 | 08E0000A | Bow050 | 2 | Kamura Iron Bow II |
| 08E00014 | W_Bow_020 | 08E0000A | Bow050 | 3 | Kamura Iron Bow III |
| 08E00015 | W_Bow_021 | 08E0000A | Bow050 | 4 | Kamura Iron Bow IV |
| 08E00016 | W_Bow_022 | 08E0000A | Bow050 | 5 | Kamura Iron Bow V |
| 08E00017 | W_Bow_023 | 08E0000A | Bow050 | 6 | Kamura Ninja Bow |
| 08E00018 | W_Bow_024 | 08E0002E | Bow088 | 140 | Rampage Bow I |
| 08E00019 | W_Bow_025 | 08E0002E | Bow088 | 141 | Rampage Bow II |
| 08E0001A | W_Bow_026 | 08E0002E | Bow088 | 142 | Rampage Bow III |
| 08E0001B | W_Bow_027 | 08E0002E | Bow088 | 145 | Rampage Bow S |
| 08E0001C | W_Bow_028 | 08E00014 | Bow060 | 125 | Morsel Bowfish I |
| 08E0001D | W_Bow_029 | 08E00014 | Bow060 | 126 | Morsel Bowfish II |
| 08E0001E | W_Bow_030 | 08E00014 | Bow060 | 127 | Ample Bowfish |
| 08E0001F | W_Bow_031 | 08E00016 | Bow062 | 128 | Felyne Bow I |
| 08E00020 | W_Bow_032 | 08E00016 | Bow062 | 129 | Felyne Bow II |
| 08E00021 | W_Bow_033 | 08E00016 | Bow062 | 130 | Felyne Trickbow |
| 08E00022 | W_Bow_034 | 08E00015 | Bow061 | 131 | Chaos Bow I |
| 08E00023 | W_Bow_035 | 08E00015 | Bow061 | 132 | Chaos Bow II |
| 08E00024 | W_Bow_036 | 08E00015 | Bow061 | 133 | Chaotic Rapture |
| 08E00025 | W_Bow_037 | 08E0002D | Bow087 | 134 | Ivory Bow I |
| 08E00026 | W_Bow_038 | 08E0002D | Bow087 | 135 | Ivory Bow II |
| 08E00027 | W_Bow_039 | 08E0002D | Bow087 | 136 | Frozen Bow |
| 08E00028 | W_Bow_040 | 08E00017 | Bow063 | 137 | Arachnid Bow I |
| 08E00029 | W_Bow_041 | 08E00017 | Bow063 | 138 | Arachnid Bow II |
| 08E0002A | W_Bow_042 | 08E00017 | Bow063 | 139 | Arachnid Silverstring |
| 08E0002B | W_Bow_043 | 08E0000B | Bow051 | 13 | Dawn Ray Bow I |
| 08E0002C | W_Bow_044 | 08E0000B | Bow051 | 14 | Dawn Ray Bow II |
| 08E0002D | W_Bow_045 | 08E0000B | Bow051 | 15 | Summit's Grand Glow |
| 08E0002E | W_Bow_046 | 08E0000C | Bow052 | 103 | Sinister Bow I |
| 08E0002F | W_Bow_047 | 08E0000C | Bow052 | 104 | Sinister Bow II |
| 08E00030 | W_Bow_048 | 08E0000C | Bow052 | 105 | Sinister Soulpiercer |
| 08E00031 | W_Bow_049 | 08E0000D | Bow053 | 45 | Mud Shot I |
| 08E00032 | W_Bow_050 | 08E0000D | Bow053 | 46 | Mud Shot II |
| 08E00033 | W_Bow_051 | 08E0000D | Bow053 | 47 | Hail of Mud |
| 08E00034 | W_Bow_052 | 08E0000E | Bow054 | 7 | Weaver of Flame I |
| 08E00035 | W_Bow_053 | 08E0000E | Bow054 | 8 | Weaver of Flame II |
| 08E00036 | W_Bow_054 | 08E0000E | Bow054 | 9 | Araknatorch |
| 08E00037 | W_Bow_055 | 08E0000F | Bow055 | 112 | Azure Elder Bow I |
| 08E00038 | W_Bow_056 | 08E0000F | Bow055 | 113 | Azure Elder Bow II |
| 08E00039 | W_Bow_057 | 08E0000F | Bow055 | 114 | Abyssal Gale Bow |
| 08E0003A | W_Bow_058 | 08E00010 | Bow056 | 115 | Thunderbolt Bow I |
| 08E0003B | W_Bow_059 | 08E00010 | Bow056 | 116 | Abyssal Storm Bow |
| 08E0003C | W_Bow_060 | 08E0002C | Bow086 | 123 | Redwing Bow I |
| 08E0003D | W_Bow_061 | 08E0002C | Bow086 | 124 | Reddnaught Dragon Arc |
| 08E0003E | W_Bow_062 | 08E00018 | Bow064 | 88 | Arko Nulo I |
| 08E0003F | W_Bow_063 | 08E00018 | Bow064 | 89 | Arko Nulo II |
| 08E00040 | W_Bow_064 | 08E00018 | Bow064 | 90 | Arko Unu |
| 08E00041 | W_Bow_065 | 08E0001B | Bow067 | 97 | Arko Nulo Red I |
| 08E00042 | W_Bow_066 | 08E0001B | Bow067 | 98 | Arko Nulo Red II |
| 08E00043 | W_Bow_067 | 08E0001B | Bow067 | 99 | Arko Unu Red |
| 08E00044 | W_Bow_068 | 08E00019 | Bow065 | 94 | Arko Nulo Yellow I |
| 08E00045 | W_Bow_069 | 08E00019 | Bow065 | 95 | Arko Nulo Yellow II |
| 08E00046 | W_Bow_070 | 08E00019 | Bow065 | 96 | Arko Unu Yellow |
| 08E00047 | W_Bow_071 | 08E0001A | Bow066 | 100 | Arko Nulo White I |
| 08E00048 | W_Bow_072 | 08E0001A | Bow066 | 101 | Arko Nulo White II |
| 08E00049 | W_Bow_073 | 08E0001A | Bow066 | 102 | Arko Unu White |
| 08E0004A | W_Bow_074 | 08E0001C | Bow068 | 91 | Arko Nulo Black I |
| 08E0004B | W_Bow_075 | 08E0001C | Bow068 | 92 | Arko Nulo Black II |
| 08E0004C | W_Bow_076 | 08E0001C | Bow068 | 93 | Arko Unu Black |
| 08E0004D | W_Bow_077 | 08E0001D | Bow069 | 106 | Kelbi Stingshot I |
| 08E0004E | W_Bow_078 | 08E0001D | Bow069 | 107 | Kelbi Stingshot II |
| 08E0004F | W_Bow_079 | 08E0001D | Bow069 | 108 | Kelbi Strongshot |
| 08E00050 | W_Bow_080 | 08E0001E | Bow070 | 30 | Arzuros Bow I |
| 08E00051 | W_Bow_081 | 08E0001E | Bow070 | 31 | Arzuros Bow II |
| 08E00052 | W_Bow_082 | 08E0001E | Bow070 | 32 | Arzuros' Honeypot |
| 08E00053 | W_Bow_083 | 08E0001F | Bow071 | 85 | Baggi Bow I |
| 08E00054 | W_Bow_084 | 08E0001F | Bow071 | 86 | Baggi Bow II |
| 08E00055 | W_Bow_085 | 08E0001F | Bow071 | 87 | Hypnoshot |
| 08E00056 | W_Bow_086 | 08E00020 | Bow072 | 27 | Wroggi Revolver I |
| 08E00057 | W_Bow_087 | 08E00020 | Bow072 | 28 | Wroggi Revolver II |
| 08E00058 | W_Bow_088 | 08E00020 | Bow072 | 29 | Hoodwinker's Revolver |
| 08E00059 | W_Bow_089 | 08E00007 | Bow032 | 54 | Kulu's Flight I |
| 08E0005A | W_Bow_090 | 08E00007 | Bow032 | 55 | Kulu's Flight II |
| 08E0005B | W_Bow_091 | 08E00007 | Bow032 | 56 | Kulu Piercer |
| 08E0005C | W_Bow_092 | 08E00021 | Bow073 | 81 | Spongia Bow I |
| 08E0005D | W_Bow_093 | 08E00021 | Bow073 | 82 | Spongia Bow II |
| 08E0005E | W_Bow_094 | 08E00021 | Bow073 | 83 | Spongia Bow III |
| 08E0005F | W_Bow_095 | 08E00021 | Bow073 | 84 | Porifera Bow |
| 08E00060 | W_Bow_096 | 08E00022 | Bow074 | 57 | Khezu Bow I |
| 08E00061 | W_Bow_097 | 08E00022 | Bow074 | 58 | Khezu Bow II |
| 08E00062 | W_Bow_098 | 08E00022 | Bow074 | 59 | Galvanized Core |
| 08E00063 | W_Bow_099 | 08E00008 | Bow035 | 75 | Pukei Bow I |
| 08E00064 | W_Bow_100 | 08E00008 | Bow035 | 76 | Pukei Bow II |
| 08E00065 | W_Bow_101 | 08E00008 | Bow035 | 77 | Venomtongue Strike |
| 08E00066 | W_Bow_102 | 08E00023 | Bow075 | 48 | Queen Blaster I |
| 08E00067 | W_Bow_103 | 08E00023 | Bow075 | 49 | Queen Blaster II |
| 08E00068 | W_Bow_104 | 08E00023 | Bow075 | 50 | Queen's Melody |
| 08E00069 | W_Bow_105 | 08E00024 | Bow076 | 23 | Ice Crest I |
| 08E0006A | W_Bow_106 | 08E00024 | Bow076 | 24 | Ice Crest II |
| 08E0006B | W_Bow_107 | 08E00024 | Bow076 | 25 | Ice Crest III |
| 08E0006C | W_Bow_108 | 08E00024 | Bow076 | 26 | Edelweiss |
| 08E0006D | W_Bow_109 | 08E00002 | Bow006 | 19 | Kadachi Strikebow I |
| 08E0006E | W_Bow_110 | 08E00002 | Bow006 | 20 | Kadachi Strikebow II |
| 08E0006F | W_Bow_111 | 08E00002 | Bow006 | 21 | Kadachi Strikebow III |
| 08E00070 | W_Bow_112 | 08E00002 | Bow006 | 22 | Flying Kadachi Striker |
| 08E00071 | W_Bow_113 | 08E00009 | Bow038 | 78 | Flammenbogen I |
| 08E00072 | W_Bow_114 | 08E00009 | Bow038 | 79 | Flammenbogen II |
| 08E00073 | W_Bow_115 | 08E00009 | Bow038 | 80 | Flaming Rage Bow |
| 08E00074 | W_Bow_116 | 08E00004 | Bow014 | 16 | Hidden Bow I |
| 08E00075 | W_Bow_117 | 08E00004 | Bow014 | 17 | Hidden Bow II |
| 08E00076 | W_Bow_118 | 08E00004 | Bow014 | 18 | Night Flight |
| 08E00077 | W_Bow_119 | 08E00025 | Bow078 | 10 | Blessed Rain I |
| 08E00078 | W_Bow_120 | 08E00025 | Bow078 | 11 | Blessed Rain II |
| 08E00079 | W_Bow_121 | 08E00025 | Bow078 | 12 | Heaven's Manna |
| 08E0007A | W_Bow_122 | 08E00026 | Bow079 | 51 | Prominence Bow I |
| 08E0007B | W_Bow_123 | 08E00026 | Bow079 | 52 | Prominence Bow II |
| 08E0007C | W_Bow_124 | 08E00026 | Bow079 | 53 | Dark Filament |
| 08E0007D | W_Bow_125 | 08E00027 | Bow080 | 72 | Usurper's Rumble I |
| 08E0007E | W_Bow_126 | 08E00027 | Bow080 | 73 | Usurper's Rumble II |
| 08E0007F | W_Bow_127 | 08E00027 | Bow080 | 74 | Despot's Earlybolt |
| 08E00080 | W_Bow_128 | 08E00028 | Bow081 | 66 | Tigrex Archer I |
| 08E00081 | W_Bow_129 | 08E00028 | Bow081 | 67 | Tigrex Archer II |
| 08E00082 | W_Bow_130 | 08E00028 | Bow081 | 68 | Tigrex Whisker |
| 08E00083 | W_Bow_131 | 08E00001 | Bow002 | 69 | Diablos Coilbender I |
| 08E00084 | W_Bow_132 | 08E00001 | Bow002 | 70 | Diablos Coilbender II |
| 08E00085 | W_Bow_133 | 08E00001 | Bow002 | 71 | Tyrant Bow |
| 08E00086 | W_Bow_134 | 08E00000 | Bow001 | 117 | Icesteel Bow I |
| 08E00087 | W_Bow_135 | 08E00000 | Bow001 | 118 | Daora's Sagittarii |
| 08E00088 | W_Bow_136 | 08E00029 | Bow082 | 119 | Bow of Hope & Valor I |
| 08E00089 | W_Bow_137 | 08E00029 | Bow082 | 120 | Bow of Light & Courage |
| 08E0008A | W_Bow_138 | 08E0002A | Bow083 | 121 | Genie's Grimoire I |
| 08E0008B | W_Bow_139 | 08E0002A | Bow083 | 122 | Demon's Guidance |
| 08E0008C | W_Bow_140 | 08E0002B | Bow084 | 109 | Beast Thunderbow I |
| 08E0008D | W_Bow_141 | 08E0002B | Bow084 | 110 | Beast Thunderbow II |
| 08E0008E | W_Bow_142 | 08E0002B | Bow084 | 111 | Beastking Thunderbow |
| 08E0008F | W_Bow_143 | 08E0002E | Bow088 | 143 | Rampage Bow IV |
| 08E00090 | W_Bow_144 | 08E0002E | Bow088 | 144 | Rampage Bow V |

# Kinsect
| Weapon ID | Enum Name | Model ID | Model Name | Sort ID | Weapon Name |
| --- | --- | --- | --- | --- | --- |
| 08F00000 | W_Insect_000 | 08F00000 | IG_Ins001 | 0 | Culldrone |
| 08F00001 | W_Insect_001 | 08F0000B | IG_Ins012 | 1 | Mauldrone |
| 08F00002 | W_Insect_002 | 08F00002 | IG_Ins003 | 2 | Alucanid |
| 08F00003 | W_Insect_003 | 08F0000D | IG_Ins014 | 3 | Foebeetle |
| 08F00004 | W_Insect_004 | 08F00005 | IG_Ins006 | 4 | Rigiprayne |
| 08F00005 | W_Insect_005 | 08F00010 | IG_Ins017 | 5 | Ladytarge |
| 08F00006 | W_Insect_006 | 08F00008 | IG_Ins009 | 6 | Windchopper |
| 08F00007 | W_Insect_007 | 08F00013 | IG_Ins020 | 7 | Gullshad |
| 08F00008 | W_Insect_008 | 08F00003 | IG_Ins004 | 8 | Monarch Alucanid |
| 08F00009 | W_Insect_009 | 08F0000E | IG_Ins015 | 9 | Carnage Beetle |
| 08F0000A | W_Insect_010 | 08F00004 | IG_Ins005 | 10 | Empresswing |
| 08F0000B | W_Insect_011 | 08F0000F | IG_Ins016 | 11 | Bonnetfille |
| 08F0000C | W_Insect_012 | 08F00006 | IG_Ins007 | 12 | Cancadaman |
| 08F0000D | W_Insect_013 | 08F00011 | IG_Ins018 | 13 | Ladypavise |
| 08F0000E | W_Insect_014 | 08F00007 | IG_Ins008 | 14 | Fiddlebrix |
| 08F0000F | W_Insect_015 | 08F00012 | IG_Ins019 | 15 | Arkmaiden |
| 08F00010 | W_Insect_016 | 08F00009 | IG_Ins010 | 16 | Grancathar |
| 08F00011 | W_Insect_017 | 08F00014 | IG_Ins021 | 17 | Bullshroud |
| 08F00012 | W_Insect_018 | 08F0000A | IG_Ins011 | 18 | Pseudocath |
| 08F00013 | W_Insect_019 | 08F00015 | IG_Ins022 | 19 | Whispervesp |
