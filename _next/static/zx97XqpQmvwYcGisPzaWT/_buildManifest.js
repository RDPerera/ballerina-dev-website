self.__BUILD_MANIFEST=function(e,a,t,s,n,i,r,o,l,c,u,d,g,p,b,f,h,m,k,v,j,w,y,x,_,R,q,E,I,B,D,F,N,S,z,C,O,A,L){return{__rewrites:{beforeFiles:[],afterFiles:[{source:"/learn/build-a-data-service-in-ballerina",destination:"/learn/resources/featured-scenarios/build-a-data-service-in-ballerina"},{source:"/learn/deploy-ballerina-on-kubernetes",destination:"/learn/resources/featured-scenarios/deploy-ballerina-on-kubernetes"},{source:"/learn/manage-data-persistence-with-bal-persist",destination:"/learn/resources/featured-scenarios/manage-data-persistence-with-bal-persist"},{source:"/learn/work-with-data-using-queries-in-ballerina",destination:"/learn/resources/featured-scenarios/work-with-data-using-queries-in-ballerina"},{source:"/learn/write-a-graphql-api-with-ballerina",destination:"/learn/resources/featured-scenarios/write-a-graphql-api-with-ballerina"},{source:"/learn/write-a-grpc-service-with-ballerina",destination:"/learn/resources/featured-scenarios/write-a-grpc-service-with-ballerina"},{source:"/learn/write-a-restful-api-with-ballerina",destination:"/learn/resources/featured-scenarios/write-a-restful-api-with-ballerina"},{source:"/learn/get-started",destination:"/learn/integration/get-started"},{source:"/learn/ballerina-specifications",destination:v},{source:"/learn/language-basics",destination:"/learn/resources/learn-the-language/language-basics"},{source:"/learn/language-walkthrough",destination:"/learn/resources/learn-the-language/language-walkthrough"},{source:"/learn/network-interaction",destination:"/learn/resources/learn-the-language/network-interaction"},{source:"/learn/concurrency",destination:"/learn/resources/learn-the-language/concurrency"},{source:"/learn/advanced-general-purpose-language-features",destination:"/learn/resources/learn-the-language/advanced-general-purpose-language-features"},{source:"/learn/data",destination:"/learn/resources/learn-the-language/data"},{source:"/learn/installation-options",destination:"/learn/get-started/installation-options"},{source:j,destination:"/learn/get-started/install-ballerina/set-up-ballerina"},{source:"/learn/openapi-tool",destination:"/learn/integration-tools/openapi-tool"},{source:"/learn/graphql-tool",destination:"/learn/integration-tools/graphql-tool"},{source:"/learn/asyncapi-tool",destination:"/learn/integration-tools/asyncapi-tool"},{source:"/learn/grpc-tool",destination:"/learn/integration-tools/grpc-tool"},{source:"/learn/strand-dump-tool",destination:"/learn/development-tutorials/troubleshoot-the-runtime/strand-dump-tool"},{source:"/learn/ballerina-profiler",destination:"/learn/development-tutorials/troubleshoot-the-runtime/ballerina-profiler"},{source:"/learn/edi-tool",destination:"/learn/integration-tools/edi-tool"},{source:"/learn/health-tool",destination:"/learn/integration-tools/health-tool"},{source:"/learn/ballerina-shell",destination:"/learn/integration-tools/ballerina-shell"},{source:"/learn/bal-persist-overview",destination:"/learn/development-tutorials/ballerina-persist/bal-persist-overview"},{source:"/learn/persist-cli-tool",destination:"/learn/development-tutorials/ballerina-persist/persist-cli-tool"},{source:"/learn/persist-model",destination:"/learn/development-tutorials/ballerina-persist/persist-model"},{source:"/learn/persist-client-api",destination:"/learn/development-tutorials/ballerina-persist/persist-client-api"},{source:"/learn/supported-data-stores",destination:"/learn/development-tutorials/ballerina-persist/supported-data-stores"},{source:"/learn/call-java-code-from-ballerina",destination:"/learn/development-tutorials/java-interoperability/call-java-code-from-ballerina"},{source:"/learn/the-bindgen-tool",destination:"/learn/development-tutorials/java-interoperability/the-bindgen-tool"},{source:"/learn/ballerina-ffi",destination:"/learn/development-tutorials/java-interoperability/ballerina-ffi"},{source:"/learn/debug-ballerina-programs",destination:"/learn/development-tutorials/test-document-the-code/debug-ballerina-programs"},{source:"/learn/generate-code-documentation",destination:"/learn/development-tutorials/test-document-the-code/generate-code-documentation"},{source:"/learn/manage-dependencies",destination:"/learn/development-tutorials/source-code-dependencies/manage-dependencies"},{source:"/learn/configure-a-sample-ballerina-service",destination:"/learn/development-tutorials/configurability/configure-a-sample-ballerina-service"},{source:"/learn/configure-values",destination:"/learn/development-tutorials/configurability/configure-values"},{source:"/learn/provide-values-to-configurable-variables",destination:"/learn/development-tutorials/configurability/provide-values-to-configurable-variables"},{source:"/learn/observe-ballerina-programs",destination:"/learn/development-tutorials/observability/observe-ballerina-programs"},{source:"/learn/observe-logs",destination:"/learn/development-tutorials/observability/observe-logs"},{source:"/learn/observe-metrics",destination:"/learn/development-tutorials/observability/observe-metrics"},{source:"/learn/observe-tracing",destination:"/learn/development-tutorials/observability/observe-tracing"},{source:"/learn/organize-ballerina-code",destination:"/learn/development-tutorials/source-code-dependencies/organize-ballerina-code"},{source:"/learn/publish-packages-to-ballerina-central",destination:"/learn/development-tutorials/ballerina-central/publish-packages-to-ballerina-central"},{source:"/learn/code-to-cloud-deployment",destination:"/learn/development-tutorials/run-in-the-cloud/code-to-cloud-deployment"},{source:"/learn/azure-functions",destination:"/learn/development-tutorials/run-in-the-cloud/azure-functions"},{source:"/learn/aws-lambda",destination:"/learn/development-tutorials/run-in-the-cloud/aws-lambda"},{source:"/learn/test-ballerina-code/:slug",destination:"/learn/development-tutorials/test-document-the-code/test-ballerina-code/:slug"},{source:"/learn/package-references",destination:"/learn/development-tutorials/source-code-dependencies/package-references"},{source:"/learn/cli-commands/",destination:"/learn/development-tutorials/build-and-run/cli-commands/"},{source:"/learn/update-tool/",destination:"/learn/development-tutorials/build-and-run/update-tool/"},{source:"/learn/ballerina-shell/",destination:"/learn/development-tutorials/build-and-run/ballerina-shell/"},{source:"/learn/style-guide/:slug",destination:"/learn/development-tutorials/source-code-dependencies/style-guide/:slug"},{source:"/learn/style-guide/coding-conventions/:slug",destination:"/learn/references/style-guide/coding-conventions/:slug"},{source:"/learn/graalvm-executable-overview",destination:"/learn/development-tutorials/build-a-graalvm-executable/graalvm-executable-overview"},{source:"/learn/build-the-executable-locally",destination:"/learn/development-tutorials/build-a-graalvm-executable/build-the-executable-locally"},{source:"/learn/build-the-executable-in-a-container",destination:"/learn/development-tutorials/build-a-graalvm-executable/build-the-executable-in-a-container"},{source:"/downloads/swan-lake-release-notes",destination:"/downloads/swan-lake-release-notes/2201.0.2"},{source:"/1.2/learn/",destination:"/1.2/learn/index.html"},{source:"/1.2/learn/api-docs/ballerina/",destination:"/1.2/learn/api-docs/ballerina/index.html"},{source:"/1.1/learn/",destination:"/1.1/learn/index.html"},{source:"/1.1/learn/api-docs/ballerina/",destination:"/1.1/learn/api-docs/ballerina/index.html"},{source:"/1.0/learn/",destination:"/1.0/learn/index.html"},{source:"/1.0/learn/api-docs/ballerina/",destination:"/1.0/learn/api-docs/ballerina/index.html"},{source:"/0.990/learn/api-docs/ballerina/",destination:"/0.990/learn/api-docs/ballerina/index.html"},{source:"/cookie-policy",destination:"/policies/cookie-policy"},{source:"/license-of-site",destination:"/policies/license-of-site"},{source:"/terms-of-service",destination:"/policies/terms-of-service"},{source:"/privacy-policy",destination:"/policies/privacy-policy"},{source:"/security-policy",destination:"/policies/security-policy"},{source:"/trademark-usage-policy",destination:"/policies/trademark-usage-policy"},{source:"/code-of-conduct",destination:"/policies/code-of-conduct"},{source:"/CODEOWNERS",destination:"/policies/CODEOWNERS"},{source:"/spec/lang/2022R2/",destination:"/spec/lang/2022R2/index.html"},{source:"/spec/lang/2022R1/",destination:"/spec/lang/2022R1/index.html"},{source:"/spec/lang/2021R1/",destination:"/spec/lang/2021R1/index.html"},{source:"/spec/lang/2020R1/",destination:"/spec/lang/2020R1/index.html"},{source:"/spec/lang/2019R3/",destination:"/spec/lang/2019R3/index.html"},{source:"/spec/lang/2019R2/",destination:"/spec/lang/2019R2/index.html"},{source:"/spec/lang/2019R1/",destination:"/spec/lang/2019R1/index.html"},{source:"/learn/supported-data-formats",destination:"/learn/integration/supported-data-formats"},{source:"/learn/supported-network-protocols",destination:"/learn/integration/supported-network-protocols"},{source:"/learn/pre-built-integrations",destination:w},{source:"/learn/pre-built-integrations/google-sheets-to-salesforce-integration",destination:y},{source:"/learn/pre-built-integrations/kafka-to-salesforce-integration",destination:x},{source:"/learn/pre-built-integrations/mysql-to-salesforce-integration",destination:_},{source:"/learn/pre-built-integrations/gmail-to-salesforce-integration",destination:R},{source:"/learn/pre-built-integrations/salesforce-to-twilio-integration",destination:q},{source:"/learn/pre-built-integrations/news-api-to-email-integration",destination:E},{source:"/learn/pre-built-integrations/github-to-email-integration",destination:I},{source:"/learn/pre-built-integrations/shopify-to-outlook-integration",destination:B},{source:"/learn/pre-built-integrations/google-drive-to-onedrive-integration",destination:D},{source:"/learn/pre-built-integrations/hubspot-contacts-to-google-contacts-integration",destination:F},{source:"/learn/pre-built-integrations/ftp-edi-message-to-salesforce-opportunity",destination:N},{source:"/learn/integration-tutorials",destination:S},{source:"/learn/integration-tutorials/:slug",destination:"/learn/integration/integration-tutorials/:slug"}],fallback:[]},"/":["static/chunks/0c428ae2-eee82bb3c5d32080.js",e,t,l,a,"static/chunks/2904-6f61b742902c9bb5.js","static/css/4c07ecffa1a56ab5.css","static/chunks/pages/index-48e417e64d7a9a03.js"],"/404":[e,a,i,"static/chunks/pages/404-833860d699916751.js"],"/_error":["static/chunks/pages/_error-25839e52160ad85d.js"],"/case-studies/[slug]":[e,s,n,c,a,p,i,"static/chunks/pages/case-studies/[slug]-7e727a9bbc352296.js"],"/community":[e,a,"static/css/6c35905c4959cb5b.css","static/chunks/pages/community-445f5161e1e1cc75.js"],"/community/active-proposals":[e,s,n,a,i,"static/chunks/pages/community/active-proposals-02a7b86e5993ec40.js"],"/community/ballerina-newsletter":[e,a,z,"static/chunks/pages/community/ballerina-newsletter-77bc61a4836890bc.js"],"/community/ballerina-tech-talk":[e,t,l,a,"static/css/897ea81fc2b1c9b9.css","static/chunks/pages/community/ballerina-tech-talk-cfd18bbe1aa04ba7.js"],"/community/events":[e,t,r,o,a,i,"static/chunks/pages/community/events-41a6d6ffbee2f41b.js"],"/community/newsletter/[...slug]":[e,C,a,z,"static/chunks/pages/community/newsletter/[...slug]-c1c0064ca705312d.js"],"/community/resources":[e,t,r,o,a,"static/css/5eb2e70535b36f45.css","static/chunks/pages/community/resources-c26f97304ecb2e65.js"],"/downloads":[e,a,"static/css/cf987da0d570abca.css","static/chunks/pages/downloads-de5fefe00acefdce.js"],"/downloads/0.9.x-release-notes/[...slug]":[e,t,s,n,u,l,c,k,a,m,d,"static/chunks/pages/downloads/0.9.x-release-notes/[...slug]-48189daaa6f0aade.js"],"/downloads/1.0.x-release-notes/[...slug]":[e,t,s,n,u,l,c,k,a,m,d,"static/chunks/pages/downloads/1.0.x-release-notes/[...slug]-7ae9b1620c4a3391.js"],"/downloads/1.1.x-release-notes/[...slug]":[e,t,s,n,u,l,c,k,a,m,d,"static/chunks/pages/downloads/1.1.x-release-notes/[...slug]-54cdf24b94f5c4ad.js"],"/downloads/1.2.x-release-notes/[...slug]":[e,t,s,n,u,l,c,a,m,d,"static/chunks/pages/downloads/1.2.x-release-notes/[...slug]-8afa0963e3d8dde7.js"],"/downloads/archived":[e,t,l,a,i,"static/chunks/pages/downloads/archived-55f519b71e13ef49.js"],"/downloads/installation-options":[e,s,n,c,O,a,p,i,"static/chunks/pages/downloads/installation-options-5ba8e6b432326f05.js"],"/downloads/swan-lake-release-notes/[...slug]":[e,t,s,n,u,l,c,a,m,d,"static/chunks/pages/downloads/swan-lake-release-notes/[...slug]-2668e5fb1d159c87.js"],"/downloads/verify-ballerina-artifacts":[e,s,n,c,O,a,p,i,"static/chunks/pages/downloads/verify-ballerina-artifacts-b7c24ad29fbacc72.js"],"/hacktoberfest":[e,a,"static/css/cf2780ba7eb8d127.css","static/chunks/pages/hacktoberfest-ab7e7c53092c5e53.js"],"/learn":[e,a,"static/css/60a31c822b1aa0c2.css","static/chunks/pages/learn-acfbd0defa69dd7a.js"],"/learn/by-example":[e,t,u,l,a,A,d,"static/chunks/pages/learn/by-example-72da7399ca959355.js"],"/learn/by-example/[bbe]":[e,t,u,l,C,a,A,d,"static/chunks/pages/learn/by-example/[bbe]-dacf1f5dfa04f209.js"],"/learn/development-tutorials/[...slug]":[e,t,s,n,u,l,c,f,a,p,h,d,"static/chunks/pages/learn/development-tutorials/[...slug]-99a6773e9bf9fab4.js"],"/learn/enterprise-integration-patterns":[e,a,"static/css/afd629993e4bea86.css","static/chunks/pages/learn/enterprise-integration-patterns-7b2e800356224eda.js"],"/learn/enterprise-integration-patterns/[pattern]":[g,e,s,a,"static/css/501a6c489ebaf75c.css","static/chunks/pages/learn/enterprise-integration-patterns/[pattern]-95e6390f0523b3a5.js"],"/learn/integration/integration-tutorials":[e,a,L,"static/chunks/pages/learn/integration/integration-tutorials-0f6027d16dfa1292.js"],"/learn/integration/integration-tutorials/[slug]":[e,s,n,c,a,p,i,"static/chunks/pages/learn/integration/integration-tutorials/[slug]-0b05032b32ce872c.js"],"/learn/integration/pre-built-integrations":[e,a,L,"static/chunks/pages/learn/integration/pre-built-integrations-3b0c09210f5507b0.js"],"/learn/integration/pre-built-integrations/ftp-edi-message-to-salesforce-opportunity":[g,e,t,r,o,b,a,i,"static/chunks/pages/learn/integration/pre-built-integrations/ftp-edi-message-to-salesforce-opportunity-061b2da4d72e182b.js"],"/learn/integration/pre-built-integrations/github-to-email-integration":[g,e,t,r,o,b,a,i,"static/chunks/pages/learn/integration/pre-built-integrations/github-to-email-integration-16dd3d84901512f8.js"],"/learn/integration/pre-built-integrations/gmail-to-salesforce-integration":[g,e,t,r,o,b,a,i,"static/chunks/pages/learn/integration/pre-built-integrations/gmail-to-salesforce-integration-4c566ae151272c12.js"],"/learn/integration/pre-built-integrations/google-drive-to-onedrive-integration":[g,e,t,r,o,b,a,i,"static/chunks/pages/learn/integration/pre-built-integrations/google-drive-to-onedrive-integration-b5a94f54300912ec.js"],"/learn/integration/pre-built-integrations/google-sheets-to-salesforce-integration":[g,e,t,r,o,b,a,i,"static/chunks/pages/learn/integration/pre-built-integrations/google-sheets-to-salesforce-integration-18b5b06f6aa39865.js"],"/learn/integration/pre-built-integrations/hubspot-contacts-to-google-contacts-integration":[g,e,t,r,o,b,a,i,"static/chunks/pages/learn/integration/pre-built-integrations/hubspot-contacts-to-google-contacts-integration-a3c10686746b1478.js"],"/learn/integration/pre-built-integrations/kafka-to-salesforce-integration":[g,e,t,r,o,b,a,i,"static/chunks/pages/learn/integration/pre-built-integrations/kafka-to-salesforce-integration-4efc200a863be27c.js"],"/learn/integration/pre-built-integrations/mysql-to-salesforce-integration":[g,e,t,r,o,b,a,i,"static/chunks/pages/learn/integration/pre-built-integrations/mysql-to-salesforce-integration-50b68601393f4d9c.js"],"/learn/integration/pre-built-integrations/news-api-to-email-integration":[g,e,t,r,o,b,a,i,"static/chunks/pages/learn/integration/pre-built-integrations/news-api-to-email-integration-1e8254e15ecb1e24.js"],"/learn/integration/pre-built-integrations/salesforce-to-twilio-integration":[g,e,t,r,o,b,a,i,"static/chunks/pages/learn/integration/pre-built-integrations/salesforce-to-twilio-integration-79eeff6ab3691713.js"],"/learn/integration/pre-built-integrations/shopify-to-outlook-integration":[g,e,t,r,o,b,a,i,"static/chunks/pages/learn/integration/pre-built-integrations/shopify-to-outlook-integration-c3b1ea2d8f6cde71.js"],"/learn/integration/[...slug]":[e,t,s,n,u,l,c,f,a,p,h,d,"static/chunks/pages/learn/integration/[...slug]-d754110f855eaf2e.js"],"/learn/integration-tools/[...slug]":[e,t,s,n,u,l,c,f,a,p,h,d,"static/chunks/pages/learn/integration-tools/[...slug]-b9934bf7c7f0b3b2.js"],"/learn/references/ballerina-specifications":[e,t,s,n,u,l,c,f,a,p,h,d,"static/chunks/pages/learn/references/ballerina-specifications-c27459191a2e938c.js"],"/learn/resources/[...slug]":[e,t,s,n,u,l,c,f,a,p,h,d,"static/chunks/pages/learn/resources/[...slug]-8ba205cb6722b0db.js"],"/policies/[slug]":[e,s,n,c,a,p,i,"static/chunks/pages/policies/[slug]-e3b98ec705720135.js"],"/spec/lang/draft":[e,"static/chunks/pages/spec/lang/draft-95a48cd625baaf69.js"],"/spec/[slug]":[e,s,n,"static/chunks/pages/spec/[slug]-3876bd6c6ee6e808.js"],"/usecases/ai":[e,t,s,n,r,o,a,"static/css/64df110820596619.css","static/chunks/pages/usecases/ai-000d1df86b63d519.js"],"/usecases/b2b":[e,s,n,a,"static/css/2ebf9d6baf84c804.css","static/chunks/pages/usecases/b2b-55268bab0c01cbb8.js"],"/usecases/data-oriented-programming":[e,s,n,a,"static/css/76522d10d68fff14.css","static/chunks/pages/usecases/data-oriented-programming-d7333a46bb1d3565.js"],"/usecases/eda":[e,t,s,n,r,o,a,"static/css/c5ec23d33a222535.css","static/chunks/pages/usecases/eda-9891955c4db915cb.js"],"/usecases/healthcare":[e,s,n,a,"static/css/3a0e16dc35ecd6b4.css","static/chunks/pages/usecases/healthcare-f290e2507d9d8182.js"],"/usecases/integration":[e,s,n,a,"static/css/cb04a2bb7373c732.css","static/chunks/pages/usecases/integration-88fd7a4a4947290a.js"],"/usecases/integration/ballerina-vs-apollo-for-graphql":[e,t,s,n,r,o,a,"static/css/8c1f2ee15c568d88.css","static/chunks/pages/usecases/integration/ballerina-vs-apollo-for-graphql-7851745347060150.js"],"/usecases/integration/ballerina-vs-java-for-data-oriented-programming":[e,t,s,n,r,o,a,"static/css/d933453da3a37990.css","static/chunks/pages/usecases/integration/ballerina-vs-java-for-data-oriented-programming-223c0f317cde0049.js"],"/usecases/microservices":[e,s,n,a,"static/css/a50d0b43c48751fe.css","static/chunks/pages/usecases/microservices-03f42a44f4a163bc.js"],"/why-ballerina/[...slug]":[e,t,s,n,u,l,c,f,a,p,h,d,"static/chunks/pages/why-ballerina/[...slug]-6a5fdc3f0eebb658.js"],sortedPages:["/","/404","/_app","/_error","/case-studies/[slug]","/community","/community/active-proposals","/community/ballerina-newsletter","/community/ballerina-tech-talk","/community/events","/community/newsletter/[...slug]","/community/resources","/downloads","/downloads/0.9.x-release-notes/[...slug]","/downloads/1.0.x-release-notes/[...slug]","/downloads/1.1.x-release-notes/[...slug]","/downloads/1.2.x-release-notes/[...slug]","/downloads/archived","/downloads/installation-options","/downloads/swan-lake-release-notes/[...slug]","/downloads/verify-ballerina-artifacts","/hacktoberfest",j,"/learn/by-example","/learn/by-example/[bbe]","/learn/development-tutorials/[...slug]","/learn/enterprise-integration-patterns","/learn/enterprise-integration-patterns/[pattern]",S,"/learn/integration/integration-tutorials/[slug]",w,N,I,R,D,y,F,x,_,E,q,B,"/learn/integration/[...slug]","/learn/integration-tools/[...slug]",v,"/learn/resources/[...slug]","/policies/[slug]","/spec/lang/draft","/spec/[slug]","/usecases/ai","/usecases/b2b","/usecases/data-oriented-programming","/usecases/eda","/usecases/healthcare","/usecases/integration","/usecases/integration/ballerina-vs-apollo-for-graphql","/usecases/integration/ballerina-vs-java-for-data-oriented-programming","/usecases/microservices","/why-ballerina/[...slug]"]}}("static/chunks/9733-caeb053dcf01b5fd.js","static/chunks/4564-93a34a880b3ed353.js","static/chunks/2788-7f829084e4503c21.js","static/chunks/8999-b1f394634e8708da.js","static/chunks/5530-9e94516ef785d153.js","static/css/ed928f4e0113510f.css","static/chunks/1917-1177dc76d340fd0b.js","static/chunks/3665-80481f86e9030e6f.js","static/chunks/4862-0277ec1334e5346a.js","static/chunks/2092-643ce819261b95c6.js","static/chunks/5607-2558859a3efb47ff.js","static/css/95db1c06d9f84932.css","static/chunks/1bfc9850-b3e5aadfdd39d81b.js","static/chunks/5795-8b2de2ed37019d2d.js","static/chunks/6543-878b70ace8717a1e.js","static/chunks/9770-12b3f13fd2a2db4e.js","static/chunks/6663-3a71ee800f006a30.js","static/chunks/9360-d4321a713d78cbdf.js","static/chunks/1435-c1c3807fd0dff16d.js","/learn/references/ballerina-specifications","/learn","/learn/integration/pre-built-integrations","/learn/integration/pre-built-integrations/google-sheets-to-salesforce-integration","/learn/integration/pre-built-integrations/kafka-to-salesforce-integration","/learn/integration/pre-built-integrations/mysql-to-salesforce-integration","/learn/integration/pre-built-integrations/gmail-to-salesforce-integration","/learn/integration/pre-built-integrations/salesforce-to-twilio-integration","/learn/integration/pre-built-integrations/news-api-to-email-integration","/learn/integration/pre-built-integrations/github-to-email-integration","/learn/integration/pre-built-integrations/shopify-to-outlook-integration","/learn/integration/pre-built-integrations/google-drive-to-onedrive-integration","/learn/integration/pre-built-integrations/hubspot-contacts-to-google-contacts-integration","/learn/integration/pre-built-integrations/ftp-edi-message-to-salesforce-opportunity","/learn/integration/integration-tutorials","static/css/790da870dc874ef8.css","static/chunks/7856-a90eb2f65c5ee39c.js","static/chunks/4734-db9ac521c4e26c07.js","static/chunks/2775-ee73c97ac46ff07a.js","static/css/c12e1f77ee42d761.css"),self.__BUILD_MANIFEST_CB&&self.__BUILD_MANIFEST_CB();