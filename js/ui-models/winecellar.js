var winecellar_lovs = {
    bottleSize: [
        {id:750, text:'750 ml'},
        {id:500, text:'500 ml'},
        {id:375, text:'375 cl'},
        {id:1500, text:'1.5 L'},
        {id:3000, text:'3.0 L'},
        {id:6000, text:'6.0 L'},
        {id:8000, text:'8.0 L'}
    ],
    grape: [
        {id:'chard', text:'Chardonnay'},
        {id:'shiraz', text:'Shiraz'},
        {id:'merlo', text:'Merlot'},
        {id:'pino', text:'Pinot Noir'},
        {id:'cab', text:'Cabernet'},
        {id:'zin', text:'Zinfandel'},
        {id:'sauv', text:'Sauvignon'},
        {id:'cabsau', text:'Cabernet Sauvignon'},
        {id:'aligo', text:'Aligoté'},
        {id:'alva', text:'Alvarinho'},
        {id:'bf', text:'Blanc Fumé'},
        {id:'bual', text:'Bual'},
        {id:'carg', text:'Carignan'},
        {id:'chass', text:'Chasselas'},
        {id:'cb', text:'Chemin Blanc'},
        {id:'cin', text:'Cinsault'},
        {id:'clair', text:'Clairette'},
        {id:'colomb', text:'Colombard'},
        {id:'counoi', text:'Counoise'},
        {id:'fdt', text:'Fendant'},
        {id:'fb', text:'Folle Blanche'},
        {id:'f', text:'Fürmint'},
        {id:'gamay', text:'Gamay'},
        {id:'gewurz', text:'Gewürztraminer'},
        {id:'graub', text:'Grauburgunder'},
        {id:'grct', text:'Grechetto'},
        {id:'gb', text:'Grenache Blanc'},
        {id:'gn', text:'Grenache Noir'},
        {id:'gp', text:'Gros Plan'},
        {id:'gv', text:'Grüner Veltliner'},
        {id:'ir', text:'Italienischer Riestling'},
        {id:'ka', text:'Kadarka'},
        {id:'ker', text:'Kerner'},
        {id:'mcb', text:'Macabeo'},
        {id:'malm', text:'Malmsey'},
        {id:'malv', text:'Malvasier'},
        {id:'mars', text:'Marsanne'},
        {id:'mdb', text:'Melon de Bourgogne'},
        {id:'mourv', text:'Mourvèdre'},
        {id:'mt', text:'Müller-Thurgau'},
        {id:'mu1', text:'Muscadelle'},
        {id:'mu2', text:'Muscadet'},
        {id:'mu3', text:'Musca'},
        {id:'mu4', text:'Musca d\'Alsace'},
        {id:'mu5', text:'Muskateller'},
        {id:'neb', text:'Nebbiolo'},
        {id:'pal', text:'Palomino'},
        {id:'px', text:'Pedro Ximérez'},
        {id:'pv', text:'Petit Verdot'},
        {id:'pb', text:'Pinot Blanc'},
        {id:'pg', text:'Pinot Gris'},
        {id:'pn', text:'Pinot Noir'},
        {id:'pi', text:'Pinotage'},
        {id:'riesling', text:'Riesling'},
        {id:'rul', text:'Ruländer'},
        {id:'sang', text:'Sangiovese'},
        {id:'sb', text:'Sauvignon Blanc'},
        {id:'sc', text:'Scheurebe'},
        {id:'sem', text:'Sémilion'},
        {id:'ser', text:'Sercial'},
        {id:'sb2', text:'Seyval Blanc'},
        {id:'sieg', text:'Siegerrebe'},
        {id:'silv', text:'Silvaner'},
        {id:'spa', text:'Spätburgunder'},
        {id:'steen', text:'Steen'},
        {id:'syrah', text:'Syrah'},
        {id:'temp', text:'Tempranillo'},
        {id:'tokay', text:'Tokay'},
        {id:'tram', text:'Traminer'},
        {id:'treb', text:'Trebbiano'},
        {id:'ub', text:'Ugni Blanc'},
        {id:'verd', text:'Verdejo'},
        {id:'verdh', text:'Verdelho'},
        {id:'verm', text:'Vermentino'},
        {id:'vern', text:'Vernaccia'},
        {id:'vio', text:'Viognier'},
        {id:'viu', text:'Viura'},
        {id:'w', text:'Weißburgunder'}
    ],

    type: [
        {id:'red',text:'Red', icon:'winered.gif'},
        {id:'white',text:'White', icon:'winewhite.gif'},
        {id:'sweet',text:'Sweet', icon:'winesweet.gif'},
        {id:'spark',text:'Sparkling', icon:'winespark.gif'},
        {id:'rose',text:'Rose', icon:'winerose.gif'}
    ],

    country: [
        {id: 'AR', text: 'Argentina'},
        {id: 'AT', text: 'Austria'},
        {id: 'BG', text: 'Bulgaria'},
        {id: 'CA', text: 'Canada'},
        {id: 'CL', text:'Chile'},
        {id: 'CY', text:'Cyprus'},
        {id: 'FR', text:'France'},
        {id: 'DE', text:'Germany'},
        {id: 'GR', text:'Greece'},
        {id: 'HU', text:'Hungary'},
        {id: 'IT', text:'Italy'},
        {id: 'LU', text:'Luxembourg'},
        {id: 'NZ', text:'New Zealand'},
        {id: 'PT', text:'Portugal'},
        {id: 'ZA', text:'South Africa'},
        {id: 'ES', text:'Spain'},
        {id: 'CH', text:'Switzerland'},
        {id: 'US', text:'United States'}
    ]
}

