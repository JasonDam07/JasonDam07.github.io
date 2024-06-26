const stations = [
  {"Station Name":"Chinook","latitude":"50.996807857737046","coordinates":[50.996807857737046, -114.06580853211398],"longitude":"-114.06580853211398"},
  {"Station Name":"Zoo","latitude":"51.04736922517619","coordinates":[51.04736922517619, -114.02485607969437],"longitude":"-114.02485607969437"},
  {"Station Name":"6 St SW","latitude":"51.04677318388097","coordinates":[51.04677318388097, -114.07508481556182],"longitude":"-114.07508481556182"},
  {"Station Name":"Sunalta","latitude":"51.04481812949617","coordinates":[51.04481812949617, -114.09913462976633],"longitude":"-114.09913462976633"},
  {"Station Name":"Victoria Park / Stampede","latitude":"51.03858013717659","coordinates":[51.03858013717659, -114.05830814657534],"longitude":"-114.05830814657534"},
  {"Station Name":"Saddletowne","latitude":"51.12571472192382","coordinates":[51.12571472192382, -113.94815352696301],"longitude":"-113.94815352696301"},
  {"Station Name":"Dalhousie","latitude":"51.10328380288327","coordinates":[51.10328380288327, -114.16052538044535],"longitude":"-114.16052538044535"},
  {"Station Name":"3 St SW","latitude":"51.046612988052004","coordinates":[51.046612988052004, -114.06926247027441],"longitude":"-114.06926247027441"},
  {"Station Name":"Marlborough","latitude":"51.05842602961393","coordinates":[51.05842602961393, -113.98171628708154],"longitude":"-113.98171628708154"},
  {"Station Name":"SAIT/ACAD/Jubilee","latitude":"51.06313351902383","coordinates":[51.06313351902383, -114.0913130200881],"longitude":"-114.0913130200881"},
  {"Station Name":"Crowfoot","latitude":"51.12242644130232","coordinates":[51.12242644130232, -114.20655223179453],"longitude":"-114.20655223179453"},
  {"Station Name":"7 St SW","latitude":"51.04698786728556","coordinates":[51.04698786728556, -114.0774250862143],"longitude":"-114.0774250862143"},
  {"Station Name":"Rundle","latitude":"51.07586028813515","coordinates":[51.07586028813515, -113.98172512162708],"longitude":"-113.98172512162708"},
  {"Station Name":"Somerset-Bridlewood","latitude":"50.89908810767993","coordinates":[50.89908810767993, -114.06900094994674],"longitude":"-114.06900094994674"},
  {"Station Name":"Tuscany","latitude":"51.13447053235643","coordinates":[51.13447053235643, -114.23555985757973],"longitude":"-114.23555985757973"},
  {"Station Name":"Canyon Meadows","latitude":"50.93591535755949","coordinates":[50.93591535755949, -114.06979214972121],"longitude":"-114.06979214972121"},
  {"Station Name":"Whitehorn","latitude":"51.085955735215116","coordinates":[51.085955735215116, -113.98174266231439],"longitude":"-113.98174266231439"},
  {"Station Name":"Shaganappi Point","latitude":"51.04168349701066","coordinates":[51.04168349701066, -114.12500719441424],"longitude":"-114.12500719441424"},
  {"Station Name":"Centre St","latitude":"51.04637077825147","coordinates":[51.04637077825147, -114.06166819750008],"longitude":"-114.06166819750008"},
  {"Station Name":"Shawnessy","latitude":"50.91057297554394","coordinates":[50.91057297554394, -114.07056576297717],"longitude":"-114.07056576297717"},
  {"Station Name":"1 St SW","latitude":"51.046584234228845","coordinates":[51.046584234228845, -114.06409244380104],"longitude":"-114.06409244380104"},
  {"Station Name":"Lions Park","latitude":"51.06504084686011","coordinates":[51.06504084686011, -114.10359107888131],"longitude":"-114.10359107888131"},
  {"Station Name":"8 St SW","latitude":"51.046919720107205","coordinates":[51.046919720107205, -114.07995618958944],"longitude":"-114.07995618958944"},
  {"Station Name":"Martindale","latitude":"51.11770533890071","coordinates":[51.11770533890071, -113.96790238900381],"longitude":"-113.96790238900381"},
  {"Station Name":"Anderson","latitude":"50.95431654642343","coordinates":[50.95431654642343, -114.07451878197968],"longitude":"-114.07451878197968"},
  {"Station Name":"Fish Creek - Lacombe","latitude":"50.923161542922514","coordinates":[50.923161542922514, -114.07305641404044],"longitude":"-114.07305641404044"},
  {"Station Name":"4 St SW","latitude":"51.04683663476806","coordinates":[51.04683663476806, -114.07266762196352],"longitude":"-114.07266762196352"},
  {"Station Name":"City Hall WB","latitude":"51.04637889649759","coordinates":[51.04637889649759, -114.05700283229031],"longitude":"-114.05700283229031"},
  {"Station Name":"Downtown West - Kerby Station","latitude":"51.04712631203708","coordinates":[51.04712631203708, -114.08724370638349],"longitude":"-114.08724370638349"},
  {"Station Name":"Franklin","latitude":"51.04753317237232","coordinates":[51.04753317237232, -113.99389622050779],"longitude":"-113.99389622050779"},
  {"Station Name":"45 St SW","latitude":"51.03796046833452","coordinates":[51.03796046833452, -114.15419470288599],"longitude":"-114.15419470288599"},
  {"Station Name":"City Hall EB","latitude":"51.0462137487903","coordinates":[51.0462137487903, -114.05699923973778],"longitude":"-114.05699923973778"},
  {"Station Name":"39 Avenue","latitude":"51.017567029687726","coordinates":[51.017567029687726, -114.06138310231773],"longitude":"-114.06138310231773"},
  {"Station Name":"University","latitude":"51.08000226784484","coordinates":[51.08000226784484, -114.12290918356616],"longitude":"-114.12290918356616"},
  {"Station Name":"Sirocco","latitude":"51.03837970398405","coordinates":[51.03837970398405, -114.16904423715047],"longitude":"-114.16904423715047"},
  {"Station Name":"Sunnyside","latitude":"51.05626036973093","coordinates":[51.05626036973093, -114.08439246737201],"longitude":"-114.08439246737201"},
  {"Station Name":"Downtown West - Kerby Station","latitude":"51.04723334280586","coordinates":[51.04723334280586, -114.08724862368886],"longitude":"-114.08724862368886"},
  {"Station Name":"Erlton / Stampede","latitude":"51.032060142857866","coordinates":[51.032060142857866, -114.05890028902643],"longitude":"-114.05890028902643"},
  {"Station Name":"69 St SW","latitude":"51.037645115945246","coordinates":[51.037645115945246, -114.18760937033547],"longitude":"-114.18760937033547"},
  {"Station Name":"Barlow / Max Bell","latitude":"51.04549575173873","coordinates":[51.04549575173873, -114.00661321060373],"longitude":"-114.00661321060373"},
  {"Station Name":"Southland","latitude":"50.963571031655796","coordinates":[50.963571031655796, -114.07656048584987],"longitude":"-114.07656048584987"},
  {"Station Name":"Westbrook","latitude":"51.040197136375255","coordinates":[51.040197136375255, -114.13636185466696],"longitude":"-114.13636185466696"},
  {"Station Name":"McKnight Westwinds","latitude":"51.10922401574954","coordinates":[51.10922401574954, -113.97565289724812],"longitude":"-113.97565289724812"},
  {"Station Name":"Brentwood","latitude":"51.087047352883225","coordinates":[51.087047352883225, -114.13180336169056],"longitude":"-114.13180336169056"},
  {"Station Name":"Bridgeland / Memorial","latitude":"51.04904970186535","coordinates":[51.04904970186535, -114.04037758242885],"longitude":"-114.04037758242885"},
  {"Station Name":"Heritage","latitude":"50.97798714179343","coordinates":[50.97798714179343, -114.07427150387718],"longitude":"-114.07427150387718"},
  {"Station Name":"Banff Trail","latitude":"51.07095409401515","coordinates":[51.07095409401515, -114.11555633412519],"longitude":"-114.11555633412519"}
];