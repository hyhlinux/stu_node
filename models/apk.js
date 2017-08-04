var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: String, //名称
    language_name: Schema.Types.Mixed, //多语言名称
    apk_name: String, //apk名称
    language_apk_name: Schema.Types.Mixed, //多语言apk名称
    package_name: {
        type: String,
        require: true
    }, //包名
    icon: String, //原始地址图标
    icon_fid: String, //图标文件ID
    banner: String, //原始banner图片地址
    banner_fid: String, //banner图片文件ID
    description: String, //描述
    description_translation: String, //描述翻译
    description_short: String, //短描述
    translation_bar: String, //翻译条
    price: {
        type: String,
        default: '0'
    }, //价钱
    published: {
        type: Boolean,
        default: true
    }, //google play 是否发布
    updated: {
        type: Date
    }, //更新时间
    developer: String, //开发者（提供者)
    developer_link: [{ //开发者链接
        name: String,
        href: String
    }],
    interactive_elements: [String], //互动元素
    developer_id: String,
    random: Number, //TODO 后加字段需要批量做修改
    url_name: String, //TODO 后加字段需要批量做修改
    language: [String], //语言列表
    review_stars: {
        type: Number,
        default: 0
    }, //评论星级
    review_count: {
        type: Number,
        default: 0
    }, //评论数量
    install_count: {
        type: Number,
        default: 0
    }, //本站安装数量
    install_count1: {
        type: Number,
        default: 0
    }, //安装数量1
    install_count2: {
        type: Number,
        default: 0
    }, //安装数量2
    install_custom: {
        type: Number,
        default: 0
    }, //自定义安装数量
    install_total: {
        type: Number,
        default: 0
    }, //总安装数量
    sort_search: {
        type: Number,
        default: 0
    }, //搜索排行
    sort_developer: {
        type: Number,
        default: 0
    }, //开发者排行
    page_view: {
        type: Number,
        default: 0
    }, //浏览数量
    follow_total: {
        type: Number,
        default: 0
    }, //关注总数
    comment_total: {
        type: Number,
        default: 0
    }, //评论总数
    comment_score_1: {
        type: Number,
        default: 0
    }, //评1星次数
    comment_score_2: {
        type: Number,
        default: 0
    }, //评2星次数
    comment_score_3: {
        type: Number,
        default: 0
    }, //评3星次数
    comment_score_4: {
        type: Number,
        default: 0
    }, //评4星次数
    comment_score_5: {
        type: Number,
        default: 0
    }, //评5星次数
    comment_score_total: {
        type: Number,
        default: 0
    }, //评星总次数
    comment_score: {
        type: Number,
        default: 0
    }, //评星总分数
    comment_score_stars: {
        type: Number,
        default: 0
    }, //评星星级
    language_comment: Schema.Types.Mixed, //多语言评论相关数据
    create_date: {
        type: Date,
        default: Date.now
    }, //数据添加时间
    update_date: {
        type: Date,
        default: Date.now
    }, //数据更改时间
    update_fail_count: {
        type: Number,
        default: 0
    }, //检查更新失败次数
    keyword: [String], //搜索关键字
    tags: [String], //标签
    tube: String, //原始视频
    tube_id: String, //youtube ID
    tube_img_fid: String, //视频图片文件ID
    img: [String], //原始图片列表
    img_fid: [String], //图片文件ID
    content_rating: [String], //内容等级
    in_app_products: String, //内购
    top: {
        type: Boolean,
        default: false
    }, //置顶
    good: {
        type: Boolean,
        default: false
    }, //推荐
    enable: {
        type: Boolean,
        default: true
    }, //上架状态
    disable: [String], //显示屏蔽状态
    disable_country: [String], //国家屏蔽
    active: {
        type: Boolean,
        default: true
    }, //是否发布
    active_date: {
        type: Date,
        default: Date.now
    }, //发布时间
    completed: {
        type: Boolean,
        default: false
    }, //是否采集完成
    completed_date: {
        type: Date
    }, //完成时间
    status: {
        type: Number,
        default: 0
    }, //状态
    status_code: [String],
    status_download_date: {
        type: Date
    }, //下载状态更新时间
    temp: String, //临时
    temp_begin_date: Date, //临时
    temp_end_date: Date, //临时
    apk_type: {
        type: Number,
        default: 0
    }, //类型 1:app 2:game
    category: String, //分类
    permissions: String, //权限
    source_name: String, //来源名称
    content_source_type: {
        type: Number,
        default: 1
    }, //内容来源类型 1:google play 2:apkpure 3:user
    source_url: String, //来源地址
    custom_url: String, //自定义url
    version_new_update: {
        type: Boolean,
        default: false
    }, //是否有新版更新
    version_new_update_date: {
        type: Date
    }, //新版更新时间
    version_size: String, //最新版本大小updated
    version_current_version: String, //最新版本
    version_requires_android: String, //最新安装版本要求
    version_description: String, //最新版本描述（新版变化）
    version_xapk: {
        type: Boolean,
        default: false
    }, //是否包含xapk版本信息
    custom_attr: Schema.Types.Mixed, //自定义属性
    meta: Schema.Types.Mixed, //其他描述
    pushbullet: Schema.Types.Mixed, //pushbullet
    enable_google_adsense: {
        type: Boolean,
        default: true
    }, //google adsense
    is_show_beta: {
        type: Boolean,
        default: false
    }, //beta
    un_crawler: {
        type: Boolean,
        default: false
    }, //是否禁止采集
    is_ads_supported: {
        type: Boolean,
        default: false
    }, //是否包含广告
    is_alpha: {
        type: Boolean,
        default: false
    } //是否alpha
}, {
    collection: 'apk',
    versionKey: false
});

