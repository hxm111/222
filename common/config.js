/**
 * Created by hxm on 16/5/12.
 */
if(window.location.hostname=='localhost'){
    window.BMURL = 'http://hxmall.know.com';
}else {
    window.BMURL = window.location.origin;
}

//配置文件
CONFIG={
    'http://angular.smallSimple.com':{
        navs:[
            {
                name:'Filter',
                title:'Filter(过滤器)',
                url:'filter.list'
            }
        ],
        name:'angular 简单讲解',
        backgrounds:[
            'css/images/loginbg.jpg'
        ]
    }
};


if(!CONFIG[BMURL]){
    CONFIG[BMURL]=CONFIG['http://hxmall.know.com'];
}



window.$IndexId=100;
