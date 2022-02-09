"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerFlightsSampleData = registerFlightsSampleData;
exports.registerFlightsSampleDataLink = registerFlightsSampleDataLink;

var _i18n = require("@kbn/i18n");

var _constants = require("../../common/constants");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const datasetId = 'flights';
const wsState = {
  selectedFields: [{
    name: 'Carrier',
    hopSize: 5,
    lastValidHopSize: 5,
    color: '#CE0060',
    selected: true,
    iconClass: 'fa-plane'
  }, {
    name: 'Dest',
    hopSize: 5,
    lastValidHopSize: 5,
    color: '#38007E',
    selected: true,
    iconClass: 'fa-map-marker'
  }, {
    name: 'DestWeather',
    hopSize: 5,
    lastValidHopSize: 5,
    color: '#34130C',
    selected: true,
    iconClass: 'fa-cube'
  }],
  blocklist: [],
  vertices: [{
    x: 324.55695700802687,
    y: 346.73294548497137,
    label: 'Sydney Kingsford Smith International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Sydney Kingsford Smith International Airport',
    parent: null,
    size: 15
  }, {
    x: 438.93290232680494,
    y: 677.3830617564242,
    label: 'Charles de Gaulle International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Charles de Gaulle International Airport',
    parent: null,
    size: 15
  }, {
    x: 499.6180566078833,
    y: -5.098830831803902,
    label: 'Bologna Guglielmo Marconi Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Bologna Guglielmo Marconi Airport',
    parent: null,
    size: 15
  }, {
    x: 389.5752820793805,
    y: 386.37176544482463,
    label: 'Rain',
    color: '#34130C',
    field: 'DestWeather',
    term: 'Rain',
    parent: null,
    size: 15
  }, {
    x: 490.9417508188848,
    y: 391.65617271236334,
    label: 'Milano Linate Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Milano Linate Airport',
    parent: null,
    size: 15
  }, {
    x: 614.188166571076,
    y: 572.9459065381061,
    label: 'Cloudy',
    color: '#34130C',
    field: 'DestWeather',
    term: 'Cloudy',
    parent: null,
    size: 15
  }, {
    x: 330.387175680331,
    y: 695.0441997424184,
    label: 'Guangzhou Baiyun International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Guangzhou Baiyun International Airport',
    parent: null,
    size: 15
  }, {
    x: 379.9660844804916,
    y: 638.9082566905925,
    label: 'Ottawa Macdonald-Cartier International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Ottawa Macdonald-Cartier International Airport',
    parent: null,
    size: 15
  }, {
    x: 57.947780190100346,
    y: 360.393931221208,
    label: 'Hail',
    color: '#34130C',
    field: 'DestWeather',
    term: 'Hail',
    parent: null,
    size: 15
  }, {
    x: 397.4430051185168,
    y: 504.8512181744145,
    label: 'Logstash Airways',
    color: '#CE0060',
    field: 'Carrier',
    term: 'Logstash Airways',
    parent: null,
    size: 15
  }, {
    x: 424.42756723778075,
    y: 354.33078205093506,
    label: 'Sunny',
    color: '#34130C',
    field: 'DestWeather',
    term: 'Sunny',
    parent: null,
    size: 15
  }, {
    x: 254.09885556506697,
    y: 434.3607906063371,
    label: 'Norfolk International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Norfolk International Airport',
    parent: null,
    size: 15
  }, {
    x: 568.6877204517741,
    y: 340.3641831872856,
    label: 'Heavy Fog',
    color: '#34130C',
    field: 'DestWeather',
    term: 'Heavy Fog',
    parent: null,
    size: 15
  }, {
    x: 429.8163554957372,
    y: -28.901855935511612,
    label: 'Dublin Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Dublin Airport',
    parent: null,
    size: 15
  }, {
    x: 420.5639687132341,
    y: 247.7760184038354,
    label: 'JetBeats',
    color: '#CE0060',
    field: 'Carrier',
    term: 'JetBeats',
    parent: null,
    size: 15
  }, {
    x: 384.3810911831613,
    y: 437.9949106467699,
    label: 'Clear',
    color: '#34130C',
    field: 'DestWeather',
    term: 'Clear',
    parent: null,
    size: 15
  }, {
    x: 493.9944277688558,
    y: 431.38149316403536,
    label: 'Kempegowda International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Kempegowda International Airport',
    parent: null,
    size: 15
  }, {
    x: 595.7619057497752,
    y: 497.83788593573075,
    label: 'Helsinki Vantaa Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Helsinki Vantaa Airport',
    parent: null,
    size: 15
  }, {
    x: 185.93617979891062,
    y: 422.59954588194796,
    label: 'Falcone Borsellino Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Falcone Borsellino Airport',
    parent: null,
    size: 15
  }, {
    x: 310.7985722936307,
    y: 565.8106567909418,
    label: 'Damaging Wind',
    color: '#34130C',
    field: 'DestWeather',
    term: 'Damaging Wind',
    parent: null,
    size: 15
  }, {
    x: 226.7458591666634,
    y: 107.70616617436147,
    label: 'Thunder & Lightning',
    color: '#34130C',
    field: 'DestWeather',
    term: 'Thunder & Lightning',
    parent: null,
    size: 15
  }, {
    x: 841.0362982575906,
    y: 271.86719405075036,
    label: 'Turin Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Turin Airport',
    parent: null,
    size: 15
  }, {
    x: 607.8580597431672,
    y: 674.8142192796432,
    label: 'ES-Air',
    color: '#CE0060',
    field: 'Carrier',
    term: 'ES-Air',
    parent: null,
    size: 15
  }, {
    x: 147.48792054443953,
    y: 564.0675506645817,
    label: 'Philadelphia International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Philadelphia International Airport',
    parent: null,
    size: 15
  }, {
    x: 195.87484752441807,
    y: 187.0207407631843,
    label: 'Mariscal Sucre International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Mariscal Sucre International Airport',
    parent: null,
    size: 15
  }, {
    x: 284.28484320054537,
    y: 126.299295414221,
    label: 'Kibana Airlines',
    color: '#CE0060',
    field: 'Carrier',
    term: 'Kibana Airlines',
    parent: null,
    size: 15
  }, {
    x: 194.4295924748303,
    y: 272.79043826611775,
    label: 'Indianapolis International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Indianapolis International Airport',
    parent: null,
    size: 15
  }, {
    x: 465.97943124701703,
    y: 142.61050933505095,
    label: 'Spokane International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Spokane International Airport',
    parent: null,
    size: 15
  }, {
    x: 563.1081895874394,
    y: 461.0383551052199,
    label: 'Savannah Hilton Head International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Savannah Hilton Head International Airport',
    parent: null,
    size: 15
  }, {
    x: 174.0117366992591,
    y: 221.18597939550128,
    label: 'Olenya Air Base',
    color: '#38007E',
    field: 'Dest',
    term: 'Olenya Air Base',
    parent: null,
    size: 15
  }, {
    x: -148.89474582077094,
    y: 464.5050002661098,
    label: "Xi'an Xianyang International Airport",
    color: '#38007E',
    field: 'Dest',
    term: "Xi'an Xianyang International Airport",
    parent: null,
    size: 15
  }, {
    x: 541.411089567981,
    y: 580.3869624463574,
    label: 'Kansas City International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Kansas City International Airport',
    parent: null,
    size: 15
  }, {
    x: -162.65034295458753,
    y: 413.712547647303,
    label: 'Brisbane International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Brisbane International Airport',
    parent: null,
    size: 15
  }, {
    x: -116.84605252338424,
    y: 517.8977089765682,
    label: 'Cape Town International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Cape Town International Airport',
    parent: null,
    size: 15
  }, {
    x: 596.9667234907166,
    y: 194.18359952998938,
    label: 'Wichita Mid Continent Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Wichita Mid Continent Airport',
    parent: null,
    size: 15
  }, {
    x: 500.4899840585019,
    y: 177.09233549147297,
    label: 'Ministro Pistarini International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Ministro Pistarini International Airport',
    parent: null,
    size: 15
  }, {
    x: 826.9908015391406,
    y: 416.75687496452565,
    label: 'OR Tambo International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'OR Tambo International Airport',
    parent: null,
    size: 15
  }, {
    x: 555.157034647214,
    y: 166.9646207668324,
    label: 'Shanghai Hongqiao International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Shanghai Hongqiao International Airport',
    parent: null,
    size: 15
  }, {
    x: 580.8551934489927,
    y: 241.47782924175658,
    label: 'Indira Gandhi International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Indira Gandhi International Airport',
    parent: null,
    size: 15
  }, {
    x: 142.49629635003708,
    y: 518.4470370636079,
    label: 'Frankfurt am Main Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Frankfurt am Main Airport',
    parent: null,
    size: 15
  }, {
    x: 716.6279150760975,
    y: 545.8773030597199,
    label: 'Vienna International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Vienna International Airport',
    parent: null,
    size: 15
  }, {
    x: -70.06067646092055,
    y: 561.1605661590851,
    label: 'Cagliari Elmas Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Cagliari Elmas Airport',
    parent: null,
    size: 15
  }, {
    x: 533.2686334784598,
    y: 219.21154460683562,
    label: 'Tucson International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Tucson International Airport',
    parent: null,
    size: 15
  }, {
    x: -93.03511592199457,
    y: 381.08072776851094,
    label: 'Louisville International Standiford Field',
    color: '#38007E',
    field: 'Dest',
    term: 'Louisville International Standiford Field',
    parent: null,
    size: 15
  }, {
    x: -182.53556363207895,
    y: 361.554383031446,
    label: 'Salt Lake City International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Salt Lake City International Airport',
    parent: null,
    size: 15
  }, {
    x: 506.6699374507708,
    y: 547.2465972305006,
    label: 'Rochester International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Rochester International Airport',
    parent: null,
    size: 15
  }, {
    x: -148.82859321240085,
    y: 318.0132218264011,
    label: 'Itami Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Itami Airport',
    parent: null,
    size: 15
  }, {
    x: 222.5302956739488,
    y: 232.51590505210746,
    label: 'Portland International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Portland International Airport',
    parent: null,
    size: 15
  }, {
    x: -80.62574246014822,
    y: 303.3255679653993,
    label: 'Dubai International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Dubai International Airport',
    parent: null,
    size: 15
  }, {
    x: -34.72394927217507,
    y: 217.5466871636975,
    label: 'Zurich Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Zurich Airport',
    parent: null,
    size: 15
  }, {
    x: -9.750451947080853,
    y: 568.5500808550931,
    label: 'Leonardo da Vinci - Fiumicino Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Leonardo da Vinci - Fiumicino Airport',
    parent: null,
    size: 15
  }, {
    x: -171.03799922521074,
    y: 268.04401840229406,
    label: 'Jorge Chavez International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Jorge Chavez International Airport',
    parent: null,
    size: 15
  }, {
    x: 254.95546516251608,
    y: 360.7470259628306,
    label: 'Newport News Williamsburg International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Newport News Williamsburg International Airport',
    parent: null,
    size: 15
  }, {
    x: 705.9928093405911,
    y: 260.92721232939704,
    label: 'Narita International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Narita International Airport',
    parent: null,
    size: 15
  }, {
    x: 300.39350107798504,
    y: 296.31322539642935,
    label: 'Phoenix Sky Harbor International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Phoenix Sky Harbor International Airport',
    parent: null,
    size: 15
  }, {
    x: 841.3679622941146,
    y: 362.994358559615,
    label: 'Gulfport Biloxi International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Gulfport Biloxi International Airport',
    parent: null,
    size: 15
  }, {
    x: -141.05365305439858,
    y: 210.2303430439021,
    label: 'Copenhagen Kastrup Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Copenhagen Kastrup Airport',
    parent: null,
    size: 15
  }, {
    x: 743.5349870766893,
    y: 126.70030466255093,
    label: 'Syracuse Hancock International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Syracuse Hancock International Airport',
    parent: null,
    size: 15
  }, {
    x: 764.618951678557,
    y: 248.832832419093,
    label: 'Tokyo Haneda International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Tokyo Haneda International Airport',
    parent: null,
    size: 15
  }, {
    x: 763.09219411721,
    y: 513.1544667969338,
    label: 'Munich Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Munich Airport',
    parent: null,
    size: 15
  }, {
    x: 156.05708853251238,
    y: 473.87653900869924,
    label: 'Washington Dulles International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Washington Dulles International Airport',
    parent: null,
    size: 15
  }, {
    x: -86.411003945306,
    y: 240.80939633249233,
    label: 'Malpensa International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Malpensa International Airport',
    parent: null,
    size: 15
  }, {
    x: 685.9006745563539,
    y: 80.38825995741794,
    label: 'Tulsa International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Tulsa International Airport',
    parent: null,
    size: 15
  }, {
    x: 813.5591404529398,
    y: 319.41126742174833,
    label: 'Chhatrapati Shivaji International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Chhatrapati Shivaji International Airport',
    parent: null,
    size: 15
  }, {
    x: 764.1118449187941,
    y: 425.24554477772796,
    label: 'King Shaka International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'King Shaka International Airport',
    parent: null,
    size: 15
  }, {
    x: 703.5657989067569,
    y: 465.484110126664,
    label: 'London Gatwick Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'London Gatwick Airport',
    parent: null,
    size: 15
  }, {
    x: 344.9519826614776,
    y: -13.093056231864056,
    label: 'Nashville International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Nashville International Airport',
    parent: null,
    size: 15
  }, {
    x: -81.11616869938695,
    y: 450.9378117999539,
    label: 'Jeju International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Jeju International Airport',
    parent: null,
    size: 15
  }, {
    x: 520.9186276242698,
    y: 119.42964509536168,
    label: 'Naples International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Naples International Airport',
    parent: null,
    size: 15
  }, {
    x: 816.422014720576,
    y: 212.4314895109656,
    label: 'Seattle Tacoma International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Seattle Tacoma International Airport',
    parent: null,
    size: 15
  }, {
    x: 25.734384706872138,
    y: 124.10051087501682,
    label: 'London Luton Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'London Luton Airport',
    parent: null,
    size: 15
  }, {
    x: 185.9498162384016,
    y: 590.068422735089,
    label: 'Quad City International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Quad City International Airport',
    parent: null,
    size: 15
  }, {
    x: 213.56366767998443,
    y: 470.3771672046229,
    label: 'San Diego International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'San Diego International Airport',
    parent: null,
    size: 15
  }, {
    x: 349.5963617759899,
    y: 42.24365374774675,
    label: 'Genoa Cristoforo Colombo Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Genoa Cristoforo Colombo Airport',
    parent: null,
    size: 15
  }, {
    x: 674.2709501560455,
    y: 132.40588179256156,
    label: 'Rajiv Gandhi International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Rajiv Gandhi International Airport',
    parent: null,
    size: 15
  }, {
    x: -93.72766628851922,
    y: 163.56728717209475,
    label: 'Tampa International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Tampa International Airport',
    parent: null,
    size: 15
  }, {
    x: 569.5207860148963,
    y: 130.37661454397244,
    label: 'Kansai International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Kansai International Airport',
    parent: null,
    size: 15
  }, {
    x: 750.1154214852191,
    y: 323.5264978888758,
    label: 'Chengdu Shuangliu International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Chengdu Shuangliu International Airport',
    parent: null,
    size: 15
  }, {
    x: 802.7414370705463,
    y: 473.82537149991913,
    label: 'Scott AFB/Midamerica Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Scott AFB/Midamerica Airport',
    parent: null,
    size: 15
  }, {
    x: 418.5925126330155,
    y: 24.230521636621365,
    label: 'Edmonton International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Edmonton International Airport',
    parent: null,
    size: 15
  }, {
    x: 722.7028867550214,
    y: 384.02115146468276,
    label: 'Venice Marco Polo Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Venice Marco Polo Airport',
    parent: null,
    size: 15
  }, {
    x: 566.9547084529621,
    y: 536.9780471490457,
    label: 'Licenciado Benito Juarez International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Licenciado Benito Juarez International Airport',
    parent: null,
    size: 15
  }, {
    x: 9.092519123754876,
    y: 180.41434896279804,
    label: 'Richmond International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Richmond International Airport',
    parent: null,
    size: 15
  }, {
    x: 526.9718956870161,
    y: 499.9130353149581,
    label: 'Oslo Gardermoen Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Oslo Gardermoen Airport',
    parent: null,
    size: 15
  }, {
    x: 776.8528805322672,
    y: 172.1720828990032,
    label: 'Orlando Sanford International Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Orlando Sanford International Airport',
    parent: null,
    size: 15
  }, {
    x: 194.56093032633905,
    y: 506.61947778758895,
    label: 'Manchester Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Manchester Airport',
    parent: null,
    size: 15
  }, {
    x: 708.6785061187419,
    y: 191.9304211208653,
    label: 'Cologne Bonn Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Cologne Bonn Airport',
    parent: null,
    size: 15
  }, {
    x: -37.77191138443358,
    y: 501.2430928096333,
    label: 'Verona Villafranca Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'Verona Villafranca Airport',
    parent: null,
    size: 15
  }, {
    x: -40.417571635448624,
    y: 123.95944445826335,
    label: "Treviso-Sant'Angelo Airport",
    color: '#38007E',
    field: 'Dest',
    term: "Treviso-Sant'Angelo Airport",
    parent: null,
    size: 15
  }, {
    x: 429.6512757101672,
    y: 754.2512422806057,
    label: 'Ukrainka Air Base',
    color: '#38007E',
    field: 'Dest',
    term: 'Ukrainka Air Base',
    parent: null,
    size: 15
  }, {
    x: 210.79822994078665,
    y: 547.8887998341944,
    label: 'London Heathrow Airport',
    color: '#38007E',
    field: 'Dest',
    term: 'London Heathrow Airport',
    parent: null,
    size: 15
  }],
  links: [{
    weight: 0.00036108815767164356,
    width: 2,
    inferred: false,
    source: 16,
    target: 15
  }, {
    weight: 0.00006920523704931667,
    width: 2,
    inferred: false,
    source: 10,
    target: 16
  }, {
    weight: 0.000025994919070600338,
    width: 2,
    inferred: false,
    source: 14,
    target: 2
  }, {
    weight: 0.0018162486758829953,
    width: 2,
    inferred: false,
    source: 4,
    target: 12
  }, {
    weight: 0.00018081732691649835,
    width: 2,
    inferred: false,
    source: 9,
    target: 16
  }, {
    weight: 0.000021285526043182752,
    width: 2,
    inferred: false,
    source: 12,
    target: 14
  }, {
    weight: 0.0007282200503396025,
    width: 2,
    inferred: false,
    source: 9,
    target: 0
  }, {
    weight: 0.004793219772186124,
    width: 2,
    inferred: false,
    source: 15,
    target: 14
  }, {
    weight: 0.0007516261919537721,
    width: 2,
    inferred: false,
    source: 11,
    target: 3
  }, {
    weight: 0.00001604668217899462,
    width: 2,
    inferred: false,
    source: 15,
    target: 6
  }, {
    weight: 0.00102064538814533,
    width: 2.129352369920287,
    inferred: false,
    source: 10,
    target: 0
  }, {
    weight: 0.0005756894672209474,
    width: 2,
    inferred: false,
    source: 11,
    target: 9
  }, {
    weight: 0.00043176411158517205,
    width: 2,
    inferred: false,
    source: 16,
    target: 14
  }, {
    weight: 0.000298574093986214,
    width: 2,
    inferred: false,
    source: 15,
    target: 4
  }, {
    weight: 0.00026684563135348044,
    width: 2,
    inferred: false,
    source: 3,
    target: 9
  }, {
    weight: 0.0015570439724214619,
    width: 3.2484301710023926,
    inferred: false,
    source: 3,
    target: 16
  }, {
    weight: 0.00034139370106102624,
    width: 2,
    inferred: false,
    source: 12,
    target: 16
  }, {
    weight: 0.000019807816572852395,
    width: 2,
    inferred: false,
    source: 15,
    target: 7
  }, {
    weight: 0.0018795555437956094,
    width: 2,
    inferred: false,
    source: 0,
    target: 12
  }, {
    weight: 0.00008480623691842954,
    width: 2,
    inferred: false,
    source: 14,
    target: 4
  }, {
    weight: 0.0005396046174994674,
    width: 2,
    inferred: false,
    source: 0,
    target: 14
  }, {
    weight: 0.00030597266180943495,
    width: 2,
    inferred: false,
    source: 11,
    target: 15
  }, {
    weight: 0.00016510683587379307,
    width: 2,
    inferred: false,
    source: 12,
    target: 9
  }, {
    weight: 0.000877528177750529,
    width: 2,
    inferred: false,
    source: 3,
    target: 4
  }, {
    weight: 0.004021590274418162,
    width: 8.390164577377533,
    inferred: false,
    source: 9,
    target: 15
  }, {
    weight: 0.00005090637270674858,
    width: 2,
    inferred: false,
    source: 4,
    target: 5
  }, {
    weight: 0.000021160301063872648,
    width: 2,
    inferred: false,
    source: 9,
    target: 7
  }, {
    weight: 0.0007218599824419075,
    width: 2,
    inferred: false,
    source: 4,
    target: 9
  }, {
    weight: 0.000020271897051582118,
    width: 2,
    inferred: false,
    source: 15,
    target: 1
  }, {
    weight: 0.0001452986212793978,
    width: 2,
    inferred: false,
    source: 11,
    target: 8
  }, {
    weight: 0.0000382567038512752,
    width: 2,
    inferred: false,
    source: 10,
    target: 14
  }, {
    weight: 0.00002190156221770533,
    width: 2,
    inferred: false,
    source: 10,
    target: 9
  }, {
    weight: 0.004042935452811213,
    width: 8.434696602628934,
    inferred: false,
    source: 3,
    target: 0
  }, {
    weight: 0.000048696788032371897,
    width: 2,
    inferred: false,
    source: 3,
    target: 14
  }, {
    weight: 0.000005506428294426271,
    width: 2,
    inferred: false,
    source: 0,
    target: 8
  }, {
    weight: 0.00037127137164506553,
    width: 2,
    inferred: false,
    source: 10,
    target: 4
  }, {
    weight: 0.000022370205464624682,
    width: 2,
    inferred: false,
    source: 14,
    target: 13
  }, {
    weight: 0.00001466782860711787,
    width: 2,
    inferred: false,
    source: 16,
    target: 5
  }, {
    weight: 0.0001456026369222754,
    width: 2,
    inferred: false,
    source: 15,
    target: 0
  }, {
    weight: 0.006907860404869038,
    width: 4.55482755826747,
    inferred: false,
    source: 12,
    target: 21
  }, {
    weight: 0.008296001497090972,
    width: 5.470124470920678,
    inferred: false,
    source: 12,
    target: 17
  }, {
    weight: 0.00648290935725332,
    width: 4.2746281000922,
    inferred: false,
    source: 8,
    target: 24
  }, {
    weight: 0.0009981800125248449,
    width: 2,
    inferred: false,
    source: 9,
    target: 23
  }, {
    weight: 0.0015459070412640408,
    width: 2,
    inferred: false,
    source: 9,
    target: 18
  }, {
    weight: 0.01516601960557338,
    width: 10,
    inferred: false,
    source: 16,
    target: 22
  }, {
    weight: 0.005893794668845864,
    width: 3.886184260687587,
    inferred: false,
    source: 0,
    target: 25
  }, {
    weight: 0.005313459755140434,
    width: 3.50352953070678,
    inferred: false,
    source: 0,
    target: 20
  }, {
    weight: 0.0008193770353314001,
    width: 2,
    inferred: false,
    source: 9,
    target: 17
  }, {
    weight: 0.005369162122122355,
    width: 3.5402579330368495,
    inferred: false,
    source: 8,
    target: 18
  }, {
    weight: 0.0041502680719532024,
    width: 2.736557237752755,
    inferred: false,
    source: 14,
    target: 24
  }, {
    weight: 0.005575455098137172,
    width: 3.6762810830656187,
    inferred: false,
    source: 8,
    target: 23
  }, {
    weight: 0.0006592549345612115,
    width: 2,
    inferred: false,
    source: 0,
    target: 19
  }, {
    weight: 0.0028878207958795113,
    width: 2.744516404276922,
    inferred: false,
    source: 14,
    target: 29
  }, {
    weight: 0.00541445375382345,
    width: 5.145768452381221,
    inferred: false,
    source: 14,
    target: 26
  }, {
    weight: 0.0077101087361939056,
    width: 7.327504509779791,
    inferred: false,
    source: 12,
    target: 28
  }, {
    weight: 0.001086168788022982,
    width: 2,
    inferred: false,
    source: 9,
    target: 28
  }, {
    weight: 0.005830015792513137,
    width: 5.540708759551927,
    inferred: false,
    source: 12,
    target: 27
  }, {
    weight: 0.010522148059961567,
    width: 10,
    inferred: false,
    source: 8,
    target: 30
  }, {
    weight: 0.008028304360541931,
    width: 7.629910085651518,
    inferred: false,
    source: 14,
    target: 27
  }, {
    weight: 0.008323509700335742,
    width: 7.910466240261349,
    inferred: false,
    source: 8,
    target: 29
  }, {
    weight: 0.00701726324791995,
    width: 6.669040587464972,
    inferred: false,
    source: 8,
    target: 26
  }, {
    weight: 0.008035893034703851,
    width: 7.493359138625227,
    inferred: false,
    source: 12,
    target: 34
  }, {
    weight: 0.009872040172040198,
    width: 9.205540954883924,
    inferred: false,
    source: 8,
    target: 32
  }, {
    weight: 0.006969610945500717,
    width: 6.499065834448964,
    inferred: false,
    source: 12,
    target: 31
  }, {
    weight: 0.0033592096430033543,
    width: 3.1324165426605663,
    inferred: false,
    source: 14,
    target: 34
  }, {
    weight: 0.0020881160512555767,
    width: 2,
    inferred: false,
    source: 9,
    target: 31
  }, {
    weight: 0.005672517253512455,
    width: 5.289543902220858,
    inferred: false,
    source: 12,
    target: 35
  }, {
    weight: 0.0038532137077538194,
    width: 3.5930685022037694,
    inferred: false,
    source: 14,
    target: 35
  }, {
    weight: 0.010724019609953143,
    width: 10,
    inferred: false,
    source: 8,
    target: 33
  }, {
    weight: 0.009999612232220277,
    width: 10,
    inferred: false,
    source: 12,
    target: 36
  }, {
    weight: 0.00520836804658599,
    width: 5.208570018149137,
    inferred: false,
    source: 14,
    target: 37
  }, {
    weight: 0.0065791804178040895,
    width: 6.579435547115483,
    inferred: false,
    source: 12,
    target: 38
  }, {
    weight: 0.0035543396019111486,
    width: 3.5544774330933793,
    inferred: false,
    source: 9,
    target: 39
  }, {
    weight: 0.007640437421149957,
    width: 7.640733704184349,
    inferred: false,
    source: 12,
    target: 40
  }, {
    weight: 0.005772892244324483,
    width: 5.773116107165979,
    inferred: false,
    source: 12,
    target: 37
  }, {
    weight: 0.00683892215386792,
    width: 6.839187355517515,
    inferred: false,
    source: 8,
    target: 39
  }, {
    weight: 0.0035554369106046754,
    width: 3.5555747843386514,
    inferred: false,
    source: 14,
    target: 38
  }, {
    weight: 0.006442257454823214,
    width: 6.700837532628826,
    inferred: false,
    source: 12,
    target: 42
  }, {
    weight: 0.008768456755896941,
    width: 9.120406091370558,
    inferred: false,
    source: 8,
    target: 43
  }, {
    weight: 0.002463336629511846,
    width: 2.5622103211932767,
    inferred: false,
    source: 14,
    target: 42
  }, {
    weight: 0.009614107823766071,
    width: 10,
    inferred: false,
    source: 8,
    target: 44
  }, {
    weight: 0.005362282501083629,
    width: 5.577514418787844,
    inferred: false,
    source: 12,
    target: 45
  }, {
    weight: 0.004211820280840009,
    width: 4.38087481235481,
    inferred: false,
    source: 9,
    target: 45
  }, {
    weight: 0.008768456755896941,
    width: 9.120406091370558,
    inferred: false,
    source: 8,
    target: 41
  }, {
    weight: 0.00901282169263535,
    width: 9.230629866820077,
    inferred: false,
    source: 8,
    target: 48
  }, {
    weight: 0.006864761661424646,
    width: 7.030658786063203,
    inferred: false,
    source: 8,
    target: 47
  }, {
    weight: 0.009764037582128985,
    width: 10,
    inferred: false,
    source: 8,
    target: 49
  }, {
    weight: 0.002218700052240432,
    width: 2.272318222434227,
    inferred: false,
    source: 14,
    target: 47
  }, {
    weight: 0.009069404566965875,
    width: 9.288580150045213,
    inferred: false,
    source: 8,
    target: 50
  }, {
    weight: 0.008849408882060712,
    width: 9.063267943844963,
    inferred: false,
    source: 8,
    target: 46
  }, {
    weight: 0.005626664661994386,
    width: 5.715730944253917,
    inferred: false,
    source: 8,
    target: 52
  }, {
    weight: 0.007560194330975868,
    width: 7.679867075429226,
    inferred: false,
    source: 8,
    target: 51
  }, {
    weight: 0.001752663718499857,
    width: 2,
    inferred: false,
    source: 9,
    target: 52
  }, {
    weight: 0.008026220513934599,
    width: 8.153270136528944,
    inferred: false,
    source: 12,
    target: 53
  }, {
    weight: 0.004827356344509919,
    width: 4.903770118668455,
    inferred: false,
    source: 8,
    target: 54
  }, {
    weight: 0.00984417341696416,
    width: 10,
    inferred: false,
    source: 12,
    target: 55
  }, {
    weight: 0.006914338939083934,
    width: 7.023788231085676,
    inferred: false,
    source: 12,
    target: 54
  }, {
    weight: 0.0050433680321645925,
    width: 5.123201124711509,
    inferred: false,
    source: 14,
    target: 52
  }, {
    weight: 0.008168227180792522,
    width: 9.420967741935492,
    inferred: false,
    source: 12,
    target: 57
  }, {
    weight: 0.008670263400259132,
    width: 10,
    inferred: false,
    source: 12,
    target: 58
  }, {
    weight: 0.005167622324806284,
    width: 5.960167628415806,
    inferred: false,
    source: 9,
    target: 60
  }, {
    weight: 0.0038411902891512147,
    width: 4.430304030943756,
    inferred: false,
    source: 8,
    target: 60
  }, {
    weight: 0.0075177233690892475,
    width: 8.670697788563796,
    inferred: false,
    source: 12,
    target: 59
  }, {
    weight: 0.00821636644295359,
    width: 9.476490002262242,
    inferred: false,
    source: 8,
    target: 56
  }, {
    weight: 0.008567041135861564,
    width: 9.505916995325613,
    inferred: false,
    source: 12,
    target: 62
  }, {
    weight: 0.009012324786839896,
    width: 10,
    inferred: false,
    source: 12,
    target: 64
  }, {
    weight: 0.007978951597732759,
    width: 8.853377775936234,
    inferred: false,
    source: 12,
    target: 63
  }, {
    weight: 0.007990477494073249,
    width: 8.866166813851645,
    inferred: false,
    source: 8,
    target: 61
  }, {
    weight: 0.0068326370809723485,
    width: 7.581436801911088,
    inferred: false,
    source: 12,
    target: 65
  }, {
    weight: 0.0069628576746968325,
    width: 10,
    inferred: false,
    source: 14,
    target: 66
  }, {
    weight: 0.00630579175761646,
    width: 9.056327232612892,
    inferred: false,
    source: 12,
    target: 69
  }, {
    weight: 0.004993595139087726,
    width: 7.171761038911585,
    inferred: false,
    source: 12,
    target: 68
  }, {
    weight: 0.006440422196382008,
    width: 9.249682382258989,
    inferred: false,
    source: 8,
    target: 70
  }, {
    weight: 0.006461917139048282,
    width: 9.280553245445503,
    inferred: false,
    source: 8,
    target: 67
  }, {
    weight: 0.0012299141681236386,
    width: 2,
    inferred: false,
    source: 14,
    target: 68
  }, {
    weight: 0.006121250009532553,
    width: 8.223889291692453,
    inferred: false,
    source: 14,
    target: 73
  }, {
    weight: 0.007443254392682634,
    width: 10,
    inferred: false,
    source: 12,
    target: 74
  }, {
    weight: 0.0036956382919431487,
    width: 4.965083949805991,
    inferred: false,
    source: 8,
    target: 72
  }, {
    weight: 0.00417209586464865,
    width: 5.605203912888136,
    inferred: false,
    source: 8,
    target: 71
  }, {
    weight: 0.006226305772632526,
    width: 8.365031536143016,
    inferred: false,
    source: 8,
    target: 75
  }, {
    weight: 0.00457964360497232,
    width: 6.152743629822068,
    inferred: false,
    source: 9,
    target: 72
  }, {
    weight: 0.004811414885204741,
    width: 6.464127962541197,
    inferred: false,
    source: 9,
    target: 71
  }, {
    weight: 0.008658220862662045,
    width: 9.39624265947584,
    inferred: false,
    source: 12,
    target: 77
  }, {
    weight: 0.005652490696892165,
    width: 6.134305772617896,
    inferred: false,
    source: 14,
    target: 76
  }, {
    weight: 0.009214556473730996,
    width: 10,
    inferred: false,
    source: 14,
    target: 79
  }, {
    weight: 0.004748575495037549,
    width: 5.153341355685282,
    inferred: false,
    source: 12,
    target: 76
  }, {
    weight: 0.0077464423601241485,
    width: 8.406744678604802,
    inferred: false,
    source: 12,
    target: 80
  }, {
    weight: 0.008124466937893192,
    width: 8.816991855283053,
    inferred: false,
    source: 12,
    target: 78
  }, {
    weight: 0.0060785494322330245,
    width: 5.642184271849482,
    inferred: false,
    source: 12,
    target: 81
  }, {
    weight: 0.0055135463710868065,
    width: 5.117741488141641,
    inferred: false,
    source: 9,
    target: 83
  }, {
    weight: 0.009734577561953504,
    width: 9.035754504504519,
    inferred: false,
    source: 8,
    target: 85
  }, {
    weight: 0.0006290814048138334,
    width: 2,
    inferred: false,
    source: 9,
    target: 85
  }, {
    weight: 0.006117429813459821,
    width: 5.6782735194384015,
    inferred: false,
    source: 12,
    target: 83
  }, {
    weight: 0.009450881532944542,
    width: 8.772424364525301,
    inferred: false,
    source: 12,
    target: 84
  }, {
    weight: 0.005227004044795189,
    width: 4.851769380051405,
    inferred: false,
    source: 9,
    target: 81
  }, {
    weight: 0.010773397569733226,
    width: 10,
    inferred: false,
    source: 8,
    target: 82
  }, {
    weight: 0.011920043127675903,
    width: 6.530170805646604,
    inferred: false,
    source: 8,
    target: 90
  }, {
    weight: 0.0034745412270287637,
    width: 2,
    inferred: false,
    source: 12,
    target: 86
  }, {
    weight: 0.015665658081851157,
    width: 8.582135312902338,
    inferred: false,
    source: 8,
    target: 88
  }, {
    weight: 0.01040035726960635,
    width: 5.697639570832633,
    inferred: false,
    source: 8,
    target: 87
  }, {
    weight: 0.00718982708389688,
    width: 3.9388111618405564,
    inferred: false,
    source: 9,
    target: 90
  }, {
    weight: 0.018253799911893125,
    width: 10,
    inferred: false,
    source: 9,
    target: 89
  }],
  urlTemplates: [{
    url: '/app/discover#/?_a=(columns%3A!(_source)%2Cindex%3Ad3d7af60-4c81-11e8-b3d7-01146121b73d%2Cinterval%3Aauto%2Cquery%3A(language%3Akuery%2Cquery%3A{{gquery}})%2Csort%3A!(_score%2Cdesc))',
    description: 'Raw documents',
    isDefault: true,
    encoderID: 'kql-loose'
  }],
  exploreControls: {
    useSignificance: true,
    sampleSize: 2000,
    timeoutMillis: 5000,
    maxValuesPerDoc: 1,
    minDocCount: 3
  },
  indexPatternRefName: 'indexPattern_0'
};