var winecellar_ui = {
    entity: 'wine',
    entities: 'wines',
    label: 'Wine Cellar',
    elements: [
        {
            type: 'panel',
            label: 'Wine',
            width: 100,
            elements: [
                {
                    id:'name',
                    type: 'text',
                    label: 'Name',
                    required: true,
                    maxlength: 150,
                    search: '1',
                    searchlist: '1',
                    width: '62'
                },
                {
                    id:'vin',
                    type: 'integer',
                    label: 'Vintage',
                    required: true,
                    maxlength: 100,
                    search: '1',
                    searchlist: '1',
                    width: 38,
                    min: 1900,
                    max: 2012,
                    help: 'Year the wine was produced.'
                }

            ]
        },
        {
            type: 'tab',
            label: 'General',
            elements: [
                {
                    type: 'panel',
                    label: 'Wine',
                    width: 80,
                    elements: [
                        {
                            type: 'text',
                            id:'winery',
                            label: 'Winery',
                            maxlength: 100,
                            required: true,
                            search: '1',
                            searchlist: '1',
                            width: '62',
                            help: 'The establishment where wine is made.'
                        },
                        {
                            type: 'lov',
                            id:'bsize',
                            label: 'Bottle Size',
                            labellist: 'Bottle',
                            width: '38',
                            list: winecellar_lovs.bottleSize
                        },
                        {
                            type: 'lov',
                            id:'grape',
                            label: 'Grape',
                            search: '1',
                            searchlist: '1',
                            width: '62',
                            list: winecellar_lovs.grape
                        },
                        {
                            type: 'lov',
                            label: 'Type',
                            search: '1',
                            searchlist: '1',
                            width: '38',
                            list: winecellar_lovs.type
                        },
                        {
                            type: 'text',
                            optional: '1',
                            label: 'Appellation',
                            search: '1',
                            width: 100,
                            help: 'An appellation is a legally defined and protected geographical indication used to identify where the grapes for a wine were grown.'
                        },
                        {
                            type: 'lov',
                            label: 'Country',
                            search: '1',
                            width: '32',
                            list: winecellar_lovs.country
                        },
                        {
                            type: 'text',
                            label: 'Region',
                            maxlength: '100',
                            width: '30'
                        },
                        {
                            type: 'text',
                            label: 'Area',
                            maxlength: '100',
                            width: '38'
                        }

                    ]
                },
                {
                    type: 'panel',
                    label: 'Bottle Label',
                    width: '20',
                    elements: [
                        {
                            type: 'image',
                            label: 'Label',  
                            maxlength: '200',
                            width: 100,
                            height: '1',
                            searchlist: '1'
                        }
                    ]
                }
            ]
        },
        {
            type: 'tab',
            label: 'Purchase',
            elements: [
                {
                    type: 'panel',
                    label: 'Purchase',
                    width: 100,
                    elements: [
                        {
                            type: 'date',
                            label: 'Buying Date',
                            search: '1',
                            width: '40'
                        },
                        {
                            type: 'decimal',
                            label: 'Price',
                            maxlength: '10',
                            search: '1',
                            searchlist: '1',
                            width: '30',
                            format: '$ 0.00'
                        },
                        {
                            type: 'decimal',
                            label: 'Value',
                            maxlength: '10',
                            search: '1',
                            width: '30',
                            format: '$ 0.00'
                        },
                        {
                            type: 'integer',
                            label: 'Bottles Purchased',
                            labellist: 'Purchased',
                            maxlength: '10',
                            width: '40'
                        },
                        {
                            type: 'integer',
                            label: 'Remaining',
                            labeledit: 'Bottles Remaining',
                            maxlength: '10',
                            width: '60'
                        },
                        {
                            type: 'textmultiline',
                            label: 'Note',
                            maxlength: '150',
                            search: '1',
                            width: 100,
                            height: '2'
                        }

                    ]
                }

            ]
        },
        {
            type: 'tab',
            label: 'Drinking and Score',
            elements: [
                {
                    type: 'panel',
                    label: 'Drinking',
                    width: '62',
                    elements: [
                        {
                            type: 'integer',
                            label: 'Drink from (year)',
                            placeholder: '2013',
                            labellist: 'Drink',
                            maxlength: '10',
                            searchlist: '1',
                            width: 50,
                            min: 1900,
                            max: '2100'
                        },
                        {
                            type: 'integer',
                            label: 'to',
                            maxlength: '10',
                            width: 50,
                            min: 1900,
                            max: '2100'
                        },
                        {
                            type: 'integer',
                            label: 'Peak from',
                            labellist: 'Peak',
                            maxlength: '10',
                            width: 50,
                            min: 1900,
                            max: 2100
                        },
                        {
                            type: 'integer',
                            label: 'to',
                            maxlength: '10',
                            width: 50,
                            min: 1900,
                            max: 2100
                        },
                        {
                            type: 'textmultiline',
                            label: 'Meal',
                            maxlength: '200',
                            search: '1',
                            width: 100,
                            height: '2'
                        }

                    ]
                },
                {
                    type: 'panel',
                    label: 'Score',
                    width: '38',
                    elements: [
                        {
                            type: 'lov',
                            label: 'My Score',
                            labellist: 'Score',
                            list: [
                                //{id:'', text:'NR', icon:'s00.gif'},
                                {id:0, text:'', icon:'s0.gif'},
                                {id:1, text:'*', icon:'s1.gif'},
                                {id:2, text:'**', icon:'s2.gif'},
                                {id:3, text:'***', icon:'s3.gif'},
                                {id:4, text:'****', icon:'s4.gif'},
                                {id:5, text:'*****', icon:'s5.gif'}
                            ],
                            maxlength: '100',
                            search: '1',
                            searchlist: '1',
                            width: 100
                        },
                        {
                            type: 'integer',
                            label: 'Parker',
                            maxlength: '10',
                            width: 100
                        },
                        {
                            type: 'integer',
                            label: 'WineSpectator',
                            maxlength: '10',
                            width: 100
                        }

                    ]
                }
            ]
        },
        {
            type: 'tab',
            label: 'Wine Tasting',
            elements: [

                { type: 'panel-list',
                    label: 'Degustations',
                    width: 100,
                    dbtabledetails: 'WineDegustation',
                    dbcolumndetails: 'wineid',
                    panelid: '1',
                    dborder: 'ddate desc',
                    elements: [
                        {type: 'text', panelid: '1', label: 'Robe', maxlength: '100', dbcolumn: 'Robe', dbcolumnread: 'Robe', searchlist: '1'},
                        {type: 'date', panelid: '1', dbcolumn: 'ddate', dbcolumnread: 'ddate', label: 'Date', maxlength: '20', searchlist: '1'},
                        {type: 'text', panelid: '1', label: 'Nose', maxlength: '100', dbcolumn: 'Nose', dbcolumnread: 'Nose', searchlist: '1'},
                        {type: 'text', panelid: '1', label: 'Taste', maxlength: '100', dbcolumn: 'Taste', dbcolumnread: 'Taste', searchlist: '1'},
                        {type: 'textmultiline', panelid: '1', dbcolumn: 'notes', dbcolumnread: 'notes', label: 'Note', maxlength: '300', searchlist: '1', width: 100, height: '4'}
                    ]
                }
            ]
        },
        {
            type: 'tab',
            label: 'Notes',
            elements: [
                {
                    type: 'panel',
                    label: 'Comments',
                    width: 100,
                    elements: [
                        {
                            type: 'textmultiline',
                            label: 'Comments',
                            maxlength: '300',
                            width: 100,
                            height: '8'
                        }

                    ]
                }
            ]
        }
    ]
}

/*
winetasting = {
    entity: 'wine tasting',
    entities: 'wine tastings', elements: [
        {
            type: 'panel',
            label: 'Wine Tasting',
            width: 50,
            elements: [
                {
                    type: 'lov',
                    label: 'Wine',
                    search: '1',
                    searchlist: '1',
                    width: '62',
                    required: '1',
                    link: 'demo_winecellar.aspx?ID=@itemid'
                },
                {
                    type: 'date',
                    label: 'Date',
                    maxlength: '20',
                    search: '1',
                    searchlist: '1',
                    width: '38'
                },
                {
                    type: 'text',
                    label: 'Robe',
                    maxlength: '100',
                    search: '1',
                    searchlist: '1',
                    width: '30'
                },
                {
                    type: 'text',
                    label: 'Nose',
                    maxlength: '100',
                    search: '1',
                    searchlist: '1',
                    width: '32'
                },
                {
                    type: 'text',
                    label: 'Taste',
                    maxlength: '100',
                    search: '1',
                    searchlist: '1',
                    width: '38'
                },
                {
                    type: 'textmultiline',
                    label: 'Note',
                    maxlength: '300',
                    search: '1',
                    width: 100,
                    height: '4'
                }
            ]
        }
    ]
}
*/
