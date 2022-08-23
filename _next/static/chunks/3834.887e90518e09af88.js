(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3834],{5360:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return x}});var t=r(4051),i=r.n(t),a=r(5893),s=r(7294),l=r(1555),o=r(682),c=r(1608),u=r(8538),d=r(3192),m=r(1058),g=r(5640),h=r(5466),p=r.n(h),b=r(1722);function f(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function y(n,e,r,t,i,a,s){try{var l=n[a](s),o=l.value}catch(c){return void r(c)}l.done?e(o):Promise.resolve(o).then(t,i)}function v(n){return function(){var e=this,r=arguments;return new Promise((function(t,i){var a=n.apply(e,r);function s(n){y(a,t,i,s,l,"next",n)}function l(n){y(a,t,i,s,l,"throw",n)}s(void 0)}))}}function A(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,i,a=[],s=!0,l=!1;try{for(r=r.call(n);!(s=(t=r.next()).done)&&(a.push(t.value),!e||a.length!==e);s=!0);}catch(o){l=!0,i=o}finally{try{s||null==r.return||r.return()}finally{if(l)throw i}}return a}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return f(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(){var n=A(s.useState("consuming-services"),2),e=n[0],t=n[1];s.useEffect((function(){var n=r.g.location.hash;""!==n&&(n=n.replace("#",""),t(n),document.getElementById("ballerina-in-action").scrollIntoView())}),[]);var h=function(n,e){var r=A(s.useState([]),2),t=r[0],a=r[1];return s.useEffect((function(){function r(){return(r=v(i().mark((function r(){return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:(0,b.FP)({theme:"github-light",langs:["ballerina"]}).then((function(r){a(r.codeToHtml(n,e))}));case 1:case"end":return r.stop()}}),r)})))).apply(this,arguments)}!function(){r.apply(this,arguments)}()}),[n,e]),[t]};return(0,a.jsx)(l.Z,{sm:12,children:(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(c.Z,{children:(0,a.jsx)(l.Z,{sm:12,className:"sectionTitle",children:(0,a.jsx)("h2",{id:"ballerina-in-action",children:"Ballerina in action"})})}),(0,a.jsx)(c.Z,{children:(0,a.jsx)(l.Z,{sm:12,children:(0,a.jsxs)(u.Z,{id:"controlled-tab-example",activeKey:e,onSelect:function(n){return t(n)},className:p().balActionTabs,children:[(0,a.jsx)(d.Z,{eventKey:"consuming-services",title:"Consuming services",children:(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(l.Z,{lg:7,md:12,sm:12,className:p().col1,id:"column1",children:(0,a.jsx)("div",{className:p().focusPane,children:(0,a.jsx)("div",{className:"highlight",dangerouslySetInnerHTML:{__html:h('import ballerina/http;\nimport ballerinax/googleapis.sheets;\n  \nconfigurable string githubPAT = ?;\nconfigurable string repository = "ballerina-platform/ballerina-lang";\nconfigurable string sheetsAccessToken = ?;\nconfigurable string spreadSheetId = ?;\nconfigurable string sheetName = "Sheet1";\n\ntype PR record {\n    string url;\n    string title;\n    string state;\n    string created_at;\n    string updated_at;\n};\n\npublic function main() returns error? {\n    http:Client github = check new ("https://api.github.com/repos");\n    map<string> headers = {\n        "Accept": "application/vnd.github.v3+json",\n        "Authorization": "token " + githubPAT\n    };\n    PR[] prs = check github->get(string `/${repository}/pulls`, headers);\n\n    sheets:Client gsheets = check new ({auth: {token: sheetsAccessToken}});\n    check gsheets->appendRowToSheet(spreadSheetId, sheetName,\n            ["Issue", "Title", "State", "Created At", "Updated At"]);\n\n    foreach var {url, title, state, created_at, updated_at} in prs {\n        check gsheets->appendRowToSheet(spreadSheetId, sheetName,\n                [url, title, state, created_at, updated_at]);\n    }\n}',"ballerina")}})})}),(0,a.jsx)(l.Z,{lg:5,md:12,sm:12,className:p().col2,id:"column2",children:(0,a.jsx)("div",{className:p().focusPane,children:(0,a.jsx)(m.Z,{src:"".concat(g.O,"/images/consuming-services-diagram.svg"),width:433,height:655,alt:"consuming-services-diagram"})})})]})}),(0,a.jsx)(d.Z,{eventKey:"working-with-data",title:"Working with data",children:(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(l.Z,{lg:7,md:12,sm:12,className:p().col1,children:(0,a.jsx)("div",{className:p().focusPane,children:(0,a.jsx)("div",{className:"highlight",dangerouslySetInnerHTML:{__html:h('import ballerina/http;\nimport ballerina/io;\n\ntype Country record {\n    string country;\n    int population;\n    string continent;\n    int cases;\n    int deaths;\n};\n\n// Prints the top 10 countries having the highest case-fatality ratio.\npublic function main() returns error? {\n    http:Client diseaseEp = check new ("https://disease.sh/v3");\n    Country[] countries = check diseaseEp->get("/covid-19/countries");\n\n    json summary =\n        from var {country, continent, population, cases, deaths} in countries\n            where population >= 100000 && deaths >= 100\n            let decimal caseFatalityRatio = &lt;decimal&gt;deaths / &lt;decimal&gt;cases * 100\n            order by caseFatalityRatio descending\n            limit 10\n            select {country, continent, population, caseFatalityRatio};\n    io:println(summary);\n}',"ballerina")}})})}),(0,a.jsx)(l.Z,{lg:5,md:12,sm:12,className:p().col2,children:(0,a.jsxs)("div",{className:p().focusPane,children:[(0,a.jsx)(m.Z,{src:"".concat(g.O,"/images/working-with-data-diagram.svg"),width:433,height:456,alt:"working-with-data-diagram"}),(0,a.jsx)("a",{target:"_blank",href:"https://play.ballerina.io/?gist=30a51792b6b4d46c2cbdfdd424fb3b45&file=play.bal",rel:"noreferrer",children:(0,a.jsx)("button",{className:p().playgroundButton,id:"simple11",children:" Try in Playground"})})]})})]})}),(0,a.jsx)(d.Z,{eventKey:"restful-api",title:"RESTful API",children:(0,a.jsx)(c.Z,{children:(0,a.jsx)(l.Z,{sm:12,children:(0,a.jsx)("div",{className:p().focusPane,children:(0,a.jsx)("div",{className:"highlight",dangerouslySetInnerHTML:{__html:h('import ballerina/http;\n\nconfigurable int port = 8080;\n\ntype Album readonly & record {|\n    string id;\n    string title;\n    string artist;\n    decimal price;\n|};\n\ntable <Album> key(id) albums = table [\n        {id: "1", title: "Blue Train", artist: "John Coltrane", price: 56.99},\n        {id: "2", title: "Jeru", artist: "Gerry Mulligan", price: 17.99},\n        {id: "3", title: "Sarah Vaughan and Clifford Brown", artist: "Sarah Vaughan", price: 39.99}\n    ];\n\nservice / on new http:Listener(port) {\n    resource function get albums() returns Album[] {\n        return albums.toArray();\n    }\n\n    resource function get albums/[string id]() returns Album|http:NotFound {\n        Album? album = albums[id];\n        if album is () {\n            return &lt;http:NotFound&gt;{};\n        } else {\n            return album;\n        }\n    }\n\n    resource function post albums(@http:Payload Album album) returns Album {\n        albums.add(album);\n        return album;\n    }\n}',"ballerina")}})})})})}),(0,a.jsx)(d.Z,{eventKey:"grpc-api",title:"gRPC API",children:(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(l.Z,{lg:7,md:12,sm:7,className:p().col1,children:(0,a.jsx)("div",{className:p().focusPane,children:(0,a.jsx)("div",{className:"highlight",dangerouslySetInnerHTML:{__html:h('import ballerina/grpc;\n\nconfigurable int port = 9090;\n\nAlbum[] albums = [\n    {id: "1", title: "Blue Train", artist: "John Coltrane", price: 56.99},\n    {id: "2", title: "Jeru", artist: "Gerry Mulligan", price: 17.99},\n    {id: "3", title: "Sarah Vaughan and Clifford Brown", artist: "Sarah Vaughan", price: 39.99}\n];\n\n@grpc:ServiceDescriptor {\n    descriptor: ROOT_DESCRIPTOR_RECORD_STORE,\n    descMap: getDescriptorMapRecordStore()\n}\nservice "Albums" on new grpc:Listener(port) {\n    remote function getAlbum(string id) returns Album|error {\n        Album[] filteredAlbums = albums.filter(album =&gt; album.id == id);\n        if filteredAlbums.length() &gt; 0 {\n            return filteredAlbums.pop();\n        }\n\n        return error grpc:NotFoundError(string `Cannot find the album for ID ${id}`);\n    }\n\n    remote function addAlbum(Album album) returns Album|error {\n        albums.push(album);\n        return album;\n    }\n\n    remote function listAlbums() returns stream&lt;Album, error?&gt;|error {\n        return albums.toStream();\n    }\n}',"ballerina")}})})}),(0,a.jsx)(l.Z,{lg:5,md:12,sm:12,id:"grpc-api-proto",className:p().col2,children:(0,a.jsx)("div",{className:p().focusPane,children:(0,a.jsx)("div",{className:"highlight",dangerouslySetInnerHTML:{__html:h('syntax = "proto3";\n\nimport "google/protobuf/wrappers.proto";\nimport "google/protobuf/empty.proto";\n\nservice Albums {\n    rpc getAlbum(google.protobuf.StringValue)\n            returns (Album);\n    rpc addAlbum(Album) returns (Album);\n    rpc listAlbums(google.protobuf.Empty)\n            returns (stream Album);\n}\n\nmessage Album {\n    string id = 1;\n    string title = 2;\n    string artist = 3;\n    float price = 4;\n};',"ballerina")}})})})]})}),(0,a.jsx)(d.Z,{eventKey:"graphql-api",title:"GraphQL API",children:(0,a.jsx)(c.Z,{children:(0,a.jsx)(l.Z,{sm:12,children:(0,a.jsx)("div",{className:p().focusPane,children:(0,a.jsx)("div",{className:"highlight",dangerouslySetInnerHTML:{__html:h("import ballerina/graphql;\nimport ballerina/http;\nimport ballerinax/mysql;\nimport ballerinax/mysql.driver as _;\n\nconfigurable string user = ?;\nconfigurable string password = ?;\nconfigurable string host = ?;\nconfigurable int port = ?;\nconfigurable string database = ?;\nconfigurable string apiEndpoint = ?;\n\npublic type Album record {\n    string id;\n    string title;\n    string artist;\n    decimal price;\n    Currency currency = USD;\n};\n\npublic enum Currency {\n    USD,\n    LKR,\n    EUR,\n    GBP\n}\n\nservice / on new graphql:Listener(9000) {\n    private final mysql:Client db;\n    private final http:Client forex;\n    private final Currency baseCurrency = USD;\n\n    function init() returns error? {\n        self.db = check new (host, user, password, database, port);\n        self.forex = check new (apiEndpoint);\n    }\n\n    resource function get album(string id, Currency currency = USD) returns Album|error {\n        Album album = check self.db->queryRow(`SELECT * FROM Albums WHERE id=${id}`);\n        if currency != self.baseCurrency {\n            string query = string `from=${self.baseCurrency}&to=${currency}`;\n            record {decimal rate;} exchange = check self.forex->get(string `/curerncyConversion?${query}`);\n            album.price = album.price * exchange.rate;\n            album.currency = currency;\n        }\n        return album;\n    }\n}","ballerina")}})})})})}),(0,a.jsx)(d.Z,{eventKey:"kafka-consumer-producer",title:"Kafka consumer/producer",children:(0,a.jsx)(c.Z,{children:(0,a.jsx)(l.Z,{sm:12,children:(0,a.jsx)("div",{className:p().focusPane,children:(0,a.jsx)("div",{className:"highlight",dangerouslySetInnerHTML:{__html:h('import ballerina/lang.value;\nimport ballerinax/kafka;\n\nconfigurable string groupId = "order-consumers";\nconfigurable string orders = "orders";\nconfigurable string paymentSuccessOrders = "payment-success-orders";\nconfigurable decimal pollingInterval = 1;\nconfigurable string kafkaEndpoint = kafka:DEFAULT_URL;\n\ntype Order readonly & record {|\n    int id;\n    string desc;\n    PaymentStatus paymentStatus;\n|};\n\nenum PaymentStatus {\n    SUCCESS,\n    FAIL\n}\n\nfinal kafka:ConsumerConfiguration consumerConfigs = {\n    groupId: groupId,\n    topics: [orders],\n    offsetReset: kafka:OFFSET_RESET_EARLIEST,\n    pollingInterval: pollingInterval\n};\n\nservice on new kafka:Listener(kafkaEndpoint, consumerConfigs) {\n    private final kafka:Producer orderProducer;\n\n    function init() returns error? {\n        self.orderProducer = check new (kafkaEndpoint);\n    }\n\n    remote function onConsumerRecord(kafka:ConsumerRecord[] records) returns error? {\n        check from kafka:ConsumerRecord {value} in records\n            let string orderString = check string:fromBytes(value)\n            let Order \'order = check value:fromJsonStringWithType(orderString)\n            where \'order.paymentStatus == SUCCESS\n            do {\n                check self.orderProducer->send({\n                    topic: paymentSuccessOrders,\n                    value: \'order.toString().toBytes()\n                });\n            };\n    }\n}',"ballerina")}})})})})}),(0,a.jsx)(d.Z,{eventKey:"working-with-databases",title:"Working with databases",children:(0,a.jsx)(c.Z,{children:(0,a.jsx)(l.Z,{sm:12,children:(0,a.jsx)("div",{className:p().focusPane,children:(0,a.jsx)("div",{className:"highlight",dangerouslySetInnerHTML:{__html:h("import ballerina/http;\nimport ballerina/sql;\nimport ballerinax/mysql;\nimport ballerinax/mysql.driver as _;\n\nconfigurable string host = ?;\nconfigurable int port = ?;\nconfigurable string user = ?;\nconfigurable string password = ?;\nconfigurable string database = ?;\n\ntype Album record {|\n    string id;\n    string title;\n    string artist;\n    decimal price;\n|};\n\nservice / on new http:Listener(8080) {\n    private final mysql:Client db;\n\n    function init() returns error? {\n        self.db = check new (host, user, password, database, port);\n    }\n\n    resource function get albums() returns Album[]|error? {\n        stream&lt;Album, sql:Error?&gt; albumStream = self.db->query(`SELECT * FROM Albums`);\n        Album[]? albums = check from Album album in albumStream select album;\n        check albumStream.close();\n        return albums;\n    }\n\n    resource function get albums/[string id]() returns Album|http:NotFound|error {\n        Album|sql:Error result = self.db->queryRow(`SELECT * FROM Albums WHERE id = ${id}`);\n        if result is sql:NoRowsError {\n            return &lt;http:NotFound&gt;{};\n        } else {\n            return result;\n        }\n    }\n\n    resource function post album(@http:Payload Album album) returns Album|error {\n        _ = check self.db->execute(`\n            INSERT INTO Albums (id, title, artist, price)\n            VALUES (${album.id}, ${album.title}, ${album.artist}, ${album.price});`);\n        return album;\n    }\n}","ballerina")}})})})})})]})})})]})})}(0,b.EG)("https://unpkg.com/shiki/")},5466:function(n){n.exports={balActionTabs:"BalAction_balActionTabs__4I7yt",col1:"BalAction_col1__SmWC0",col2:"BalAction_col2__f13ek",focusPane:"BalAction_focusPane__SBxpB","line-numbers":"BalAction_line-numbers__95is7","line-numbers-rows":"BalAction_line-numbers-rows__97MFE",code:"BalAction_code__JbxPc",pre:"BalAction_pre__zqD_d",playgroundButton:"BalAction_playgroundButton__adr32"}},6799:function(){},1318:function(){}}]);