//------------------------
//var edirorSchema = {};
//var propertyOrder = 1;
//for (var k in schema.paths) {
//    var type = 'string';
//    switch (schema.paths[k].instance) {
//        case 'Mixed':
//            type = 'object';
//            break;
//        case 'Array':
//            type = 'array';
//            break;
//        case 'Number':
//            type = 'number';
//            break;
//        case 'Boolean':
//            type = 'boolean';
//            break;
//    }
//    propertyOrder++;
//    edirorSchema[k] = {
//        type: type,
//        propertyOrder: propertyOrder
//    }
//}
//edirorSchema.developer_link = {
//    "type": "array",
//    "items": {
//        "type": "object",
//        "properties": {
//            "name": {
//                "type": "string"
//            },
//            "href": {
//                "type": "string"
//            }
//        }
//    }
//};
//
//edirorSchema.interactive_elements
//    = edirorSchema.language
//    = edirorSchema.keyword
//    = edirorSchema.tags
//    = edirorSchema.img
//    = edirorSchema.img_new
//    = edirorSchema.content_rating
//    = {
//    type: "array",
//    format: "table",
//    items: {
//        "type": "string"
//    }
//};
//edirorSchema.description.format = 'textarea';
//console.log(JSON.stringify(edirorSchema, null, 4));
//--------------------------

schema.index({
    create_date: -1
}); //数据添加时间索引
schema.index({
    update_date: -1
}); //数据修改时间索引
schema.index({
    updated: -1
}); //更新时间索引
schema.index({
    completed_date: -1
}); //完成采集时间索引
//schema.index({version_new_update_date: -1});//新版更新时间索引
//schema.index({active_date: -1});//发布时间索引

//schema.index({install_total: -1});//总下载数索引
schema.index({
    install_count: -1
}); //本站下载数索引
//schema.index({review_stars: -1});//评论星级索引

//schema.index({install_total: -1, update_date: -1});//总下数 修改时间索引
//schema.index({review_stars: -1, update_date: -1});//评论星级 修改时间索引

//schema.index({name: 1});//名称搜索索引
schema.index({
    apk_type: 1
}); //类型索引
schema.index({
    package_name: 1
}, {
    unique: true
}); //包名唯一索引
schema.index({
    category: 1
}); //分类索引
schema.index({
    developer: 1
}); //开发者索引
schema.index({
    keyword: 1
}); //关键字索引
schema.index({
    disable: 1
}); //禁用标签
schema.index({
    tags: 1
}); //标签索引
schema.index({
    status_code: 1
}); //状态码索引
schema.index({
    completed: 1
});
schema.index({
    active: 1
});
schema.index({
    enable: 1
});

mongoose.model('apk', schema);