function registerFlightsSampleData(sampleDataRegistry) {
  sampleDataRegistry.addSavedObjectsToSampleDataset(datasetId, [{
    type: 'graph-workspace',
    id: '5dc018d0-32f8-11ea-bbe4-818d9c786051',
    version: '2',
    attributes: {
      title: 'Kibana Sample Data - Flights',
      description: 'This is a sample graph of the flights demo database.  It shows all flights destinations, weather, and which carrier was used.',
      numLinks: 142,
      numVertices: 91,
      version: 1,
      wsState: JSON.stringify(JSON.stringify(wsState))
    },
    references: [{
      name: 'indexPattern_0',
      type: 'index-pattern',
      id: 'kibana_sample_data_flights'
    }],
    migrationVersion: {
      'graph-workspace': '7.0.0'
    },
    updated_at: '2020-01-09T15:55:24.013Z'
  }]);
}

function registerFlightsSampleDataLink(sampleDataRegistry) {
  sampleDataRegistry.addAppLinksToSampleDataset(datasetId, [{
    path: (0, _constants.createWorkspacePath)('5dc018d0-32f8-11ea-bbe4-818d9c786051'),
    label: _i18n.i18n.translate('xpack.graph.sampleData.label', {
      defaultMessage: 'Graph'
    }),
    icon: _constants.APP_ICON
  }]);
}