import { Table } from '../Table.js';

const wordsTest = {
    'allow':[
        {
            'createdTime': '20180921T110022Z',
            'sentence': 'asdf asdf allow',
            'sourceUrl': 'http://hogehoge.com'
        }
    ],
    'bake':[
        {
            'createdTime': '20180923121832Z',
            'sentence': 'asdf bake',
            'sourceUrl': 'http://fugafufa.com'
        },
        {
            'createdTime': '20180925121832Z',
            'sentence': 'asdf bake',
            'sourceUrl': 'http://fugafufa.com'
        }
    ]
};


(async () => {
    const tbl = new Table('DEVELOPMENT', 'table1');
    await tbl.set('allow', wordsTest.allow[0]);
    await tbl.set('bake', wordsTest.bake[0]);
    await tbl.set('bake', wordsTest.bake[1]);
    const allow = await tbl.get('allow');
    const bake = await tbl.get('bake');
    console.log(allow);
    console.log(wordsTest.allow);
    console.log(Object.is(allow, wordsTest.allow))
    console.log(allow[0] == wordsTest.allow[0]);
    console.log(bake[0] == wordsTest.bake[0]);
    console.log(bake[1] == wordsTest.bake[1]);
})();


const db_example = {
    "words":{
        'allow':[
            {
                'createdTime': '20180921T110022Z',
                'sentence': 'asdf asdf allow',
                'sourceUrl': 'http://hogehoge.com'
            }
        ],
        'bake':[
            {
                'createdTime': '20180923121832Z',
                'sentence': 'asdf bake',
                'sourceUrl': 'http://fugafufa.com'
            },
            {
                'createdTime': '20180923121832Z',
                'sentence': 'asdf bake',
                'sourceUrl': 'http://fugafufa.com'
            }
        ]
    },
    "lookup":{
        'allow':[
            {
                'time':'',
                
            }
        ]

    }
}