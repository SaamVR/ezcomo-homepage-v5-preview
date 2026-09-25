(() => {
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => [...r.querySelectorAll(s)];

  const templates = {
    threads:{
      name:'Threads',brand:'THREADS',visual:'Built for the city after dark.',eyebrow:'NEW DROP 06',
      body:'Everyday pieces with a sharper point of view.',cta:'Shop collection',secondary:'View lookbook →',
      featured:'Featured products',products:[['Studio Tee','৳1,490','tee'],['Canvas Tote','৳990','tote'],['Rib Mug','৳690','mug']],
      templateVisual:'Objects for everyday movement.',desc:'Editorial apparel with room for campaigns, collections and strong visual identity.',bn:'কালেকশন, ভ্যারিয়েন্ট আর ব্র্যান্ডের গল্প—ফ্যাশন বিক্রির জন্য সাজানো স্টোরফ্রন্ট।',bnVisual:'শহরের ছন্দে, নিজের স্টাইল।',bnEyebrow:'নতুন কালেকশন ০৬',bnBody:'প্রতিদিনের পোশাক—সহজ, স্বতন্ত্র, আর একটু বেশি নিজের মতো।',bnCta:'কালেকশন দেখুন',bnSecondary:'লুকবুক দেখুন →',bnFeatured:'বাছাই করা পণ্য'
    },
    electronics:{
      name:'Electronics',brand:'NEXUS',visual:'Technology that earns its place.',eyebrow:'FEATURED / PERFORMANCE',
      body:'Clear specifications. Less noise. Better everyday devices.',cta:'Shop devices',secondary:'Compare models →',
      featured:'Popular right now',products:[['Arc Headphones','৳5,990','headphones'],['Nova Phone','৳28,900','phone'],['Key Mini','৳3,490','keyboard']],
      templateVisual:'Compare less. Choose better.',desc:'Product-first merchandising for shoppers comparing features and specifications.',bn:'ফিচার, স্পেসিফিকেশন আর তুলনা—ইলেকট্রনিক্স কেনার সিদ্ধান্ত সহজ করার মতো স্টোর।',bnVisual:'প্রযুক্তি, যা সত্যিই কাজে লাগে।',bnEyebrow:'বাছাই · পারফরম্যান্স',bnBody:'স্পষ্ট স্পেসিফিকেশন, কম ঝামেলা—প্রতিদিনের জন্য ঠিকঠাক ডিভাইস।',bnCta:'ডিভাইস দেখুন',bnSecondary:'মডেল তুলনা করুন →',bnFeatured:'এখন জনপ্রিয়'
    },
    crafts:{
      name:'Crafts',brand:'HANDMADE',visual:'Made slowly. Kept for years.',eyebrow:'MAKER / PROCESS',
      body:'Useful objects shaped by hand, material and small details.',cta:'Shop handmade',secondary:'Meet the makers →',
      featured:'From the studio',products:[['Clay Vessel','৳1,250','pot'],['Market Tote','৳890','tote'],['Block Print','৳1,690','print']],
      templateVisual:'Every object carries a handprint.',desc:'Maker-led storytelling for handmade products where process and origin matter.',bn:'হাতে তৈরি পণ্যের কারিগর, উপকরণ আর গল্পকে সামনে আনার মতো স্টোর।',bnVisual:'হাতে তৈরি। বহুদিনের জন্য।',bnEyebrow:'কারিগর · প্রক্রিয়া',bnBody:'হাতের কাজ, ভালো উপকরণ আর ছোট ছোট যত্নে তৈরি ব্যবহারযোগ্য জিনিস।',bnCta:'হ্যান্ডমেড পণ্য দেখুন',bnSecondary:'কারিগরদের গল্প →',bnFeatured:'স্টুডিও থেকে'
    },
    food:{
      name:'Food',brand:'TABLE',visual:'Good food, ready when you are.',eyebrow:'TODAY / FRESH',
      body:'Fresh picks, clear prices and an ordering path that stays simple.',cta:'Order today',secondary:'See full menu →',
      featured:'Today’s favourites',products:[['Harvest Bowl','৳390','bowl'],['Citrus Drink','৳220','drink'],['Granola Pack','৳480','pack']],
      templateVisual:'Fresh picks, easy ordering.',desc:'Menu-first presentation that keeps products easy to browse and order.',bn:'খাবার দ্রুত দেখা, দাম বোঝা আর সহজে অর্ডার করার জন্য মেনু-কেন্দ্রিক স্টোর।',bnVisual:'ভালো খাবার, যখন আপনার দরকার।',bnEyebrow:'আজকের · টাটকা',bnBody:'টাটকা পছন্দ, পরিষ্কার দাম, অর্ডারও সহজ।',bnCta:'আজই অর্ডার করুন',bnSecondary:'পুরো মেনু দেখুন →',bnFeatured:'আজকের পছন্দ'
    }
  };


  const directions = {
    fashion:{
      name:'Fashion',slug:'fashion',
      desc:'Editorial catalog structure for collections, variants and product-led storytelling.',
      bn:'কালেকশন, ভ্যারিয়েন্ট আর পণ্যের গল্প—ফ্যাশন ব্র্যান্ডের বিক্রির ধরন মাথায় রেখে সাজানো স্টোরফ্রন্ট।',
      model:'Product catalog',flow:'Collection → Product → Cart',blocks:'Hero · Collections · Product grid · Cart',bnModel:'পণ্যের ক্যাটালগ',bnFlow:'কালেকশন → পণ্য → কার্ট',bnBlocks:'হিরো · কালেকশন · প্রোডাক্ট গ্রিড · কার্ট'
    },
    booking:{
      name:'Booking',slug:'booking',
      desc:'Service storefront built around service choice, staff, dates and available time slots.',
      bn:'সার্ভিস বেছে নেওয়া থেকে তারিখ, সময় ও স্টাফ নির্বাচন—বুকিংয়ের পুরো যাত্রা এক জায়গায়।',
      model:'Appointment schedule',flow:'Service → Date → Time → Confirm',blocks:'Services · Calendar · Slots · Staff',bnModel:'অ্যাপয়েন্টমেন্ট সূচি',bnFlow:'সার্ভিস → তারিখ → সময় → নিশ্চিত',bnBlocks:'সার্ভিস · ক্যালেন্ডার · সময় · স্টাফ'
    },
    hotel:{
      name:'Hotel',slug:'hotels',
      desc:'Hospitality structure where dates, guests, room inventory and availability drive the journey.',
      bn:'তারিখ, অতিথি সংখ্যা, রুম আর খালি থাকার তথ্যকে কেন্দ্র করে সাজানো হোটেল বুকিং অভিজ্ঞতা।',
      model:'Room inventory',flow:'Dates → Room → Guest → Reserve',blocks:'Search · Rooms · Amenities · Availability',bnModel:'রুম ইনভেন্টরি',bnFlow:'তারিখ → রুম → অতিথি → বুকিং',bnBlocks:'সার্চ · রুম · সুবিধা · খালি থাকার তথ্য'
    },
    digital:{
      name:'Digital',slug:'digital-downloads',
      desc:'Digital-product storefront for previews, bundles, licences and post-payment delivery.',
      bn:'প্রিভিউ, বান্ডল, লাইসেন্স আর পেমেন্টের পর ফাইল ডেলিভারি—ডিজিটাল পণ্যের জন্য তৈরি স্টোরফ্রন্ট।',
      model:'Digital products',flow:'Preview → Licence → Pay → Download',blocks:'Library · Bundles · Licence · Delivery',bnModel:'ডিজিটাল পণ্য',bnFlow:'প্রিভিউ → লাইসেন্স → পেমেন্ট → ডাউনলোড',bnBlocks:'লাইব্রেরি · বান্ডল · লাইসেন্স · ডেলিভারি'
    }
  };

  const i18n = {
    en:{
      announcement:'Built for Bangladesh commerce — bKash, Nagad, COD and Pathao workflows.',announcementCta:'Explore storefronts',
      navWhy:'Product',navFeatures:'Features',navTemplates:'Storefronts',navIntegrations:'Local commerce',navPricing:'Pricing',login:'Log in',startFree:'Start free',
      heroEyebrow:'Commerce built around Bangladesh',heroTitle:'Stop losing sales <em>inside the DMs.</em>',heroLede:'Give customers a branded store they can browse on their own, while products, orders, payments and delivery stay connected behind it.',
      createStore:'Create free store',seeStores:'Try the editor',trustNoCode:'No code required',trustTemplate:'Start from a template',trustLocal:'Local commerce workflows',
      paymentReady:'PAYMENT OPTIONS',configuredIn:'Configured in your workspace',structuredOrder:'STRUCTURED ORDER',readyFulfilment:'Ready for fulfilment',proofLabel:'ONE CONNECTED PATH',proofIntro:'From storefront to fulfilment without losing the thread.',proofStore:'Storefront',proofStoreNote:'Browse and choose',proofCheckout:'Checkout',proofCheckoutNote:'Payment method captured',proofOrder:'Order',proofOrderNote:'Structured in the workspace',proofFulfilment:'Fulfilment',proofFulfilmentNote:'The next action stays visible',
      bdKicker:'Built for Bangladesh',bdTitle:'Your business shouldn’t need a <em>foreign workaround.</em>',bdCopy:'EZComo is designed around the payment habits, delivery workflows and storefront expectations local merchants already work with.',
      bdPay:'Sell in familiar ways',bdPayCopy:'Offer bKash, Nagad and cash on delivery in the storefront.',bdDeliver:'Move orders into delivery',bdDeliverCopy:'Pathao merchant-API booking is available when configured.',bdBrand:'Own the customer experience',bdBrandCopy:'Use a branded storefront and connect an eligible custom domain.',bdTogether:'Keep operations together',bdTogetherCopy:'Products, orders, store settings and selling setup live in one workspace.',
      painKicker:'The shift',painTitle:'From message chaos to a store customers can use.',painIntro:'Social channels are great for discovery. They become painful when every product question, order detail and delivery update has to be handled manually.',beforeLabel:'BEFORE · DMs',afterLabel:'AFTER · EZCOMO',chat1:'Price please?',chat2:'Which size is available?',chat3:'Do you have COD?',chat4:'Where is my order?',chaosFoot:'Important order details scattered across conversations.',system1:'Product details visible',system2:'Order captured',system3:'Payment method recorded',system4:'Fulfilment workflow',done:'ready',systemFoot:'One structured merchant workflow',
      howKicker:'How it works',howTitle:'Three steps. No blank-canvas anxiety.',howCopy:'Start from something complete, make it yours, then run the business from the same system.',step1:'Pick a storefront',step1Copy:'Choose a starting point shaped for the way your category sells.',step2:'Add your business',step2Copy:'Products, imagery, brand details, payment options and delivery setup.',step3:'Publish and manage',step3Copy:'Receive structured orders and manage the work behind each sale.',
      bridgeBefore:'BEFORE',bridgeInbox:'Orders trapped in DMs',bridgeStore:'STOREFRONT',bridgeStoreTitle:'Customers browse and order themselves',bridgeSystem:'EZCOMO',bridgeSystemTitle:'The work behind each sale stays structured',featuresKicker:'Try the CMS',featuresTitle:'Build the store. Then run what happens next.',featuresCopy:'Start with the storefront itself. Edit the page, place an order, then follow the same sale into the operational workflow.',builderLabel:'01 · STOREFRONT EDITOR',builderTitle:'Edit a complete storefront right here.',builderCopy:'Move through a real page structure, rewrite the content, reposition content groups and restyle sections without touching code.',builderHint:'Drag a section on the left — the storefront preview reorders live.',editorTitle:'Store editor',editorPreview:'Preview',editorLive:'Live changes',editorReset:'Reset demo',editorPage:'PAGE',editorAnnouncement:'Announcement',editorHeader:'Header',editorHero:'Hero',editorCategories:'Categories',editorFeatured:'Featured products',editorPromo:'Collection promo',editorNew:'New arrivals',editorStory:'Brand story',editorBenefits:'Store benefits',editorNewsletter:'Newsletter',editorFooter:'Footer',editorTry:'Try it',editorTryHint:'Drag sections → edit → move content',editorSelected:'SELECTED',editorContentGroup:'Content group',editorText:'Focused text',editorColor:'Section color',editorPosition:'Position',editorHelp:'Select any text line to rewrite it. Drag the handle to move the whole content group.',payTitle:'Payments that make sense locally.',payCopy:'bKash, Nagad and cash-on-delivery options, with automated bKash checkout available when connected.',deliveryTitle:'Orders that move into fulfilment.',deliveryCopy:'Book Pathao from the order workflow when configured, with additional courier setup paths available.',active:'active',workflowLabel:'02 · ORDER WORKFLOW · SIMULATED',workflowTitle:'Now watch what happens after a customer clicks Order.',workflowCopy:'The storefront hands the sale into the system: payment, order, fulfilment, inventory and margin tracking become one visible sequence.',workflowRun:'Run order workflow',workflowWaiting:'Waiting',workflowRunning:'Running',workflowComplete:'Complete',workflowNowLabel:'NOW HAPPENING',workflowNowReady:'Ready to run the order.',workflowNowDone:'Order complete — all actions recorded.',placeOrder:'Place order',workflowDisclaimer:'Illustrative demo data',automationRunner:'AUTOMATION RUNNER',stepPayment:'PAYMENT',stepPaymentTitle:'Payment received',stepOrder:'ORDER',stepOrderTitle:'Order received',stepCourier:'FULFILMENT',stepCourierTitle:'Book courier',bookCourier:'Book courier',stepBookedTitle:'Courier booked',stepPickup:'PICKUP',stepPickupTitle:'Courier picked up',collected:'Collected',stepInventory:'INVENTORY',stepInventoryTitle:'Stock updated',stepProfit:'MARGIN',stepProfitTitle:'Profit booked',workflowResult:'Order complete — every next action is visible.',workflowResultNote:'Example margin assumes merchant cost data is configured.',workspaceLabel:'03 · MERCHANT WORKSPACE',workspaceTitle:'The storefront and the work behind it stay connected.',workspaceCopy:'One operating surface for products, orders, payment setup and fulfilment status—shown here with illustrative sample data.',domainTitle:'Your own branded domain.',domainCopy:'Eligible paid plans can connect a custom domain after DNS setup and verification.',
      templatesKicker:'Storefront structures',templatesTitle:'Different businesses need different storefront structures.',templatesCopy:'Switch business models to see how the page architecture, customer flow and primary action change — not just the colors.',fashionDesc:'Catalog + variants',bookingDesc:'Services + time slots',hotelDesc:'Rooms + availability',digitalDesc:'Files + licences',selectedDirection:'SELECTED STRUCTURE',directionNote:'Illustrative demo content — the structure is the point.',moreStructures:'Also built for',openPreview:'Open preview',useTemplate:'Use this structure',
      localKicker:'Built to sell here',localTitle:'Local commerce should feel native, not patched together.',localCopy:'EZComo is designed around the payment habits, delivery workflows and storefront expectations Bangladeshi merchants already work with.',localPayTitle:'Familiar checkout',localPayCopy:'bKash, Nagad and cash on delivery can appear in the storefront.',localDeliveryTitle:'Delivery in the order flow',localDeliveryCopy:'Pathao merchant-API booking is available when configured.',localBrandTitle:'Your storefront, your domain',localBrandCopy:'Eligible paid plans can connect a verified custom domain.',connectionState:'CONNECTION STATE',connectionTitle:'Know what is active before you depend on it.',available:'available',setup:'setup',payments:'PAYMENTS',delivery:'DELIVERY',storefront:'STOREFRONT',autoConnected:'Automated when connected',storeOption:'Storefront option',merchantApi:'Merchant API booking',setupAvailable:'Setup available',customDomain:'Custom domain',eligiblePlans:'Eligible paid plans',responsiveStore:'Responsive store',allScreens:'Phone to desktop',
      calcKicker:'Illustrative cost check',calcTitle:'Use your numbers, not ours.',calcCopy:'Compare the percentage cost you currently enter with an EZComo plan amount you enter. This tool does not assume a competitor fee or promise savings.',calcNote:'Illustrative only — verify real plan and provider charges before deciding.',monthlySales:'Monthly sales',currentCost:'Current platform / manual cost',planInput:'EZComo plan amount to compare',annualDifference:'Illustrative annual difference',
      pricingKicker:'Pricing',pricingTitle:'Start free. Upgrade when the business needs more.',pricingCopy:'Current prices and limits are published on the plans page so you can compare before committing.',pricingPointStore:'Launch the storefront',pricingPointOrders:'Run structured orders',pricingPointLocal:'Connect local commerce',pricingActionNote:'Start with the product before choosing a paid plan.',comparePlans:'Compare current plans',
      faqTitle:'The questions that matter before you move beyond DMs.',faqStart:'Getting started',faqPayments:'Payments',faqDelivery:'Delivery',faqDomains:'Domains',anotherQuestion:'Have another question?',talkSupport:'Talk to support',
      closingKicker:'Your next storefront',closingTitle:'Let customers shop while you get back to running the business.',closingCopy:'Pick a direction, start free and carry that storefront choice directly into setup.',browseAgain:'Browse storefronts again',
      product:'Product',support:'Support',helpCenter:'Help center',legal:'Legal',privacy:'Privacy',terms:'Terms',billing:'Billing policy',footerTag:'A storefront customers can use. A workspace merchants can run.',previewLabel:'Design preview · no merchant data is changed here.',stickyText:'Ready to give customers somewhere better than the DM inbox?'
    },
    bn:{
      announcement:'বাংলাদেশে অনলাইন বিক্রির জন্য — bKash, Nagad, COD আর Pathao-সহ।',announcementCta:'দেখে নিন',
      navWhy:'প্রোডাক্ট',navFeatures:'ফিচার',navTemplates:'স্টোরফ্রন্ট',navIntegrations:'লোকাল কমার্স',navPricing:'মূল্য',login:'লগ ইন',startFree:'ফ্রি শুরু করুন',
      heroEyebrow:'বাংলাদেশের অনলাইন ব্যবসার জন্য',heroTitle:'DM-এ অর্ডার সামলাতে সামলাতে <em>বিক্রি হারাবেন না।</em>',heroLede:'ক্রেতাকে দিন নিজের মতো দেখে, পছন্দ করে অর্ডার করার একটি ব্র্যান্ডেড স্টোর। আর পণ্য, অর্ডার, পেমেন্ট ও ডেলিভারির কাজ রাখুন একই জায়গায়।',
      createStore:'ফ্রি স্টোর খুলুন',seeStores:'এডিটর ঘুরে দেখুন',trustNoCode:'কোড জানা লাগবে না',trustTemplate:'রেডি ডিজাইন থেকে শুরু',trustLocal:'বাংলাদেশি বিক্রির কাজ মাথায় রেখে',
      paymentReady:'পেমেন্টের অপশন',configuredIn:'আপনার স্টোরে যেগুলো চালু আছে',structuredOrder:'গোছানো অর্ডার',readyFulfilment:'ডেলিভারির জন্য প্রস্তুত',proofLabel:'এক অর্ডার, এক ধারায়',proofIntro:'ক্রেতার অর্ডার থেকে ডেলিভারি—কোনো তথ্য যেন পথে হারিয়ে না যায়।',proofStore:'স্টোরফ্রন্ট',proofStoreNote:'দেখে পছন্দ করে',proofCheckout:'চেকআউট',proofCheckoutNote:'পেমেন্ট পদ্ধতি বেছে নেয়',proofOrder:'অর্ডার',proofOrderNote:'সব তথ্য একসাথে থাকে',proofFulfilment:'ডেলিভারি',proofFulfilmentNote:'এরপর কী করতে হবে, পরিষ্কার',
      bdKicker:'বাংলাদেশে বিক্রির কথা ভেবেই',bdTitle:'আপনার ব্যবসাকে <em>বিদেশি নিয়মে মানিয়ে নিতে হবে কেন?</em>',bdCopy:'এখানকার ক্রেতারা যেভাবে পেমেন্ট করেন, ব্যবসায়ীরা যেভাবে ডেলিভারি দেন, আর social media থেকে যেভাবে বিক্রি আসে—EZComo সেই বাস্তবতার জন্য তৈরি।',
      bdPay:'ক্রেতার পরিচিত পেমেন্ট',bdPayCopy:'bKash, Nagad আর Cash on Delivery—স্টোরে দিন ক্রেতার পরিচিত অপশন।',bdDeliver:'অর্ডার থেকে কুরিয়ারে',bdDeliverCopy:'Pathao সেটআপ করা থাকলে অর্ডার থেকেই merchant API booking করা যায়।',bdBrand:'ব্র্যান্ডটা থাকুক আপনার',bdBrandCopy:'নিজের ব্র্যান্ডে স্টোর চালান; যোগ্য প্ল্যানে কাস্টম ডোমেইনও যুক্ত করতে পারবেন।',bdTogether:'এদিক-ওদিক নয়, এক জায়গায়',bdTogetherCopy:'পণ্য, অর্ডার, স্টোর সেটিং আর বিক্রির প্রয়োজনীয় সেটআপ একই ওয়ার্কস্পেসে রাখুন।',
      painKicker:'যেখানে সময় বাঁচে',painTitle:'“দাম কত?”, “সাইজ আছে?”, “COD হবে?”—সব প্রশ্ন DM-এ সামলাতে হবে না।',painIntro:'Social media ক্রেতা এনে দিতে পারে। কিন্তু প্রতিটি পণ্যের তথ্য, অর্ডার আর ডেলিভারি আপডেট যদি চ্যাটে চ্যাটে খুঁজতে হয়, ব্যবসা বড় হওয়ার সাথে ঝামেলাও বড় হয়।',beforeLabel:'আগে · DM',afterLabel:'পরে · EZCOMO',chat1:'দাম কত?',chat2:'কোন সাইজ আছে?',chat3:'COD আছে?',chat4:'আমার অর্ডার কোথায়?',chaosFoot:'অর্ডারের দরকারি তথ্য ছড়িয়ে আছে আলাদা আলাদা চ্যাটে।',system1:'পণ্যের তথ্য ক্রেতার সামনেই',system2:'অর্ডার একবারেই গোছানো',system3:'পেমেন্ট পদ্ধতি সংরক্ষিত',system4:'ডেলিভারির পরের ধাপ প্রস্তুত',done:'প্রস্তুত',systemFoot:'একটি অর্ডার, একটিই পরিষ্কার কাজের ধারা',
      howKicker:'শুরু করা সহজ',howTitle:'তিন ধাপেই নিজের স্টোর। শূন্য পেজ থেকে শুরু নয়।',howCopy:'রেডি একটি স্টোরফ্রন্ট বেছে নিন, নিজের ব্র্যান্ডে সাজান, তারপর একই জায়গা থেকে অর্ডারের কাজ চালান।',step1:'একটি স্টোরফ্রন্ট বেছে নিন',step1Copy:'আপনার ব্যবসার ধরন অনুযায়ী তৈরি একটি সাজানো কাঠামো থেকে শুরু করুন।',step2:'নিজের মতো সাজান',step2Copy:'পণ্য, ছবি, ব্র্যান্ড, পেমেন্ট আর ডেলিভারি সেটিং যোগ করুন।',step3:'পাবলিশ করে বিক্রি শুরু করুন',step3Copy:'অর্ডার নিন, আর প্রতিটি বিক্রির পর কী করতে হবে তা একই জায়গায় সামলান।',
      bridgeBefore:'আগে',bridgeInbox:'অর্ডার DM-এ আটকে থাকে',bridgeStore:'স্টোরফ্রন্ট',bridgeStoreTitle:'ক্রেতা নিজেই দেখে অর্ডার করে',bridgeSystem:'EZCOMO',bridgeSystemTitle:'অর্ডারের পরের কাজও গুছিয়ে থাকে',featuresKicker:'এখন নিজেই ব্যবহার করে দেখুন',featuresTitle:'স্টোর বানান। অর্ডার এলে পরের কাজও এখানেই করুন।',featuresCopy:'পেজ এডিট করুন, একটি ডেমো অর্ডার দিন, তারপর দেখুন একই অর্ডার কীভাবে পেমেন্ট, কুরিয়ার, স্টক আর মার্জিনের ধাপ পেরোয়।',builderLabel:'০১ · স্টোরফ্রন্ট এডিটর',builderTitle:'এই পেজেই একটি পুরো স্টোর সাজিয়ে দেখুন।',builderCopy:'সেকশন সরান, লেখা বদলান, কনটেন্টের অবস্থান পাল্টান, রং ঠিক করুন—কোড লিখতে হবে না।',builderHint:'বাম দিক থেকে একটি সেকশন টেনে সরান—প্রিভিউ সঙ্গে সঙ্গেই বদলে যাবে।',editorTitle:'স্টোর এডিটর',editorPreview:'প্রিভিউ',editorLive:'লাইভ পরিবর্তন',editorReset:'ডেমো রিসেট',editorPage:'পেজ',editorAnnouncement:'ঘোষণা',editorHeader:'হেডার',editorHero:'হিরো',editorCategories:'ক্যাটাগরি',editorFeatured:'ফিচার্ড পণ্য',editorPromo:'কালেকশন প্রোমো',editorNew:'নতুন পণ্য',editorStory:'ব্র্যান্ডের গল্প',editorBenefits:'স্টোরের সুবিধা',editorNewsletter:'নিউজলেটার',editorFooter:'ফুটার',editorTry:'নিজে করে দেখুন',editorTryHint:'সেকশন সরান → লেখা বদলান → কনটেন্ট সাজান',editorSelected:'নির্বাচিত',editorContentGroup:'কনটেন্ট গ্রুপ',editorText:'নির্বাচিত লেখা',editorColor:'সেকশনের রং',editorPosition:'অবস্থান',editorHelp:'যে লেখাটি বদলাতে চান সেটি নির্বাচন করুন। হ্যান্ডেল ধরে পুরো কনটেন্ট ব্লকও সরাতে পারবেন।',payTitle:'ক্রেতার পরিচিত পেমেন্ট অপশন।',payCopy:'bKash, Nagad ও COD ব্যবহার করুন। bKash সংযোগ করা থাকলে automated checkout-ও চালু থাকে।',deliveryTitle:'অর্ডার এলো, এবার কুরিয়ারে পাঠান।',deliveryCopy:'Pathao কনফিগার করা থাকলে অর্ডার ওয়ার্কফ্লো থেকেই বুকিং করা যায়। অন্য কুরিয়ারগুলোর জন্যও সেটআপের পথ আছে।',active:'সক্রিয়',workflowLabel:'০২ · অর্ডারের পর কী হয় · ডেমো',workflowTitle:'ক্রেতা “অর্ডার করুন” চাপার পর কী হয়, দেখে নিন।',workflowCopy:'পেমেন্ট, অর্ডার, কুরিয়ার, স্টক আর মার্জিন—একই অর্ডারের প্রতিটি ধাপ চোখের সামনে এগোয়।',workflowRun:'ডেমো অর্ডার চালান',workflowWaiting:'অপেক্ষায়',workflowRunning:'চলছে',workflowComplete:'সম্পন্ন',workflowNowLabel:'এখন যা হচ্ছে',workflowNowReady:'ডেমো অর্ডার চালানোর জন্য প্রস্তুত।',workflowNowDone:'অর্ডারের সব ধাপ সম্পন্ন—রেকর্ডও রাখা হয়েছে।',placeOrder:'অর্ডার করুন',workflowDisclaimer:'ডেমো বোঝানোর জন্য নমুনা ডেটা',automationRunner:'অর্ডার অটোমেশন',stepPayment:'পেমেন্ট',stepPaymentTitle:'পেমেন্ট এসেছে',stepOrder:'অর্ডার',stepOrderTitle:'অর্ডার তৈরি হয়েছে',stepCourier:'ডেলিভারি',stepCourierTitle:'কুরিয়ার বুক করুন',bookCourier:'কুরিয়ার বুক করুন',stepBookedTitle:'কুরিয়ার বুকিং হয়েছে',stepPickup:'পিকআপ',stepPickupTitle:'কুরিয়ার পার্সেল নিয়েছে',collected:'পিকআপ সম্পন্ন',stepInventory:'স্টক',stepInventoryTitle:'স্টক কমানো হয়েছে',stepProfit:'মার্জিন',stepProfitTitle:'মার্জিন হিসাব হয়েছে',workflowResult:'অর্ডার সম্পন্ন—এরপর কী হয়েছে, প্রতিটি ধাপই দেখা যাচ্ছে।',workflowResultNote:'মার্জিনের উদাহরণটি ধরে নেয় যে পণ্যের খরচ আগে থেকে সেট করা আছে।',workspaceLabel:'০৩ · ব্যবসার ওয়ার্কস্পেস',workspaceTitle:'ক্রেতার স্টোর আর আপনার কাজ—দুটোই একই সিস্টেমে যুক্ত।',workspaceCopy:'পণ্য, অর্ডার, পেমেন্ট সেটআপ আর ডেলিভারির অবস্থা—সব এক জায়গা থেকে দেখুন ও সামলান। এখানে নমুনা ডেটা দেখানো হচ্ছে।',domainTitle:'নিজের ডোমেইনেই নিজের স্টোর।',domainCopy:'যোগ্য পেইড প্ল্যানে DNS সেটআপ ও যাচাই শেষে কাস্টম ডোমেইন যুক্ত করা যায়।',
      templatesKicker:'ব্যবসা ভেদে স্টোরও আলাদা',templatesTitle:'ফ্যাশন, বুকিং, হোটেল বা ডিজিটাল পণ্য—সব ব্যবসা একইভাবে বিক্রি করে না।',templatesCopy:'ব্যবসার ধরন বদলে দেখুন। শুধু রং নয়—পেজের কাঠামো, ক্রেতার পথ আর মূল অ্যাকশনও বদলে যায়।',fashionDesc:'ক্যাটালগ + ভ্যারিয়েন্ট',bookingDesc:'সার্ভিস + সময়',hotelDesc:'রুম + খালি থাকা',digitalDesc:'ফাইল + লাইসেন্স',selectedDirection:'যে কাঠামো দেখছেন',directionNote:'ডেমোর কনটেন্ট নমুনা; এখানে মূল বিষয় হলো বিক্রির কাঠামো।',moreStructures:'আরও যেসব ব্যবসায় মানিয়ে যায়',openPreview:'লাইভ প্রিভিউ দেখুন',useTemplate:'এই ডিজাইন দিয়ে শুরু করুন',
      localKicker:'এখানকার ব্যবসার জন্য',localTitle:'বাংলাদেশে বিক্রি করতে যা লাগে, সেগুলো যেন আলাদা আলাদা জোড়া দিতে না হয়।',localCopy:'পেমেন্ট, কুরিয়ার আর স্টোরফ্রন্ট—বাংলাদেশি ব্যবসায়ীরা যেভাবে কাজ করেন, EZComo সেই কাজের ধারার সাথে মানিয়ে তৈরি।',localPayTitle:'ক্রেতার পরিচিত চেকআউট',localPayCopy:'স্টোরফ্রন্টে bKash, Nagad ও Cash on Delivery দেখাতে পারবেন।',localDeliveryTitle:'অর্ডার থেকেই ডেলিভারি',localDeliveryCopy:'Pathao কনফিগার করা থাকলে merchant API দিয়ে বুকিং করা যায়।',localBrandTitle:'আপনার স্টোর, আপনার ডোমেইন',localBrandCopy:'যোগ্য পেইড প্ল্যানে যাচাই করা কাস্টম ডোমেইন যুক্ত করা যায়।',connectionState:'কোন সংযোগ চালু',connectionTitle:'যেটা চালু নেই, সেটার ওপর যেন ভুল করে নির্ভর না করেন।',available:'চালু করা যাবে',setup:'সেটআপ',payments:'পেমেন্ট',delivery:'ডেলিভারি',storefront:'স্টোরফ্রন্ট',autoConnected:'সংযুক্ত থাকলে অটোমেটেড',storeOption:'স্টোরে দেখানো যাবে',merchantApi:'Merchant API বুকিং',setupAvailable:'সেটআপ করা যাবে',customDomain:'কাস্টম ডোমেইন',eligiblePlans:'যোগ্য পেইড প্ল্যান',responsiveStore:'সব স্ক্রিনে মানানসই',allScreens:'মোবাইল থেকে ডেস্কটপ',
      calcKicker:'নিজের খরচ মিলিয়ে দেখুন',calcTitle:'হিসাবটা আপনার সংখ্যাতেই হোক।',calcCopy:'এখন যে শতাংশ খরচ হচ্ছে, সেটি আপনার দেওয়া EZComo প্ল্যানের অঙ্কের সাথে তুলনা করুন। আমরা কোনো প্রতিযোগীর ফি ধরে নিচ্ছি না, সেভিংসের প্রতিশ্রুতিও দিচ্ছি না।',calcNote:'এটি শুধু তুলনার উদাহরণ। সিদ্ধান্তের আগে বর্তমান প্ল্যান ও পেমেন্ট/সার্ভিস প্রোভাইডারের চার্জ যাচাই করুন।',monthlySales:'মাসিক বিক্রি',currentCost:'বর্তমান প্ল্যাটফর্ম / ম্যানুয়াল খরচ',planInput:'তুলনার জন্য EZComo প্ল্যানের অঙ্ক',annualDifference:'উদাহরণভিত্তিক বার্ষিক পার্থক্য',
      pricingKicker:'মূল্য',pricingTitle:'ফ্রি দিয়ে শুরু করুন। ব্যবসা বাড়লে প্রয়োজনমতো আপগ্রেড করুন।',pricingCopy:'কোন প্ল্যানে কী আছে এবং বর্তমান দাম কত—প্ল্যান পেজেই দেখে তারপর সিদ্ধান্ত নিন।',pricingPointStore:'নিজের স্টোর চালু করুন',pricingPointOrders:'অর্ডার গুছিয়ে নিন',pricingPointLocal:'লোকাল পেমেন্ট ও ডেলিভারি যুক্ত করুন',pricingActionNote:'আগে ব্যবহার করে দেখুন, তারপর দরকার হলে পেইড প্ল্যান নিন।',comparePlans:'প্ল্যান ও দাম দেখুন',
      faqTitle:'DM থেকে নিজের স্টোরে যাওয়ার আগে যে প্রশ্নগুলোর উত্তর জানা দরকার।',faqStart:'শুরু করা',faqPayments:'পেমেন্ট',faqDelivery:'ডেলিভারি',faqDomains:'ডোমেইন',anotherQuestion:'আরও কিছু জানতে চান?',talkSupport:'সাপোর্টে কথা বলুন',
      closingKicker:'এবার আপনার স্টোর',closingTitle:'ক্রেতা নিজে পণ্য দেখে অর্ডার করুক। আপনি সময় দিন ব্যবসা বড় করতে।',closingCopy:'আপনার ব্যবসার জন্য একটি স্টোরফ্রন্ট বেছে নিন, ফ্রি শুরু করুন, তারপর নিজের ব্র্যান্ডে সাজিয়ে নিন।',browseAgain:'আরও স্টোরফ্রন্ট দেখুন',
      product:'প্রোডাক্ট',support:'সাপোর্ট',helpCenter:'হেল্প সেন্টার',legal:'আইনি তথ্য',privacy:'প্রাইভেসি',terms:'শর্তাবলি',billing:'বিলিং নীতি',footerTag:'ক্রেতার জন্য সহজ স্টোর। আপনার জন্য গোছানো ব্যবসা।',previewLabel:'ডিজাইন প্রিভিউ · এখানে আপনার আসল স্টোরের কোনো ডেটা বদলাবে না।',stickyText:'DM-এর বদলে ক্রেতাকে নিজের স্টোরে নিতে চান?'

    }
  };

  Object.assign(i18n.en,{
    heroTitle:'Your online store. Your daily business. <em>Connected.</em>',
    heroLede:'Build a branded storefront and manage products, orders, payments, stock and delivery from one workspace—built around selling in Bangladesh.',
    heroSupport:'Selling through Facebook or Instagram? Keep them for discovery—move browsing and orders into your own store.',
    heroWorkspaceLabel:'SAMPLE MERCHANT WORKSPACE',heroWorkspaceLive:'Today at a glance',heroOrders:'Orders',heroPayments:'Payment',heroStock:'Low stock',heroNeedsAction:'needs action',heroCourier:'Courier',heroPreviewLabel:'QUICK STOREFRONT EXAMPLES',
    featuresKicker:'Try the platform',featuresTitle:'Three guided actions show the whole business flow.',featuresCopy:'Make the storefront yours, receive a sample order, then move into the merchant workspace to manage payment, stock and delivery.',
    guide1Title:'Make it yours',guide1Copy:'Change content, color or section order.',guide2Title:'Receive an order',guide2Copy:'See checkout become a structured order.',guide3Title:'Manage the next step',guide3Copy:'Check payment, stock and delivery actions.',
    workflowCodNote:'This run shows paid bKash. COD stays unpaid until collection/settlement.',stepProfit:'EST. MARGIN',stepProfitTitle:'Estimated margin',
    workspaceKicker:'Merchant workspace',workspaceHeading:'The website is only the front door.',workspaceLead:'After an order arrives, keep payment state, stock, courier actions and daily priorities visible in the same operating surface.',
    workspaceLabel:'03 · MERCHANT WORKSPACE · SAMPLE DATA',workspaceTitle:'Run the work behind each sale.',workspaceCopy:'Illustrative operational data shows how orders, payment state, inventory and fulfilment can sit together without turning the homepage into a miniature admin manual.',workspaceHint:'Fewer panels, larger information, clearer next actions.',
    workspaceOverview:'Overview',workspaceOrders:'Orders',workspaceProducts:'Products',workspacePayments:'Payments',workspaceDelivery:'Delivery',workspaceToday:'TODAY · SAMPLE WORKSPACE',workspaceGreeting:'Good evening. Here is what needs attention.',workspaceNewOrder:'View orders',
    workspaceMetricOrders:'Orders today',workspaceMetricPayments:'Payment checks',workspaceMetricPaymentsNote:'includes COD',workspaceMetricStock:'Low stock',workspaceMetricStockNote:'reorder soon',workspaceMetricCourier:'Ready for courier',workspaceRecent:'Recent orders',workspaceSample:'illustrative',workspacePaid:'Paid',workspaceReady:'Ready',workspaceBooked:'Booked',workspacePending:'Pending',workspaceReview:'Review',workspaceNext:'NEXT ACTIONS',workspaceAction1:'Book 4 courier pickups',workspaceAction2:'Review 2 low-stock items',workspaceAction3:'Check 3 payment states',
    templatesKicker:'Choose a starting point',templatesTitle:'Start with a storefront shaped for how your business sells.',templatesCopy:'Compare Fashion, Booking, Hotel and Digital examples. Each changes the customer journey and primary action—not just the color palette.',selectedDirection:'YOUR STARTING POINT',useTemplate:'Choose this starting point',
    connectionState:'SETUP REQUIREMENTS',connectionTitle:'Know what is supported and what needs merchant setup.',connectionDemo:'DEMO STATUS',supported:'supported',setupRequired:'setup required',autoConnected:'Supported · connect merchant account',storeOption:'Supported storefront checkout option',codOption:'Supported · payment collected later',merchantApi:'Automated booking when configured',
    examplesKicker:'Finished storefront examples',examplesTitle:'Show the outcome, not only the builder.',examplesCopy:'These are illustrative design examples—not merchant claims. They show the level of storefront presentation the platform is aiming to produce.',exampleFashion:'Collections, variants and strong brand presentation without losing the path to purchase.',exampleHotel:'Dates, guests and room choice stay central instead of forcing a product-catalog layout.',exampleFood:'Menu-first presentation keeps products, pricing and the primary order action easy to scan.',illustrativeExample:'Illustrative storefront example',
    pricingTitle:'See the price before you leave the homepage.',pricingCopy:'A compact comparison of the current plan prices and storefront limits shown on the plans page. Check the plans page for exact feature availability and external provider charges.',priceFree:'Free',priceFreeNote:'Try the platform with one storefront.',priceBasicNote:'For a merchant ready to move beyond the free tier.',priceAdvancedNote:'More storefront capacity for a growing operation.',storefrontLimit:'storefront limit shown',storefrontLimitPlural:'storefronts limit shown',viewPlanDetails:'View plan details',pricingFineprint:'Custom-domain access depends on eligible paid features. Payment gateway and courier provider charges, where applicable, are separate.',
    helpCenter:'Contact support',previewLabel:'Redesign preview · demo/sample data is labeled where it appears.',
    editorHelp:'Select text to rewrite it. Drag the handle to move content; use Alt + ↑/↓ on a section button to reorder without dragging.'
  });
  Object.assign(i18n.bn,{
    heroTitle:'আপনার অনলাইন স্টোর। প্রতিদিনের ব্যবসা। <em>সব একসাথে।</em>',
    heroLede:'ব্র্যান্ডেড স্টোর বানান, আর পণ্য, অর্ডার, পেমেন্ট, স্টক ও ডেলিভারির কাজ একই ওয়ার্কস্পেস থেকে সামলান—বাংলাদেশে বিক্রির বাস্তবতা মাথায় রেখে।',
    heroSupport:'Facebook বা Instagram-এ বিক্রি করেন? মানুষ খুঁজে পাক সেখানেই—কিন্তু পণ্য দেখা ও অর্ডার হোক আপনার নিজের স্টোরে।',
    heroWorkspaceLabel:'নমুনা মার্চেন্ট ওয়ার্কস্পেস',heroWorkspaceLive:'আজকের অবস্থা',heroOrders:'অর্ডার',heroPayments:'পেমেন্ট',heroStock:'কম স্টক',heroNeedsAction:'কাজ দরকার',heroCourier:'কুরিয়ার',heroPreviewLabel:'দ্রুত স্টোরফ্রন্ট উদাহরণ',
    featuresKicker:'প্ল্যাটফর্ম ঘুরে দেখুন',featuresTitle:'তিনটি সহজ ধাপে পুরো ব্যবসার flow দেখুন।',featuresCopy:'স্টোর নিজের মতো করুন, একটি নমুনা অর্ডার নিন, তারপর ওয়ার্কস্পেসে গিয়ে পেমেন্ট, স্টক আর ডেলিভারির পরের কাজ দেখুন।',
    guide1Title:'নিজের মতো করুন',guide1Copy:'লেখা, রং বা section order বদলান।',guide2Title:'অর্ডার নিন',guide2Copy:'Checkout কীভাবে structured order হয় দেখুন।',guide3Title:'পরের কাজ সামলান',guide3Copy:'পেমেন্ট, স্টক ও ডেলিভারির অবস্থা দেখুন।',
    workflowCodNote:'এই run-এ paid bKash দেখানো হচ্ছে। COD-এ collection/settlement না হওয়া পর্যন্ত payment pending থাকে।',stepProfit:'আনুমানিক মার্জিন',stepProfitTitle:'আনুমানিক মার্জিন',
    workspaceKicker:'মার্চেন্ট ওয়ার্কস্পেস',workspaceHeading:'ওয়েবসাইট শুধু সামনের দরজা।',workspaceLead:'অর্ডার আসার পর payment state, stock, courier action আর দৈনিক priority—সব একই operating surface-এ রাখুন।',
    workspaceLabel:'০৩ · মার্চেন্ট ওয়ার্কস্পেস · নমুনা ডেটা',workspaceTitle:'প্রতিটি বিক্রির পেছনের কাজও একই জায়গায় চালান।',workspaceCopy:'নমুনা operational data দিয়ে দেখানো হচ্ছে—অর্ডার, payment state, inventory আর fulfilment কীভাবে এক জায়গায় দেখা যায়।',workspaceHint:'কম panel, বড় তথ্য, পরিষ্কার next action.',
    workspaceOverview:'ওভারভিউ',workspaceOrders:'অর্ডার',workspaceProducts:'পণ্য',workspacePayments:'পেমেন্ট',workspaceDelivery:'ডেলিভারি',workspaceToday:'আজ · নমুনা ওয়ার্কস্পেস',workspaceGreeting:'শুভ সন্ধ্যা। যেগুলো এখন নজর চাইছে।',workspaceNewOrder:'অর্ডার দেখুন',
    workspaceMetricOrders:'আজকের অর্ডার',workspaceMetricPayments:'পেমেন্ট যাচাই',workspaceMetricPaymentsNote:'COD-সহ',workspaceMetricStock:'কম স্টক',workspaceMetricStockNote:'শিগগির restock',workspaceMetricCourier:'কুরিয়ারের জন্য প্রস্তুত',workspaceRecent:'সাম্প্রতিক অর্ডার',workspaceSample:'নমুনা',workspacePaid:'পেইড',workspaceReady:'প্রস্তুত',workspaceBooked:'বুকড',workspacePending:'পেন্ডিং',workspaceReview:'দেখুন',workspaceNext:'পরের কাজ',workspaceAction1:'৪টি courier pickup বুক করুন',workspaceAction2:'২টি low-stock item দেখুন',workspaceAction3:'৩টি payment state যাচাই করুন',
    templatesKicker:'শুরু করার ডিজাইন বেছে নিন',templatesTitle:'আপনার ব্যবসা যেভাবে বিক্রি করে, সেইভাবে সাজানো storefront দিয়ে শুরু করুন।',templatesCopy:'Fashion, Booking, Hotel ও Digital উদাহরণ তুলনা করুন। শুধু রং নয়—customer journey আর primary action-ও বদলায়।',selectedDirection:'আপনার শুরু করার ডিজাইন',useTemplate:'এই ডিজাইন দিয়ে শুরু করুন',
    connectionState:'কী সেটআপ লাগবে',connectionTitle:'কোনটি supported আর কোনটিতে merchant setup দরকার—স্পষ্টভাবে দেখুন।',connectionDemo:'ডেমো স্ট্যাটাস',supported:'supported',setupRequired:'setup দরকার',autoConnected:'Supported · merchant account connect করতে হবে',storeOption:'Supported storefront checkout option',codOption:'Supported · পরে payment collect হবে',merchantApi:'Configured থাকলে automated booking',
    examplesKicker:'সম্পূর্ণ storefront উদাহরণ',examplesTitle:'শুধু builder নয়—শেষ ফলটাও দেখান।',examplesCopy:'এগুলো illustrative design example, কোনো merchant claim নয়। Platform দিয়ে কী ধরনের storefront presentation করা যায় সেটাই দেখানো হচ্ছে।',exampleFashion:'Collection, variant আর brand presentation—purchase path পরিষ্কার রেখেই।',exampleHotel:'Date, guest আর room choice সামনে থাকে; product catalog-এর মতো জোর করে সাজানো নয়।',exampleFood:'Menu-first presentation-এ product, price আর order action দ্রুত বোঝা যায়।',illustrativeExample:'নমুনা storefront example',
    pricingTitle:'Homepage থেকেই দাম দেখে নিন।',pricingCopy:'Plans page-এ দেখানো বর্তমান plan price ও storefront limit-এর compact comparison। Exact feature availability ও external provider charge-এর জন্য plans page দেখুন।',priceFree:'ফ্রি',priceFreeNote:'একটি storefront দিয়ে platform ব্যবহার করে দেখুন।',priceBasicNote:'Free tier-এর পর নিয়মিত merchant operation-এর জন্য।',priceAdvancedNote:'বড় operation-এর জন্য বেশি storefront capacity।',storefrontLimit:'storefront limit দেখানো',storefrontLimitPlural:'storefront limit দেখানো',viewPlanDetails:'Plan details দেখুন',pricingFineprint:'Custom-domain access eligible paid feature-এর ওপর নির্ভর করে। Payment gateway ও courier provider-এর আলাদা charge থাকলে সেটি পৃথক।',
    helpCenter:'সাপোর্টে যোগাযোগ',previewLabel:'Redesign preview · demo/sample data যেখানে আছে, সেখানেই চিহ্নিত করা হয়েছে।',
    editorHelp:'লেখা বেছে edit করুন। Handle টেনে content সরান; drag ছাড়াও section button-এ Alt + ↑/↓ দিয়ে reorder করা যাবে।'
  });

  Object.assign(i18n.en,{
    proofLabel:'ONE CONNECTED BUSINESS',proofIntro:'The storefront and the work behind it stay in the same flow.',proofStoreNote:'Customers browse',proofProducts:'Products',proofProductsNote:'Catalog + stock',proofOrder:'Orders',proofOrderNote:'Structured details',proofPayments:'Payments',proofPaymentsNote:'Paid or COD',proofStock:'Inventory',proofStockNote:'Stock stays visible',proofDelivery:'Delivery',proofDeliveryNote:'Next action ready',
    featuresKicker:'See the workflow',featuresTitle:'Build your store. Take your first order. Keep everything moving.',featuresCopy:'Follow one Studio Tee order from storefront editing to checkout and the merchant workspace. Each step uses the same sample product and order.',
    guide1Title:'Make it yours',guide1Copy:'Change content, color or section order.',guide2Title:'Take an order',guide2Copy:'Watch checkout become order #1051.',guide3Title:'Move it forward',guide3Copy:'Inspect payment, stock and delivery.',
    builderTitle:'Make the storefront feel like your business.',builderCopy:'Change the headline, color or section order and watch the storefront update immediately.',builderHint:'Try one clear change: edit the headline or move a section.',
    workflowTitle:'Take a sample order and follow what changes.',workflowCopy:'Studio Tee · order #1051 moves from checkout to payment and stock so the cause-and-effect stays clear.',workflowResult:'Order #1051 is ready in the workspace.',workflowResultNote:'Payment, stock and estimated margin are recorded. Delivery is the next merchant action.',
    workspaceLabel:'03 · MERCHANT WORKSPACE · INTERACTIVE DEMO',workspaceTitle:'Know what needs your attention today.',workspaceCopy:'Open the same Studio Tee order #1051, check its payment and stock, then prepare Pathao delivery.',workspaceHint:'Interactive demo · sample data',workspaceGreeting:'One order is ready for your next action.',workspaceNewOrder:'Open order #1051',
    workspaceMetricOrders:'Order',workspaceMetricPayments:'Payment',workspaceMetricStock:'Stock',workspaceMetricStockNote:'Studio Tee remaining',workspaceMetricCourier:'Delivery',workspaceRecent:'Order #1051',workspaceSample:'interactive demo',
    workspacePaymentLabel:'Payment',workspaceStockLabel:'Inventory',workspaceStockRecorded:'Stock updated',workspaceDeliveryLabel:'Delivery',workspaceDeliveryReady:'Ready to book Pathao',workspaceNext:'NEXT ACTION',workspaceNextBook:'Book Pathao for order #1051',workspacePrepareDelivery:'Prepare delivery',workspaceNextNote:'Open the order first to inspect payment and stock.',workspaceCourierBooked:'Courier booked',workspaceAwaitPickup:'Await courier pickup',workspacePrepared:'Delivery prepared',workspaceOpenFirst:'Open order #1051 first.',
    templatesTitle:'See what your business could look like online.',templatesCopy:'Choose a business type, explore its customer journey, then open a finished demo storefront.',directionNote:'Interactive demo · sample content.',examplesKicker:'FINISHED DEMO STORES',examplesTitle:'Open a complete example, not just a category photo.',examplesCopy:'Interactive demo stores use sample businesses and sample data; they are not merchant testimonials.',openDemoStore:'Open demo store ↗',
    onboardKicker:'FROM SIGNUP TO LIVE',onboardTitle:'Four practical steps to launch.',onboard1:'Create your account',onboard2:'Add products and brand details',onboard3:'Set up payment and delivery',onboard4:'Publish your storefront',
    pricingTitle:'Start free. Choose the tools you need as you grow.',pricingCopy:'Current plan prices and capabilities are summarized from the live EZComo plan catalog. External payment, courier, messaging and domain-provider charges remain separate where they apply.',
    priceFreeNote:'Start one storefront on an EZComo-managed URL and upgrade later without rebuilding it.',freeFeature1:'1 storefront',freeFeature2:'EZComo-managed store URL',freeFeature3:'No trial countdown',
    priceBasicNote:'For one store that needs the core CMS, theme tools and manual or assisted payments.',basicFeature1:'1 storefront',basicFeature2:'Core CMS blocks + theme tools',basicFeature3:'14-day trial configured',chooseBasic:'Choose Basic',
    priceAdvancedNote:'For growing teams running campaigns and richer storefront operations.',advancedFeature1:'Up to 3 storefronts',advancedFeature2:'Campaigns, teams, coupons + reviews',advancedFeature3:'14-day trial configured',chooseAdvanced:'Choose Advanced',
    pricingFineprint:'Plan availability is checked at signup. Custom domains are available only on eligible paid plans and still require DNS setup and verification.',comparePlans:'Compare full plan details',
    footerIdentity:'Bangladesh-first commerce platform · Platform support available from the support page.'
  });
  Object.assign(i18n.bn,{
    proofLabel:'এক ব্যবসা, এক ধারায়',proofIntro:'ক্রেতার স্টোর আর বিক্রির পরের কাজ একই ধারায় থাকুক।',proofStoreNote:'ক্রেতা পণ্য দেখে',proofProducts:'পণ্য',proofProductsNote:'ক্যাটালগ ও স্টক',proofOrder:'অর্ডার',proofOrderNote:'সব তথ্য গুছানো',proofPayments:'পেমেন্ট',proofPaymentsNote:'পেইড বা COD',proofStock:'স্টক',proofStockNote:'স্টক চোখের সামনে',proofDelivery:'ডেলিভারি',proofDeliveryNote:'পরের কাজ প্রস্তুত',
    featuresKicker:'কাজের ধারাটি দেখুন',featuresTitle:'স্টোর বানান। প্রথম অর্ডার নিন। এরপরের কাজও এগিয়ে নিন।',featuresCopy:'একই Studio Tee আর #1051 অর্ডার দিয়ে দেখুন—স্টোর edit করা থেকে checkout, তারপর merchant workspace পর্যন্ত সব কীভাবে যুক্ত থাকে।',
    guide1Title:'নিজের মতো করুন',guide1Copy:'লেখা, রং বা section order বদলান।',guide2Title:'অর্ডার নিন',guide2Copy:'#1051 অর্ডার কীভাবে তৈরি হয় দেখুন।',guide3Title:'পরের কাজ এগিয়ে নিন',guide3Copy:'পেমেন্ট, স্টক আর ডেলিভারির অবস্থা দেখুন।',
    builderTitle:'স্টোরটাকে নিজের ব্যবসার মতো করে সাজান।',builderCopy:'শিরোনাম, রং বা section order বদলালেই storefront-এ সঙ্গে সঙ্গে পরিবর্তন দেখুন।',builderHint:'একটি কাজ দিয়ে শুরু করুন—শিরোনাম edit করুন বা একটি section সরান।',
    workflowTitle:'একটি নমুনা অর্ডার নিন, তারপর কী বদলায় দেখুন।',workflowCopy:'Studio Tee-এর #1051 অর্ডার checkout থেকে payment আর stock update পর্যন্ত এগোয়—প্রতিটি কাজের ফল পরিষ্কার দেখা যায়।',workflowResult:'#1051 অর্ডার এখন workspace-এ প্রস্তুত।',workflowResultNote:'Payment, stock আর estimated margin রেকর্ড হয়েছে। Delivery এখন পরের কাজ।',
    workspaceLabel:'০৩ · মার্চেন্ট ওয়ার্কস্পেস · ইন্টার‌্যাকটিভ ডেমো',workspaceTitle:'আজ কোন কাজটা আগে দরকার, এক নজরে বুঝুন।',workspaceCopy:'একই Studio Tee-এর #1051 অর্ডার খুলুন, পেমেন্ট ও স্টক দেখুন, তারপর Pathao delivery প্রস্তুত করুন।',workspaceHint:'ইন্টার‌্যাকটিভ ডেমো · নমুনা ডেটা',workspaceGreeting:'একটি অর্ডার আপনার পরের কাজের জন্য প্রস্তুত।',workspaceNewOrder:'#1051 অর্ডার খুলুন',
    workspaceMetricOrders:'অর্ডার',workspaceMetricPayments:'পেমেন্ট',workspaceMetricStock:'স্টক',workspaceMetricStockNote:'Studio Tee বাকি',workspaceMetricCourier:'ডেলিভারি',workspaceRecent:'#1051 অর্ডার',workspaceSample:'ইন্টার‌্যাকটিভ ডেমো',
    workspacePaymentLabel:'পেমেন্ট',workspaceStockLabel:'স্টক',workspaceStockRecorded:'স্টক আপডেট হয়েছে',workspaceDeliveryLabel:'ডেলিভারি',workspaceDeliveryReady:'Pathao বুক করার জন্য প্রস্তুত',workspaceNext:'পরের কাজ',workspaceNextBook:'#1051 অর্ডারের জন্য Pathao বুক করুন',workspacePrepareDelivery:'ডেলিভারি প্রস্তুত করুন',workspaceNextNote:'আগে অর্ডারটি খুলে পেমেন্ট ও স্টক দেখে নিন।',workspaceCourierBooked:'কুরিয়ার বুক হয়েছে',workspaceAwaitPickup:'এখন পিকআপের অপেক্ষা',workspacePrepared:'ডেলিভারি প্রস্তুত',workspaceOpenFirst:'আগে #1051 অর্ডারটি খুলুন।',
    templatesTitle:'অনলাইনে আপনার ব্যবসা দেখতে কেমন হতে পারে, দেখে নিন।',templatesCopy:'ব্যবসার ধরন বেছে customer journey দেখুন, তারপর একটি সম্পূর্ণ demo storefront খুলে দেখুন।',directionNote:'ইন্টার‌্যাকটিভ ডেমো · নমুনা কনটেন্ট।',examplesKicker:'সম্পূর্ণ ডেমো স্টোর',examplesTitle:'শুধু ছবি নয়—পুরো একটি উদাহরণ খুলে দেখুন।',examplesCopy:'Demo store-গুলো নমুনা ব্যবসা ও নমুনা ডেটা ব্যবহার করে; এগুলো কোনো merchant testimonial নয়।',openDemoStore:'ডেমো স্টোর খুলুন ↗',
    onboardKicker:'সাইনআপ থেকে লাইভ স্টোর',onboardTitle:'চারটি বাস্তব ধাপে স্টোর চালু করুন।',onboard1:'অ্যাকাউন্ট খুলুন',onboard2:'পণ্য ও ব্র্যান্ডের তথ্য যোগ করুন',onboard3:'পেমেন্ট ও ডেলিভারি সেটআপ করুন',onboard4:'স্টোরফ্রন্ট প্রকাশ করুন',
    pricingTitle:'ফ্রি দিয়ে শুরু করুন। ব্যবসা বাড়লে দরকারি টুল বেছে নিন।',pricingCopy:'EZComo-র live plan catalog অনুযায়ী বর্তমান দাম ও মূল সুবিধাগুলো এখানে সংক্ষেপে দেখানো হয়েছে। Payment, courier, messaging বা domain provider-এর আলাদা charge থাকলে সেটি পৃথক।',
    priceFreeNote:'EZComo-managed URL-এ একটি storefront দিয়ে শুরু করুন; পরে upgrade করলেও নতুন করে store বানাতে হবে না।',freeFeature1:'১টি storefront',freeFeature2:'EZComo-managed store URL',freeFeature3:'Trial countdown নেই',
    priceBasicNote:'একটি store-এর জন্য core CMS, theme tools এবং manual/assisted payment দরকার হলে।',basicFeature1:'১টি storefront',basicFeature2:'Core CMS blocks + theme tools',basicFeature3:'১৪ দিনের trial configured',chooseBasic:'Basic বেছে নিন',
    priceAdvancedNote:'Growing team, campaign আর richer storefront operation-এর জন্য।',advancedFeature1:'সর্বোচ্চ ৩টি storefront',advancedFeature2:'Campaign, team, coupon + review',advancedFeature3:'১৪ দিনের trial configured',chooseAdvanced:'Advanced বেছে নিন',
    pricingFineprint:'Signup-এর সময় plan availability যাচাই হয়। Custom domain শুধু যোগ্য paid plan-এ পাওয়া যায় এবং DNS setup ও verification লাগবে।',comparePlans:'সব plan details দেখুন',
    footerIdentity:'বাংলাদেশকেন্দ্রিক commerce platform · Support page থেকে platform support পাওয়া যাবে।'
  });

  Object.assign(i18n.en,{
    featuresKicker:'Product walkthrough',
    featuresTitle:'Build. Sell. Manage. See the whole business flow.',
    featuresCopy:'Three visible chapters keep the full editor, original animated order workflow and merchant workspace on the page at the same time. The same Studio Tee and order #1051 carry through the story.',
    chapterBuild:'Build',chapterBuildCopy:'Customize the storefront',chapterBuildTitle:'Build the storefront in the full editor.',chapterBuildLead:'Edit text, drag content, recolor sections and reorder all eleven storefront blocks. Your changes stay intact while you continue through Sell and Manage.',chapterEditsPersist:'Your storefront edits stay exactly where you leave them.',nextSell:'Next: Sell',
    chapterSell:'Sell',chapterSellCopy:'Run the original order animation',chapterSellTitle:'Watch the original animated order workflow.',chapterSellLead:'Run or replay the full EZComo sequence for Studio Tee order #1051: payment, order, Pathao booking, pickup, inventory and estimated margin.',chapterWorkflowNote:'The Manage workspace below updates from this same sample order.',nextManage:'Next: Manage',
    chapterManage:'Manage',chapterManageCopy:'Work from the same order',chapterManageTitle:'Keep the order visible after checkout.',chapterManageLead:'Open #1051 and see the same payment, courier, pickup, stock and estimated margin states reflected in the merchant workspace.',chapterManageDone:'You have seen the storefront, the sale and the work behind it.',nextStorefronts:'Next: choose a storefront',
    builderTitle:'Make the storefront feel like your business.',builderCopy:'Change text, drag content, recolor sections and reorder the full page without leaving this demonstration.',builderHint:'Full editor restored · all eleven sections remain editable and reorderable.',
    workflowLabel:'02 · SELL · ORIGINAL ORDER WORKFLOW',workflowTitle:'Watch the same Studio Tee sale move through the full workflow.',workflowCopy:'Order #1051 moves through payment, order creation, Pathao booking, pickup, stock and estimated margin—using the original EZComo workflow animation.',workflowResult:'Order #1051 is fully recorded in the workspace.',workflowResultNote:'Payment, Pathao booking, pickup, stock and estimated margin stay visible for the same sample order.',
    workspaceLabel:'03 · MANAGE · MERCHANT WORKSPACE',workspaceTitle:'Manage the same order from one workspace.',workspaceCopy:'Open Studio Tee order #1051 and inspect the payment, Pathao booking, pickup, stock and estimated margin produced by the Sell chapter.',workspaceHint:'Interactive demo · sample data · synced with order #1051',workspaceGreeting:'Order #1051 is waiting for the Sell workflow.',workspaceNewOrder:'Open order #1051',workspaceSample:'sample order · waiting',workspaceNext:'SYNCED STORY',workspaceNextBook:'Run the Sell workflow to populate this workspace.',workspaceNextNote:'The same sample order #1051 is used in both chapters.',workspaceBackToSell:'Replay the Sell workflow ↑',workspaceMarginLabel:'Estimated margin',workspaceMarginNote:'Sample item cost assumed in demo',
    workspaceWaiting:'Waiting',workspaceReceived:'Received',workspaceBooking:'Booking…',workspaceBooked:'Booked',workspacePickedUp:'Picked up',workspaceRecorded:'Recorded',workspaceSynced:'Order #1051 synced',workspaceRunSell:'Run the Sell workflow to populate this workspace.'
  });
  Object.assign(i18n.bn,{
    featuresKicker:'প্রোডাক্ট ওয়াকথ্রু',
    featuresTitle:'Build. Sell. Manage. পুরো ব্যবসার flow একসাথে দেখুন।',
    featuresCopy:'তিনটি দৃশ্যমান chapter-এ full editor, original animated order workflow আর merchant workspace একসাথেই থাকে। একই Studio Tee আর #1051 অর্ডার পুরো গল্প জুড়ে চলবে।',
    chapterBuild:'Build',chapterBuildCopy:'স্টোরফ্রন্ট নিজের মতো করুন',chapterBuildTitle:'Full editor-এ storefront তৈরি করুন।',chapterBuildLead:'লেখা edit করুন, content drag করুন, section-এর রং বদলান এবং এগারোটি storefront block reorder করুন। Sell ও Manage-এ গেলেও আপনার পরিবর্তন থাকবে।',chapterEditsPersist:'আপনার storefront edit যেমন আছে তেমনই থাকবে।',nextSell:'পরের ধাপ: Sell',
    chapterSell:'Sell',chapterSellCopy:'Original order animation চালান',chapterSellTitle:'Original animated order workflow দেখুন।',chapterSellLead:'Studio Tee-এর #1051 অর্ডার দিয়ে payment, order, Pathao booking, pickup, inventory আর estimated margin-এর পুরো EZComo sequence চালান বা replay করুন।',chapterWorkflowNote:'নিচের Manage workspace একই sample order থেকে update হয়।',nextManage:'পরের ধাপ: Manage',
    chapterManage:'Manage',chapterManageCopy:'একই অর্ডার থেকে কাজ চালান',chapterManageTitle:'Checkout-এর পরও অর্ডারটি workspace-এ দৃশ্যমান রাখুন।',chapterManageLead:'#1051 খুলে একই payment, courier, pickup, stock আর estimated margin state merchant workspace-এ দেখুন।',chapterManageDone:'Storefront, sale এবং পেছনের operation—তিনটিই দেখেছেন।',nextStorefronts:'পরের ধাপ: storefront বেছে নিন',
    builderTitle:'Storefront-কে নিজের ব্যবসার মতো সাজান।',builderCopy:'লেখা, content position, section color আর পুরো page order এই demo থেকেই বদলান।',builderHint:'Full editor restored · এগারোটি section-ই editable ও reorderable.',
    workflowLabel:'০২ · SELL · ORIGINAL ORDER WORKFLOW',workflowTitle:'একই Studio Tee sale পুরো workflow দিয়ে এগোতে দেখুন।',workflowCopy:'#1051 অর্ডার payment, order creation, Pathao booking, pickup, stock আর estimated margin দিয়ে original EZComo animation-এ এগোয়।',workflowResult:'#1051 অর্ডারের পুরো state workspace-এ রেকর্ড হয়েছে।',workflowResultNote:'Payment, Pathao booking, pickup, stock আর estimated margin একই sample order-এর সঙ্গে দৃশ্যমান থাকে।',
    workspaceLabel:'০৩ · MANAGE · মার্চেন্ট ওয়ার্কস্পেস',workspaceTitle:'একই অর্ডার এক workspace থেকে manage করুন।',workspaceCopy:'Studio Tee-এর #1051 খুলে Sell chapter থেকে আসা payment, Pathao booking, pickup, stock আর estimated margin দেখুন।',workspaceHint:'Interactive demo · sample data · #1051-এর সঙ্গে synced',workspaceGreeting:'#1051 অর্ডার Sell workflow-এর জন্য অপেক্ষায়।',workspaceNewOrder:'#1051 অর্ডার খুলুন',workspaceSample:'sample order · waiting',workspaceNext:'একই গল্পের পরের অংশ',workspaceNextBook:'Workspace populate করতে Sell workflow চালান।',workspaceNextNote:'দুই chapter-এই একই sample #1051 ব্যবহার করা হয়েছে।',workspaceBackToSell:'Sell workflow আবার চালান ↑',workspaceMarginLabel:'আনুমানিক মার্জিন',workspaceMarginNote:'Demo-তে sample item cost ধরা হয়েছে',
    workspaceWaiting:'অপেক্ষায়',workspaceReceived:'রিসিভড',workspaceBooking:'বুক হচ্ছে…',workspaceBooked:'বুকড',workspacePickedUp:'পিকআপ হয়েছে',workspaceRecorded:'রেকর্ডেড',workspaceSynced:'#1051 অর্ডার synced',workspaceRunSell:'Workspace populate করতে Sell workflow চালান।'
  });

  Object.assign(i18n.en,{
    journeyKicker:'SEE EZCOMO IN ACTION',journeyTitle:'Build it. Sell it. Run it.',journeyLead:'Create your storefront, follow a customer order and manage what happens next—all connected through EZComo.',
    journeyWatch:'Watch the full journey',journeyPause:'Pause journey',journeyResume:'Resume journey',journeyWatchAgain:'Watch again',journeyDuration:'About 45 seconds',journeyManual:'Try it yourself',
    journeyBuild:'Build your store',journeyBuildCopy:'Shape your brand and storefront',journeySell:'Watch a sale happen',journeySellCopy:'Follow checkout into your business',journeyManage:'Manage the business',journeyManageCopy:'Know what needs your attention next',
    journeySample:'Sample data',journeyBack:'Back',journeyNextSell:'Next: Watch a sale happen',journeyNextManage:'Next: Manage the business',journeyCreate:'Create your store →',
    builderLabel:'01 · BUILD · FULL STOREFRONT EDITOR',builderTitle:'Your brand. Your layout. Your store.',builderCopy:'Edit the storefront directly, or watch EZComo put the pieces together.',builderHint:'Try changing the headline.',
    builderHintUpdated:'Your storefront updates immediately.',builderHintReordered:'Arrange the page around what you want customers to see.',
    workflowLabel:'02 · SELL · ORIGINAL ANIMATED ORDER WORKFLOW',workflowTitle:'One order. See what happens next.',workflowCopy:'Follow a sample sale from checkout into payment, stock and your workspace.',workflowRun:'▶ Run order workflow',placeOrder:'Place sample order',
    workflowResult:'Order #1051 is ready in your workspace.',workflowResultNote:'Payment, stock and estimated item margin are recorded. Delivery is the next merchant action.',marginExplainer:'Sample selling price ৳1,490 − assumed item cost ৳800 = ৳690. Excludes delivery, payment fees, discounts, tax and overhead.',
    workspaceLabel:'03 · MANAGE · MERCHANT WORKSPACE',workspaceTitle:'Know what needs your attention next.',workspaceCopy:'Check the order, review its payment and prepare delivery from your workspace.',workspaceHint:'Sample data · same order #1051',
    workspaceGreeting:'Order #1051 is ready for review.',workspaceNewOrder:'Open order #1051',workspaceSample:'sample order · ready',workspaceReady:'Ready',workspaceNext:'NEXT ACTION',workspaceNextBook:'Prepare delivery for order #1051.',
    workspacePrepareDelivery:'Prepare sample delivery',workspaceNextNote:'Sample booking. No courier request was sent.',workspaceDeliveryReady:'Ready to prepare',workspacePrepared:'Await courier pickup',workspaceCourierBooked:'Await courier pickup',
    workspacePaymentLabel:'Payment',workspaceStockLabel:'Inventory',workspaceStockRecorded:'Stock updated from the sample order',workspaceDeliveryLabel:'Delivery',workspaceMarginLabel:'Estimated item margin',workspaceMarginNote:'Assumes sample item cost of ৳800; excludes fees and overhead.',
    transitionToSell:'Your storefront is ready. Now follow a customer order.',transitionToManage:'The sale is recorded. Your next action is ready.',journeyFinal:'Your storefront, order and next action stay connected.',
    workflowNowReady:'Ready to run the sample order.',workflowNowDone:'Order #1051 is ready in your workspace.',workflowWaiting:'Waiting',workflowRunning:'Running sample order…',workflowComplete:'Order ready',
    stepProfit:'EST. ITEM MARGIN',stepProfitTitle:'Estimated item margin'
  });
  Object.assign(i18n.bn,{
    journeyKicker:'EZCOMO কাজ করতে দেখুন',journeyTitle:'বানান। বিক্রি করুন। চালান।',journeyLead:'স্টোরফ্রন্ট বানান, একটি ক্রেতার অর্ডার অনুসরণ করুন, তারপর পরের কাজগুলো সামলান—সব EZComo-তে যুক্ত।',
    journeyWatch:'পুরো journey দেখুন',journeyPause:'Journey pause করুন',journeyResume:'Journey আবার চালান',journeyWatchAgain:'আবার দেখুন',journeyDuration:'প্রায় ৪৫ সেকেন্ড',journeyManual:'নিজে চেষ্টা করুন',
    journeyBuild:'স্টোর বানান',journeyBuildCopy:'ব্র্যান্ড ও storefront সাজান',journeySell:'একটি বিক্রি দেখুন',journeySellCopy:'Checkout থেকে business workflow দেখুন',journeyManage:'ব্যবসা সামলান',journeyManageCopy:'পরের কাজটি কী বুঝে নিন',
    journeySample:'নমুনা ডেটা',journeyBack:'পেছনে',journeyNextSell:'পরের ধাপ: বিক্রি দেখুন',journeyNextManage:'পরের ধাপ: ব্যবসা সামলান',journeyCreate:'আপনার স্টোর তৈরি করুন →',
    builderLabel:'০১ · BUILD · পূর্ণ STOREFRONT EDITOR',builderTitle:'আপনার ব্র্যান্ড। আপনার layout। আপনার store।',builderCopy:'Storefront সরাসরি edit করুন, অথবা EZComo কীভাবে সাজায় দেখুন।',builderHint:'Headline বদলে দেখুন।',
    builderHintUpdated:'Storefront সঙ্গে সঙ্গে update হয়।',builderHintReordered:'ক্রেতাকে কী আগে দেখাতে চান, সেইভাবে page সাজান।',
    workflowLabel:'০২ · SELL · মূল ANIMATED ORDER WORKFLOW',workflowTitle:'একটি অর্ডার। এরপর কী হয় দেখুন।',workflowCopy:'একটি sample sale checkout থেকে payment, stock ও workspace পর্যন্ত অনুসরণ করুন।',workflowRun:'▶ Order workflow চালান',placeOrder:'Sample order দিন',
    workflowResult:'#1051 অর্ডার workspace-এ প্রস্তুত।',workflowResultNote:'Payment, stock ও estimated item margin রেকর্ড হয়েছে। Delivery এখন পরের merchant action।',marginExplainer:'নমুনা বিক্রয় মূল্য ৳১,৪৯০ − ধরা item cost ৳৮০০ = ৳৬৯০। Delivery, payment fee, discount, tax ও overhead অন্তর্ভুক্ত নয়।',
    workspaceLabel:'০৩ · MANAGE · MERCHANT WORKSPACE',workspaceTitle:'এরপর কোন কাজটা দরকার, তা বুঝে নিন।',workspaceCopy:'অর্ডার দেখুন, payment যাচাই করুন এবং workspace থেকেই delivery প্রস্তুত করুন।',workspaceHint:'নমুনা ডেটা · একই #1051 অর্ডার',
    workspaceGreeting:'#1051 অর্ডার review-এর জন্য প্রস্তুত।',workspaceNewOrder:'#1051 অর্ডার খুলুন',workspaceSample:'sample order · ready',workspaceReady:'প্রস্তুত',workspaceNext:'পরের কাজ',workspaceNextBook:'#1051 অর্ডারের delivery প্রস্তুত করুন।',
    workspacePrepareDelivery:'Sample delivery প্রস্তুত করুন',workspaceNextNote:'নমুনা booking। কোনো courier request পাঠানো হয়নি।',workspaceDeliveryReady:'প্রস্তুত করার জন্য ready',workspacePrepared:'Courier pickup-এর অপেক্ষায়',workspaceCourierBooked:'Courier pickup-এর অপেক্ষায়',
    workspacePaymentLabel:'পেমেন্ট',workspaceStockLabel:'স্টক',workspaceStockRecorded:'Sample order থেকে stock update হয়েছে',workspaceDeliveryLabel:'ডেলিভারি',workspaceMarginLabel:'আনুমানিক item margin',workspaceMarginNote:'নমুনা item cost ৳৮০০ ধরা হয়েছে; fee ও overhead বাদ।',
    transitionToSell:'Storefront প্রস্তুত। এবার একটি customer order অনুসরণ করুন।',transitionToManage:'বিক্রিটি রেকর্ড হয়েছে। আপনার পরের কাজ প্রস্তুত।',journeyFinal:'আপনার storefront, order আর next action একই ধারায় থাকে।',
    workflowNowReady:'Sample order চালানোর জন্য প্রস্তুত।',workflowNowDone:'#1051 অর্ডার workspace-এ প্রস্তুত।',workflowWaiting:'অপেক্ষায়',workflowRunning:'Sample order চলছে…',workflowComplete:'অর্ডার প্রস্তুত',
    stepProfit:'আনুমানিক ITEM MARGIN',stepProfitTitle:'আনুমানিক item margin'
  });

  const faq = {
    en:{
      start:[['Do I need to code?','No. Start from a complete storefront and use visual controls to shape the store.'],['What happens after Start free?','Create your account, name the store, choose its URL, confirm a storefront direction, complete setup, then continue into the merchant workspace.'],['Can I keep selling through social media?','Yes. Social channels can continue to drive discovery while EZComo gives customers a structured storefront and order path.']],
      payments:[['Which payment methods can I offer?','The storefront supports bKash, Nagad and cash on delivery. Automated bKash checkout is available when a supported merchant connection is active.'],['Does EZComo promise zero gateway fees?','No. Gateway or provider fees depend on your merchant arrangement. Check provider terms and current plan details before launch.']],
      delivery:[['Which courier flow is active?','Pathao merchant-API booking is available from the order workflow when configured.'],['What about other couriers?','Steadfast, REDX, eCourier and Paperfly currently have setup flows. Check your store connection state before relying on automation.']],
      domains:[['Can I use my own domain?','Yes, when custom-domain access is enabled for your store and you have an eligible active paid plan. DNS setup and verification are required.'],['Can I change the storefront later?','Yes. You can change visual presentation without recreating the product catalog from zero.']]
    },
    bn:{
      start:[['কোড জানতে হবে?','না। রেডি একটি স্টোরফ্রন্ট থেকে শুরু করুন, তারপর ভিজ্যুয়াল এডিটরেই নিজের মতো করে সাজান।'],['“ফ্রি শুরু করুন” চাপলে কী হবে?','অ্যাকাউন্ট খুলে স্টোরের নাম ও URL দিন, পছন্দের স্টোরফ্রন্ট বেছে সেটআপ শেষ করুন। এরপর সরাসরি আপনার মার্চেন্ট ওয়ার্কস্পেসে কাজ শুরু করতে পারবেন।'],['Facebook বা Instagram-এ বিক্রি চালিয়ে যেতে পারব?','অবশ্যই। Social media থেকে মানুষ আসবে, আর EZComo-র স্টোরে তারা পণ্য দেখে গোছানোভাবে অর্ডার করতে পারবে।']],
      payments:[['কোন কোন পেমেন্ট অপশন দিতে পারব?','স্টোরফ্রন্টে bKash, Nagad ও Cash on Delivery রাখা যায়। Supported merchant connection চালু থাকলে automated bKash checkout-ও ব্যবহার করা যায়।'],['EZComo কি gateway fee শূন্য থাকার গ্যারান্টি দেয়?','না। Gateway বা provider charge আপনার merchant arrangement-এর ওপর নির্ভর করে। চালু করার আগে provider-এর শর্ত ও বর্তমান প্ল্যানের তথ্য দেখে নিন।']],
      delivery:[['কোন কুরিয়ার অটোমেশন এখন কাজ করে?','Pathao কনফিগার করা থাকলে অর্ডার ওয়ার্কফ্লো থেকেই merchant API booking করা যায়।'],['অন্য কুরিয়ার ব্যবহার করতে চাইলে?','Steadfast, REDX, eCourier ও Paperfly-এর জন্য setup flow আছে। Automation-এর ওপর নির্ভর করার আগে আপনার স্টোরে কোন connection চালু আছে দেখে নিন।']],
      domains:[['নিজের ডোমেইন ব্যবহার করতে পারব?','হ্যাঁ। আপনার স্টোরে custom-domain access চালু থাকতে হবে এবং যোগ্য active paid plan থাকতে হবে। এরপর DNS setup ও verification সম্পন্ন করতে হবে।'],['পরে স্টোরের ডিজাইন বদলানো যাবে?','হ্যাঁ। পণ্যের ক্যাটালগ নতুন করে না বানিয়েই স্টোরফ্রন্টের ডিজাইন ও উপস্থাপন বদলাতে পারবেন।']]

    }
  };

  let lang='en', selected='threads', directionSelected='fashion', faqCategory='start';

  function applyLanguage(next){
    lang=next; document.documentElement.lang=lang==='bn'?'bn':'en'; document.body.classList.toggle('bn',lang==='bn');
    $$('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;if(i18n[lang][key])el.textContent=i18n[lang][key]});
    $$('[data-i18n-html]').forEach(el=>{const key=el.dataset.i18nHtml;if(i18n[lang][key])el.innerHTML=i18n[lang][key]});
    const toggle=$('#langToggle'); if(toggle){toggle.querySelectorAll('span').forEach((el,i)=>el.classList.toggle('active',(lang==='en'&&i===0)||(lang==='bn'&&i===1))); toggle.querySelectorAll('span').forEach((el,i)=>el.style.color=((lang==='en'&&i===0)||(lang==='bn'&&i===1))?'var(--ink)':'var(--muted)');}
    renderFaq(); updateTemplateText();
    const activeHeroData=templates[$('.store-tab.active')?.dataset.template||'threads']||templates.threads;
    if($('#heroStoreEyebrow')) $('#heroStoreEyebrow').textContent=lang==='bn'?(activeHeroData.bnEyebrow||activeHeroData.eyebrow):activeHeroData.eyebrow;
    if($('#visualHeadline')) $('#visualHeadline').textContent=lang==='bn'?(activeHeroData.bnVisual||activeHeroData.visual):activeHeroData.visual;
    if($('#heroStoreBody')) $('#heroStoreBody').textContent=lang==='bn'?(activeHeroData.bnBody||activeHeroData.body):activeHeroData.body;
    if($('#heroStoreCta')) $('#heroStoreCta').textContent=lang==='bn'?(activeHeroData.bnCta||activeHeroData.cta):activeHeroData.cta;
    const heroSecondary=$('.storefront-cta-row span'); if(heroSecondary) heroSecondary.textContent=lang==='bn'?(activeHeroData.bnSecondary||activeHeroData.secondary):activeHeroData.secondary;
    if($('#heroFeaturedTitle')) $('#heroFeaturedTitle').textContent=lang==='bn'?(activeHeroData.bnFeatured||activeHeroData.featured):activeHeroData.featured;
    window.__syncEditor?.(); window.__syncWorkflowLanguage?.(); window.__syncJourneyLanguage?.();
  }

  function updateSignup(){
    const direction=directions[directionSelected]||directions.fashion;
    $$('[data-signup]:not(#templateSignup)').forEach(a=>a.href=`https://ezcomo.shop/signup?template=${encodeURIComponent(direction.slug)}`);
    const close=$('#closingSignup'); if(close) close.textContent=lang==='bn'?`${direction.name} দিয়ে শুরু করুন`:`Start with ${direction.name}`;
    const templateSignup=$('#templateSignup');
    if(templateSignup) templateSignup.href=`https://ezcomo.shop/signup?template=${encodeURIComponent(direction.slug)}`;
    $$('.plan-signup').forEach(a=>{
      const planId=a.dataset.planId||'free';
      a.href=`https://ezcomo.shop/signup?planId=${encodeURIComponent(planId)}&template=${encodeURIComponent(direction.slug)}`;
    });

  }

  function selectTemplate(id){
    if(!templates[id]) return;
    selected=id;
    const data=templates[id];
    $$('.store-tab').forEach(b=>{const a=b.dataset.template===id;b.classList.toggle('active',a);b.setAttribute('aria-selected',String(a))});
    const heroVisual=$('#heroStoreVisual');
    if(heroVisual){
      heroVisual.dataset.templateVisual=id;
      heroVisual.classList.remove('visual-switch');
      void heroVisual.offsetWidth;
      heroVisual.classList.add('visual-switch');
      setTimeout(()=>heroVisual.classList.remove('visual-switch'),650);
    }
    const title=$('#heroWindowTitle'); if(title) title.textContent=data.name;
    if($('#heroStoreBrand')) $('#heroStoreBrand').textContent=data.brand;
    if($('#heroStoreEyebrow')) $('#heroStoreEyebrow').textContent=lang==='bn'?(data.bnEyebrow||data.eyebrow):data.eyebrow;
    if($('#visualHeadline')) $('#visualHeadline').textContent=lang==='bn'?(data.bnVisual||data.visual):data.visual;
    if($('#heroStoreBody')) $('#heroStoreBody').textContent=lang==='bn'?(data.bnBody||data.body):data.body;
    if($('#heroStoreCta')) $('#heroStoreCta').textContent=lang==='bn'?(data.bnCta||data.cta):data.cta;
    const heroSecondary=$('.storefront-cta-row span'); if(heroSecondary) heroSecondary.textContent=lang==='bn'?(data.bnSecondary||data.secondary):data.secondary;
    if($('#heroFeaturedTitle')) $('#heroFeaturedTitle').textContent=lang==='bn'?(data.bnFeatured||data.featured):data.featured;
    data.products.forEach((product,index)=>{
      const n=index+1;
      const name=$(`#heroProduct${n}Name`),price=$(`#heroProduct${n}Price`);
      const art=$(`.storefront-products article:nth-child(${n}) .flat-product`);
      if(name)name.textContent=product[0];
      if(price)price.textContent=product[1];
      if(art)art.className=`flat-product flat-${product[2]}`;
    });
  }

  function selectDirection(id){
    if(!directions[id]) return;
    directionSelected=id;
    const data=directions[id];
    $$('.template-option').forEach(b=>{const active=b.dataset.templateFull===id;b.classList.toggle('active',active);b.setAttribute('aria-selected',String(active))});
    $$('[data-direction-panel]').forEach(panel=>{const active=panel.dataset.directionPanel===id;panel.classList.toggle('active',active);panel.hidden=!active});
    if($('#templateTitle')) $('#templateTitle').textContent=data.name;
    if($('#templateDescription')) $('#templateDescription').textContent=lang==='bn'?data.bn:data.desc;
    if($('#templateLabel')) $('#templateLabel').textContent=lang==='bn'?`${data.name} · স্টোরের ধরন`:`${data.name} · structure`;
    if($('#directionModel')) $('#directionModel').textContent=lang==='bn'?(data.bnModel||data.model):data.model;
    if($('#directionFlow')) $('#directionFlow').textContent=lang==='bn'?(data.bnFlow||data.flow):data.flow;
    if($('#directionBlocks')) $('#directionBlocks').textContent=lang==='bn'?(data.bnBlocks||data.blocks):data.blocks;
    const index=Object.keys(directions).indexOf(id)+1;
    if($('#templateCount')) $('#templateCount').textContent=String(index).padStart(2,'0');
    updateSignup();
  }

  function updateTemplateText(){
    const data=directions[directionSelected]||directions.fashion;
    if($('#templateDescription')) $('#templateDescription').textContent=lang==='bn'?data.bn:data.desc;
    if($('#directionModel')) $('#directionModel').textContent=lang==='bn'?(data.bnModel||data.model):data.model;
    if($('#directionFlow')) $('#directionFlow').textContent=lang==='bn'?(data.bnFlow||data.flow):data.flow;
    if($('#directionBlocks')) $('#directionBlocks').textContent=lang==='bn'?(data.bnBlocks||data.blocks):data.blocks;
    updateSignup();
  }

  $$('.store-tab').forEach(b=>b.addEventListener('click',()=>selectTemplate(b.dataset.template)));
  $$('.template-option').forEach(b=>b.addEventListener('click',()=>selectDirection(b.dataset.templateFull)));

  $('#langToggle')?.addEventListener('click',()=>applyLanguage(lang==='en'?'bn':'en'));
  let lampScrollFrame=0;
  const syncLampScrollState=()=>{
    lampScrollFrame=0;
    document.body.classList.toggle('lamp-rope-compact',window.scrollY>220);
  };
  addEventListener('scroll',()=>{
    if(!lampScrollFrame)lampScrollFrame=requestAnimationFrame(syncLampScrollState);
  },{passive:true});
  syncLampScrollState();

  const themeToggle=$('#themeToggle');
  const navLamp=$('#navLamp');
  const lampPull=$('#lampPull');
  const prefersReducedMotion=()=>matchMedia('(prefers-reduced-motion:reduce)').matches;
  const syncLampState=()=>{
    const light=document.documentElement.dataset.theme==='light';
    themeToggle?.setAttribute('aria-pressed',String(light));
    navLamp?.classList.toggle('is-lit',light);
  };
  const applyTheme=next=>{
    document.documentElement.dataset.theme=next;
    sessionStorage.setItem('ezcomo-v4-theme',next);
    syncLampState();
  };
  const toggleTheme=()=>applyTheme(document.documentElement.dataset.theme==='dark'?'light':'dark');

  let lampFrame=0,lampAngle=0,lampVelocity=0,lampDragging=false,lampMoved=false;
  const stopLampPhysics=()=>{cancelAnimationFrame(lampFrame);lampFrame=0;lampPull?.classList.remove('physics-active');};
  const settleLamp=(kick=0)=>{
    if(!lampPull||prefersReducedMotion())return;
    stopLampPhysics();
    lampPull.classList.add('physics-active');
    lampVelocity=kick;
    let last=performance.now();
    const tick=now=>{
      const dt=Math.min(32,now-last)/16.667;last=now;
      const accel=(-.018*lampAngle)-(.052*lampVelocity);
      lampVelocity=(lampVelocity+accel*dt)*.987;
      lampAngle+=lampVelocity*dt;
      lampPull.style.transform=`rotate(${lampAngle.toFixed(3)}deg)`;
      if(Math.abs(lampAngle)<.08&&Math.abs(lampVelocity)<.035){
        lampAngle=0;lampVelocity=0;
        lampPull.style.removeProperty('transform');
        lampPull.classList.remove('physics-active');
        lampFrame=0;
        return;
      }
      lampFrame=requestAnimationFrame(tick);
    };
    lampFrame=requestAnimationFrame(tick);
  };
  const reactLamp=()=>{
    if(!navLamp||prefersReducedMotion())return;
    navLamp.classList.remove('lamp-react');
    void navLamp.offsetWidth;
    navLamp.classList.add('lamp-react');
    setTimeout(()=>navLamp.classList.remove('lamp-react'),720);
  };
  const rememberedTheme=sessionStorage.getItem('ezcomo-v4-theme');
  if(rememberedTheme)document.documentElement.dataset.theme=rememberedTheme;
  syncLampState();

  themeToggle?.addEventListener('click',()=>{
    toggleTheme();reactLamp();settleLamp(document.documentElement.dataset.theme==='light'?1.05:-1.05);
  });

  if(lampPull){
    let pointerId=null,pivotX=0,pivotY=0,startX=0,startY=0,lastX=0,lastTime=0;
    lampPull.addEventListener('pointerdown',e=>{
      if(e.button!==undefined&&e.button!==0)return;
      pointerId=e.pointerId;lampDragging=true;lampMoved=false;stopLampPhysics();
      lampPull.classList.add('dragging');
      lampPull.setPointerCapture?.(pointerId);
      const r=lampPull.getBoundingClientRect();
      pivotX=r.left+r.width/2;pivotY=r.top+3;
      startX=e.clientX;startY=e.clientY;lastX=e.clientX;lastTime=performance.now();
      e.preventDefault();
    });
    lampPull.addEventListener('pointermove',e=>{
      if(!lampDragging||e.pointerId!==pointerId)return;
      const dx=e.clientX-pivotX,dy=Math.max(46,e.clientY-pivotY);
      lampAngle=Math.max(-28,Math.min(28,Math.atan2(dx,dy)*180/Math.PI));
      const pull=Math.max(0,Math.min(22,e.clientY-startY));
      lampPull.style.transform=`rotate(${lampAngle.toFixed(2)}deg) translateY(${pull.toFixed(1)}px)`;
      lampPull.style.setProperty('--cord-stretch',String(1+pull/155));
      lampMoved=lampMoved||Math.hypot(e.clientX-startX,e.clientY-startY)>7;
      const now=performance.now(),dt=Math.max(8,now-lastTime);
      lampVelocity=(e.clientX-lastX)/dt*1.1;lastX=e.clientX;lastTime=now;
      e.preventDefault();
    });
    const releaseLamp=e=>{
      if(!lampDragging||e.pointerId!==pointerId)return;
      lampDragging=false;lampPull.classList.remove('dragging');
      lampPull.releasePointerCapture?.(pointerId);
      lampPull.style.removeProperty('--cord-stretch');
      const pullDistance=Math.max(0,e.clientY-startY);
      const shouldToggle=lampMoved&&pullDistance>10;
      lampPull.style.transform=`rotate(${lampAngle.toFixed(2)}deg)`;
      if(shouldToggle){toggleTheme();reactLamp();}
      const kick=Math.max(-2.2,Math.min(2.2,lampVelocity+(e.clientX-startX)*.006));
      settleLamp(kick|| (lampAngle>0?-.55:.55));
      pointerId=null;
      e.preventDefault();
    };
    lampPull.addEventListener('pointerup',releaseLamp);
    lampPull.addEventListener('pointercancel',releaseLamp);
    lampPull.addEventListener('click',e=>{
      if(lampMoved){lampMoved=false;e.preventDefault();return;}
      toggleTheme();reactLamp();settleLamp(document.documentElement.dataset.theme==='light'?1.15:-1.15);
    });
  }

  const wireTabKeyboard=(selector,activate)=>{
    const items=$$(selector);
    items.forEach((btn,index)=>{
      btn.addEventListener('keydown',e=>{
        let next=index;
        if(e.key==='ArrowRight'||e.key==='ArrowDown')next=(index+1)%items.length;
        else if(e.key==='ArrowLeft'||e.key==='ArrowUp')next=(index-1+items.length)%items.length;
        else if(e.key==='Home')next=0;
        else if(e.key==='End')next=items.length-1;
        else return;
        e.preventDefault();
        items[next].focus();
        activate(items[next]);
      });
    });
  };
  wireTabKeyboard('.store-tab',btn=>selectTemplate(btn.dataset.template));
  wireTabKeyboard('.template-option',btn=>selectDirection(btn.dataset.templateFull));
  wireTabKeyboard('.faq-tab',btn=>{faqCategory=btn.dataset.faq;renderFaq()});

  $$('.brand[href="#pageTop"]').forEach(link=>link.addEventListener('click',e=>{
    e.preventDefault();
    history.replaceState(null,'',location.pathname+location.search);
    scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'});
  }));

  const menu=$('#mobileNav'), menuBtn=$('#menuToggle');
  const closeMenu=()=>{menu?.classList.remove('open');menu?.setAttribute('aria-hidden','true');menuBtn?.setAttribute('aria-expanded','false')};
  menuBtn?.addEventListener('click',()=>{const open=menuBtn.getAttribute('aria-expanded')!=='true';menuBtn.setAttribute('aria-expanded',String(open));menu?.classList.toggle('open',open);menu?.setAttribute('aria-hidden',String(!open))});
  $$('#mobileNav a').forEach(a=>a.addEventListener('click',closeMenu)); document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});

  const ann=$('#announcement'); if(sessionStorage.getItem('ezcomo-v4-announcement')==='1')ann?.classList.add('hide');
  $('#announcementClose')?.addEventListener('click',()=>{ann?.classList.add('hide');sessionStorage.setItem('ezcomo-v4-announcement','1')});

  function renderFaq(){
    const list=$('#faqList'); if(!list)return; $$('.faq-tab').forEach(b=>{const active=b.dataset.faq===faqCategory;b.classList.toggle('active',active);b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1});
    list.innerHTML=faq[lang][faqCategory].map((x,i)=>`<article class="faq-item"><button class="faq-question" type="button" aria-expanded="false" aria-controls="faq-a-${i}"><span>${x[0]}</span><b aria-hidden="true">+</b></button><div class="faq-answer" id="faq-a-${i}">${x[1]}</div></article>`).join('');
    $$('.faq-question',list).forEach(btn=>btn.addEventListener('click',()=>{const open=btn.getAttribute('aria-expanded')==='true';btn.setAttribute('aria-expanded',String(!open));btn.querySelector('b').textContent=open?'+':'−'}));
  }
  $$('.faq-tab').forEach(b=>b.addEventListener('click',()=>{faqCategory=b.dataset.faq;renderFaq()}));

  // Interactive full-store editor: section navigation, grouped content, inline editing, alignment, color and constrained drag.
  const editor=$('#editorDemo');
  if(editor){
    const canvas=$('#editorCanvas');
    const inspectorInput=$('#editorTextInput');
    const positionReadout=$('#positionReadout');
    const inspectorName=$('#inspectorLayerName');
    const alignButtons=$$('.inspector-options button',editor);
    const labels={
      en:{announcementText:'Announcement content',heroTitle:'Hero content',categoriesTitle:'Categories content',productsTitle:'Featured products content',promoTitle:'Collection promo content',newTitle:'New arrivals content',storyTitle:'Brand story content',newsletterTitle:'Newsletter content'},
      bn:{announcementText:'অ্যানাউন্সমেন্ট কনটেন্ট',heroTitle:'হিরো কনটেন্ট',categoriesTitle:'ক্যাটাগরি কনটেন্ট',productsTitle:'ফিচার্ড প্রোডাক্ট কনটেন্ট',promoTitle:'কালেকশন প্রোমো কনটেন্ট',newTitle:'নতুন পণ্যের কনটেন্ট',storyTitle:'ব্র্যান্ড স্টোরি কনটেন্ট',newsletterTitle:'নিউজলেটার কনটেন্ট'}
    };
    let selectedLayer=$('[data-editable="heroTitle"]',editor);
    let selectedSection=selectedLayer?.closest('.editor-section')||null;
    let selectedText=$('.editable-title',selectedLayer)||$('.editable-text',selectedLayer);

    const palette=$('.editor-palette',editor);
    const initialSectionOrder=$$('.editor-block-btn',palette).map(btn=>btn.dataset.editorTarget);
    const renumberSectionButtons=()=>{
      $$('.editor-block-btn',palette).forEach((btn,index)=>{
        const number=$('b',btn);
        if(number)number.textContent=String(index+1).padStart(2,'0');
      });
    };
    const syncCanvasOrder=()=>{
      if(!canvas||!palette)return;
      $$('.editor-block-btn',palette).forEach(btn=>{
        const section=document.getElementById(btn.dataset.editorTarget);
        if(section)canvas.appendChild(section);
      });
    };
    const restoreSectionOrder=()=>{
      const tip=$('.editor-palette-tip',palette);
      initialSectionOrder.forEach(id=>{
        const btn=$(`.editor-block-btn[data-editor-target="${id}"]`,palette);
        if(btn)palette.insertBefore(btn,tip);
      });
      syncCanvasOrder();
      renumberSectionButtons();
    };
    const keepReorderedSectionVisible=section=>{
      if(!canvas||!section)return;
      const top=section.offsetTop,bottom=top+section.offsetHeight;
      if(top<canvas.scrollTop+8||bottom>canvas.scrollTop+canvas.clientHeight-8){
        canvas.scrollTop=Math.max(0,top-18);
      }
    };
    const commitSidebarOrder=(draggedBtn,focusPreview=true)=>{
      syncCanvasOrder();
      renumberSectionButtons();
      const section=document.getElementById(draggedBtn.dataset.editorTarget);
      if(section&&focusPreview)keepReorderedSectionVisible(section);
    };

    $$('.editable-text',editor).forEach(el=>el.dataset.initialText=el.textContent||'');
    $$('.editable-layer',editor).forEach(el=>{
      el.dataset.initialLeft=el.style.left||'0%';el.dataset.initialTop=el.style.top||'0%';
      el.dataset.dx='0';el.dataset.dy='0';el.dataset.align='left';
    });

    let editorReactFrame=0,editorReactTimer=0;
    const reactEditor=()=>{
      clearTimeout(editorReactTimer);cancelAnimationFrame(editorReactFrame);
      editor.classList.remove('editor-reacting');
      editorReactFrame=requestAnimationFrame(()=>{
        editor.classList.add('editor-reacting');
        editorReactTimer=setTimeout(()=>editor.classList.remove('editor-reacting'),620);
      });
      $('.editor-palette-tip',editor)?.classList.add('used');
    };
    const readableText=hex=>{
      const v=hex.replace('#','');
      const rgb=v.length===3?v.split('').map(x=>parseInt(x+x,16)):[parseInt(v.slice(0,2),16),parseInt(v.slice(2,4),16),parseInt(v.slice(4,6),16)];
      return (.299*rgb[0]+.587*rgb[1]+.114*rgb[2])>150?'#171915':'#f3f8f5';
    };
    const applyAlignment=(layer,align)=>{
      if(!layer)return;
      const body=$('.editable-group-body',layer);layer.dataset.align=align;
      if(body){body.style.textAlign=align;body.style.alignItems=align==='center'?'center':align==='right'?'flex-end':'flex-start';}
      alignButtons.forEach(btn=>btn.classList.toggle('active',btn.dataset.align===align));
    };
    const syncInspector=()=>{
      if(inspectorName)inspectorName.textContent=selectedLayer?(labels[lang]?.[selectedLayer.dataset.editable]||(selectedSection?.dataset.sectionName||'Content')):(selectedSection?.dataset.sectionName||(lang==='bn'?'সেকশন':'Section'));
      if(inspectorInput){inspectorInput.disabled=!selectedText;inspectorInput.value=selectedText?.textContent?.trim()||'';}
      if(positionReadout){
        if(selectedLayer&&selectedSection){
          const dx=Number(selectedLayer.dataset.dx||0),dy=Number(selectedLayer.dataset.dy||0);
          const x=(selectedLayer.offsetLeft+dx)/selectedSection.clientWidth*100,y=(selectedLayer.offsetTop+dy)/selectedSection.clientHeight*100;
          positionReadout.textContent='X '+Math.round(x)+'% · Y '+Math.round(y)+'%';
        }else positionReadout.textContent='—';
      }
      const align=selectedLayer?.dataset.align||'left';
      alignButtons.forEach(btn=>{btn.disabled=!selectedLayer;btn.classList.toggle('active',!!selectedLayer&&btn.dataset.align===align);});
    };
    window.__syncEditor=syncInspector;

    const markSection=section=>{
      selectedSection=section;
      $$('.editor-section',editor).forEach(el=>el.classList.toggle('active',el===section));
      $$('.editor-block-btn',editor).forEach(btn=>btn.classList.toggle('active',btn.dataset.editorTarget===section?.id));
    };
    const selectLayer=(layer,text=null)=>{
      if(!layer)return;
      selectedLayer=layer;selectedSection=layer.closest('.editor-section');selectedText=text||$('.editable-text',layer);
      $$('.editable-layer',editor).forEach(el=>el.classList.toggle('selected',el===layer));
      markSection(selectedSection);syncInspector();
    };
    const selectSection=section=>{
      if(!section)return;
      markSection(section);
      const layer=$('.editable-layer',section);
      if(layer)selectLayer(layer,$('.editable-text',layer));
      else{selectedLayer=null;selectedText=null;$$('.editable-layer',editor).forEach(el=>el.classList.remove('selected'));syncInspector();}
      if(canvas){
        const cr=canvas.getBoundingClientRect(),sr=section.getBoundingClientRect();
        canvas.scrollTo({top:Math.max(0,canvas.scrollTop+(sr.top-cr.top)-4),behavior:'auto'});
      }
    };

    $$('.editor-block-btn',editor).forEach(btn=>{
      btn.addEventListener('click',e=>{
        if(e.target.closest('.section-drag-grip')){e.preventDefault();return;}
        selectSection(document.getElementById(btn.dataset.editorTarget));reactEditor();
      });
      btn.addEventListener('keydown',e=>{
        if(!e.altKey||(e.key!=='ArrowUp'&&e.key!=='ArrowDown'))return;
        const buttons=$$('.editor-block-btn',palette),index=buttons.indexOf(btn);
        const nextIndex=e.key==='ArrowUp'?index-1:index+1;
        if(nextIndex<0||nextIndex>=buttons.length)return;
        e.preventDefault();
        if(e.key==='ArrowUp')buttons[nextIndex].before(btn);else buttons[nextIndex].after(btn);
        commitSidebarOrder(btn);
        selectSection(document.getElementById(btn.dataset.editorTarget));
        btn.focus();reactEditor();
      });
      const grip=$('.section-drag-grip',btn);
      grip?.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();});
      grip?.addEventListener('pointerdown',e=>{
        if(e.button!==undefined&&e.button!==0)return;
        e.preventDefault();e.stopPropagation();
        const section=document.getElementById(btn.dataset.editorTarget);
        if(section)selectSection(section);
        btn.classList.add('reordering');palette?.classList.add('is-reordering');
        let lastTarget=null,lastAfter=null,moved=false;
        const horizontal=()=>matchMedia('(max-width:700px)').matches;
        const move=ev=>{
          ev.preventDefault();
          const hit=document.elementFromPoint(ev.clientX,ev.clientY);
          const target=hit?.closest?.('.editor-block-btn');
          if(!target||target===btn||!palette?.contains(target))return;
          const rect=target.getBoundingClientRect();
          const after=horizontal()?ev.clientX>rect.left+rect.width/2:ev.clientY>rect.top+rect.height/2;
          if(target===lastTarget&&after===lastAfter)return;
          if(after)target.after(btn);else target.before(btn);
          commitSidebarOrder(btn);
          lastTarget=target;lastAfter=after;moved=true;
        };
        const finish=()=>{
          window.removeEventListener('pointermove',move);
          window.removeEventListener('pointerup',finish);
          window.removeEventListener('pointercancel',finish);
          btn.classList.remove('reordering');palette?.classList.remove('is-reordering');
          if(moved){
            btn.classList.add('reorder-settled');
            setTimeout(()=>btn.classList.remove('reorder-settled'),420);
            reactEditor();
          }
        };
        window.addEventListener('pointermove',move,{passive:false});
        window.addEventListener('pointerup',finish,{once:true});
        window.addEventListener('pointercancel',finish,{once:true});
      });
    });
    $$('.editor-section',editor).forEach(section=>section.addEventListener('pointerdown',e=>{if(!e.target.closest('.editable-layer'))selectSection(section);}));

    $$('.editable-layer',editor).forEach(layer=>{
      layer.addEventListener('pointerdown',()=>selectLayer(layer,selectedText&&layer.contains(selectedText)?selectedText:$('.editable-text',layer)));
      $$('.editable-text',layer).forEach(text=>{
        const choose=()=>selectLayer(layer,text);
        text.addEventListener('focus',choose);text.addEventListener('pointerdown',choose);
        text.addEventListener('input',()=>{selectLayer(layer,text);if(inspectorInput)inspectorInput.value=text.textContent||'';reactEditor();});
      });
      const handle=$('.drag-handle',layer);
      const beginDrag=(startX,startY,mode)=>{
        selectLayer(layer,selectedText&&layer.contains(selectedText)?selectedText:$('.editable-text',layer));
        const section=layer.closest('.editor-section');if(!section)return;
        const startDx=Number(layer.dataset.dx||0),startDy=Number(layer.dataset.dy||0),baseLeft=layer.offsetLeft,baseTop=layer.offsetTop;
        layer.classList.add('dragging');
        const apply=(clientX,clientY)=>{
          const minDx=-baseLeft,maxDx=section.clientWidth-layer.offsetWidth-baseLeft-6,minDy=-baseTop,maxDy=section.clientHeight-layer.offsetHeight-baseTop-6;
          const dx=Math.min(maxDx,Math.max(minDx,startDx+clientX-startX)),dy=Math.min(maxDy,Math.max(minDy,startDy+clientY-startY));
          layer.dataset.dx=dx.toFixed(1);layer.dataset.dy=dy.toFixed(1);layer.style.transform='translate3d('+dx+'px,'+dy+'px,0)';syncInspector();
        };
        if(mode==='mouse'){
          const move=ev=>apply(ev.clientX,ev.clientY);
          const up=()=>{window.removeEventListener('mousemove',move);layer.classList.remove('dragging');reactEditor();};
          window.addEventListener('mousemove',move);window.addEventListener('mouseup',up,{once:true});
        }else{
          const move=ev=>{ev.preventDefault();const t=ev.touches[0];if(t)apply(t.clientX,t.clientY);};
          const up=()=>{window.removeEventListener('touchmove',move);layer.classList.remove('dragging');reactEditor();};
          window.addEventListener('touchmove',move,{passive:false});window.addEventListener('touchend',up,{once:true});window.addEventListener('touchcancel',up,{once:true});
        }
      };
      handle?.addEventListener('mousedown',e=>{if(e.button!==0)return;e.preventDefault();e.stopPropagation();beginDrag(e.clientX,e.clientY,'mouse');});
      handle?.addEventListener('touchstart',e=>{const t=e.touches[0];if(!t)return;e.preventDefault();e.stopPropagation();beginDrag(t.clientX,t.clientY,'touch');},{passive:false});
    });

    inspectorInput?.addEventListener('input',()=>{if(selectedText){selectedText.textContent=inspectorInput.value;reactEditor();}});
    $$('.editor-swatches button',editor).forEach(btn=>btn.addEventListener('click',()=>{if(selectedSection){const color=btn.dataset.color;selectedSection.style.background=color;selectedSection.style.color=readableText(color);reactEditor();}}));
    alignButtons.forEach(btn=>btn.addEventListener('click',()=>{if(selectedLayer){applyAlignment(selectedLayer,btn.dataset.align);reactEditor();}}));

    $('#editorReset')?.addEventListener('click',()=>{
      $$('.editable-text',editor).forEach(el=>el.textContent=el.dataset.initialText||'');
      $$('.editable-layer',editor).forEach(el=>{el.style.left=el.dataset.initialLeft||'0%';el.style.top=el.dataset.initialTop||'0%';el.style.transform='';el.dataset.dx='0';el.dataset.dy='0';applyAlignment(el,'left');});
      $$('.editor-section',editor).forEach(section=>{section.style.removeProperty('background');section.style.removeProperty('color');});
      restoreSectionOrder();
      if(canvas)canvas.scrollTop=0;
      const hero=$('[data-editable="heroTitle"]',editor);selectLayer(hero,$('.editable-title',hero)||$('.editable-text',hero));reactEditor();
    });
    selectLayer(selectedLayer,selectedText);
  }

  // Connected Build → Sell → Manage walkthrough. Existing editor stays intact; this controller only coordinates scenes.
  const journeyShell=$('#features');
  const journeyStage=$('#journeyStage');
  const journeyFrame=$('#journeyFrame');
  const journeyPlay=$('#journeyPlay');
  const journeyPlayLabel=$('#journeyPlayLabel');
  const journeyManual=$('#journeyManual');
  const journeyBack=$('#journeyBack');
  const journeyNext=$('#journeyNext');
  const journeyNextLabel=$('#journeyNextLabel');
  const journeyStep=$('#journeyStep');
  const journeyNextDescription=$('#journeyNextDescription');
  const journeySceneName=$('#journeySceneName');
  const journeyCaption=$('#journeyTransitionCaption');
  const journeyLive=$('#journeyLive');
  const journeyChapters=$$('.journey-chapter');
  const journeyScenes=$$('[data-journey-scene]');
  const journeyOrder=['build','sell','manage'];
  const reduceJourneyMotion=()=>matchMedia('(prefers-reduced-motion:reduce)').matches;
  const sleep=ms=>new Promise(resolve=>setTimeout(resolve,ms));
  const JOURNEY_CANCELLED=Symbol('journey-cancelled');

  const sampleOrder={
    id:'#1051',store:'THREADS',product:'Studio Tee',variant:'Black / M',quantity:1,price:1490,
    initialStock:18,remainingStock:17,paymentMethod:'bKash',paymentStatus:'waiting',
    orderStatus:'waiting',inventoryStatus:'waiting',marginStatus:'waiting',assumedItemCost:800,estimatedItemMargin:690
  };
  const sampleDelivery={status:'not-prepared',reference:null};

  const journeyState={
    mode:'manual',playback:'idle',chapter:'build',transition:null,token:0,
    editorDraft:null,presentationDraft:null,transitionAnimation:null,transitionProxy:null,
    pauseReason:null
  };

  const announceJourney=message=>{
    if(!journeyLive)return;
    journeyLive.textContent='';
    requestAnimationFrame(()=>journeyLive.textContent=message);
  };

  const captureEditorDraft=()=>{
    if(!editor)return null;
    const palette=$('.editor-palette',editor),canvas=$('#editorCanvas');
    return {
      texts:$$('.editable-text',editor).map(el=>el.textContent||''),
      layers:$$('.editable-layer',editor).map(el=>({
        left:el.style.left,top:el.style.top,transform:el.style.transform,dx:el.dataset.dx||'0',dy:el.dataset.dy||'0',align:el.dataset.align||'left'
      })),
      sections:$$('.editor-section',editor).map(el=>({id:el.id,background:el.style.background,color:el.style.color})),
      order:$$('.editor-block-btn',palette).map(btn=>btn.dataset.editorTarget),
      scrollTop:canvas?.scrollTop||0
    };
  };

  const restoreEditorDraft=draft=>{
    if(!draft||!editor)return;
    const palette=$('.editor-palette',editor),canvas=$('#editorCanvas'),tip=$('.editor-palette-tip',palette);
    $$('.editable-text',editor).forEach((el,i)=>{if(draft.texts[i]!==undefined)el.textContent=draft.texts[i]});
    $$('.editable-layer',editor).forEach((el,i)=>{
      const d=draft.layers[i];if(!d)return;
      el.style.left=d.left;el.style.top=d.top;el.style.transform=d.transform;
      el.dataset.dx=d.dx;el.dataset.dy=d.dy;el.dataset.align=d.align;
      const body=$('.editable-group-body',el);
      if(body){body.style.textAlign=d.align;body.style.alignItems=d.align==='center'?'center':d.align==='right'?'flex-end':'flex-start';}
    });
    draft.sections.forEach(d=>{
      const section=document.getElementById(d.id);if(!section)return;
      section.style.background=d.background;section.style.color=d.color;
    });
    draft.order.forEach(id=>{
      const btn=$('.editor-block-btn[data-editor-target="'+id+'"]',palette);
      const section=document.getElementById(id);
      if(btn&&tip)palette.insertBefore(btn,tip);
      if(section&&canvas)canvas.appendChild(section);
    });
    $$('.editor-block-btn',palette).forEach((btn,i)=>{const n=$('b',btn);if(n)n.textContent=String(i+1).padStart(2,'0')});
    if(canvas)canvas.scrollTop=draft.scrollTop||0;
    const input=$('#editorTextInput');const active=$('.editable-layer.selected .editable-text',editor)||$('.editable-title',$('[data-editable="heroTitle"]',editor));
    if(input&&active)input.value=active.textContent||'';
    window.__syncEditor?.();
  };

  const setEditorHint=key=>{
    const hint=$('.editor-interaction-cue span',editor?.closest('.editor-story')||document);
    if(hint)hint.textContent=i18n[lang]?.[key]||key;
  };

  const clearGuidedEditorEffects=()=>{
    editor?.classList.remove('guided-editor-running');
    $('.guided-editor-focus',editor||document)?.classList.remove('guided-editor-focus');
    $('.guided-swatch-focus',editor||document)?.classList.remove('guided-swatch-focus');
    $('.guided-reorder-focus',editor||document)?.classList.remove('guided-reorder-focus');
  };

  const setChapter=(chapter,{announce=true}={})=>{
    if(!journeyOrder.includes(chapter))return;
    journeyState.chapter=chapter;
    journeyScenes.forEach(scene=>{
      const active=scene.dataset.journeyScene===chapter;
      scene.hidden=!active;
      scene.setAttribute('aria-hidden',String(!active));
      scene.classList.toggle('journey-scene-active',active);
    });
    journeyChapters.forEach(btn=>{
      const active=btn.dataset.journeyChapter===chapter;
      btn.classList.toggle('active',active);
      btn.setAttribute('aria-selected',String(active));
      btn.tabIndex=active?0:-1;
    });
    if(journeyFrame)journeyFrame.dataset.chapter=chapter;
    if(journeySceneName)journeySceneName.textContent=chapter==='build'?(lang==='bn'?'Build':'Build'):chapter==='sell'?(lang==='bn'?'Sell':'Sell'):(lang==='bn'?'Manage':'Manage');
    const index=journeyOrder.indexOf(chapter);
    if(journeyStep)journeyStep.textContent=(lang==='bn'?'ধাপ ':'Step ')+(index+1)+' / 3';
    if(journeyBack)journeyBack.disabled=index===0;
    if(journeyNextLabel){
      journeyNextLabel.textContent=index===0?(i18n[lang]?.journeyNextSell||'Next: Watch a sale happen'):
        index===1?(i18n[lang]?.journeyNextManage||'Next: Manage the business'):(i18n[lang]?.journeyCreate||'Create your store →');
    }
    if(journeyNextDescription){
      journeyNextDescription.textContent=index===0
        ?(lang==='bn'?'পরের ধাপে #1051 sample order checkout থেকে business flow-এ যাবে।':'Next: follow order #1051 from checkout into the business.')
        :index===1
          ?(lang==='bn'?'পরের ধাপে একই অর্ডার workspace-এ খুলবে।':'Next: open the same order inside the merchant workspace.')
          :(i18n[lang]?.journeyFinal||'Your storefront, order and next action stay connected.');
    }
    if(announce)announceJourney(
      chapter==='build'?(i18n[lang]?.journeyBuild||'Build your store'):
      chapter==='sell'?(i18n[lang]?.journeySell||'Watch a sale happen'):
      (i18n[lang]?.journeyManage||'Manage the business')
    );
  };

  const updateJourneyPlaybackUI=()=>{
    if(!journeyPlayLabel)return;
    const key=journeyState.playback==='playing'?'journeyPause':
      journeyState.playback==='paused'?'journeyResume':
      journeyState.playback==='complete'?'journeyWatchAgain':'journeyWatch';
    journeyPlayLabel.textContent=i18n[lang]?.[key]||key;
    journeyPlay?.classList.toggle('is-playing',journeyState.playback==='playing');
    journeyPlay?.classList.toggle('is-paused',journeyState.playback==='paused');
  };

  const cancelTransition=()=>{
    try{journeyState.transitionAnimation?.cancel?.()}catch{}
    journeyState.transitionAnimation=null;
    journeyState.transitionProxy?.remove?.();
    journeyState.transitionProxy=null;
    journeyState.transition=null;
    if(journeyCaption){journeyCaption.hidden=true;journeyCaption.textContent='';}
  };

  const cancelGuidedJourney=({restoreDraft=true,keepPlayback='idle'}={})=>{
    journeyState.token+=1;
    cancelTransition();
    cancelWorkflow();
    clearGuidedEditorEffects();
    if(restoreDraft&&journeyState.editorDraft){
      restoreEditorDraft(journeyState.editorDraft);
      journeyState.editorDraft=null;
      journeyState.presentationDraft=null;
    }
    journeyState.mode='manual';
    journeyState.playback=keepPlayback;
    journeyState.pauseReason=null;
    updateJourneyPlaybackUI();
  };

  const pauseJourney=reason=>{
    if(journeyState.mode!=='guided'||journeyState.playback!=='playing')return;
    journeyState.playback='paused';
    journeyState.pauseReason=reason||'manual';
    journeyState.transitionAnimation?.pause?.();
    updateJourneyPlaybackUI();
    announceJourney(i18n[lang]?.journeyPause||'Journey paused');
  };
  const resumeJourney=()=>{
    if(journeyState.mode!=='guided'||journeyState.playback!=='paused')return;
    journeyState.playback='playing';
    journeyState.pauseReason=null;
    journeyState.transitionAnimation?.play?.();
    updateJourneyPlaybackUI();
    announceJourney(i18n[lang]?.journeyResume||'Journey resumed');
  };

  const journeyWait=async(ms,token)=>{
    let remaining=ms,last=performance.now();
    while(remaining>0){
      if(token!==journeyState.token)throw JOURNEY_CANCELLED;
      if(journeyState.playback!=='playing'){
        await sleep(80);last=performance.now();continue;
      }
      const chunk=Math.min(80,remaining);
      await sleep(chunk);
      const now=performance.now();
      if(journeyState.playback==='playing')remaining-=Math.max(0,now-last);
      last=now;
    }
  };

  const showTransitionCaption=async(text,token,hold=700)=>{
    if(!journeyCaption)return;
    journeyCaption.textContent=text;
    journeyCaption.hidden=false;
    await journeyWait(hold,token);
    if(token===journeyState.token)journeyCaption.hidden=true;
  };

  const animateSceneProxy=async({source,chapter,destination,caption,token})=>{
    if(token!==journeyState.token)return;
    const sourceRect=source?.getBoundingClientRect?.();
    let proxy=null;
    if(sourceRect&&sourceRect.width&&sourceRect.height&&!reduceJourneyMotion()){
      proxy=source.cloneNode(true);
      proxy.classList.add('journey-handoff-proxy');
      proxy.setAttribute('aria-hidden','true');
      Object.assign(proxy.style,{
        position:'fixed',left:sourceRect.left+'px',top:sourceRect.top+'px',width:sourceRect.width+'px',height:sourceRect.height+'px',
        margin:'0',zIndex:'9999',pointerEvents:'none',transformOrigin:'top left'
      });
      document.body.appendChild(proxy);
      journeyState.transitionProxy=proxy;
    }
    journeyState.transition=chapter;
    setChapter(chapter,{announce:false});
    await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
    const destRect=destination?.().getBoundingClientRect?.();
    if(proxy&&destRect&&destRect.width&&destRect.height){
      const dx=destRect.left-sourceRect.left,dy=destRect.top-sourceRect.top,sx=destRect.width/sourceRect.width,sy=destRect.height/sourceRect.height;
      const animation=proxy.animate([
        {transform:'translate3d(0,0,0) scale(1,1)',opacity:1},
        {transform:`translate3d(${dx}px,${dy}px,0) scale(${sx},${sy})`,opacity:.2}
      ],{duration:850,easing:'cubic-bezier(.2,.8,.2,1)',fill:'forwards'});
      journeyState.transitionAnimation=animation;
      try{await animation.finished}catch{}
      if(token!==journeyState.token){proxy.remove();throw JOURNEY_CANCELLED;}
      proxy.remove();journeyState.transitionProxy=null;journeyState.transitionAnimation=null;
    }
    journeyState.transition=null;
    await showTransitionCaption(caption,token,reduceJourneyMotion()?350:750);
  };

  const runGuidedEditor=async token=>{
    if(!editor)return;
    editor.classList.add('guided-editor-running');
    setEditorHint('builderHint');
    const heroLayer=$('[data-editable="heroTitle"]',editor);
    const heroTitle=$('.editable-title',heroLayer);
    heroLayer?.classList.add('guided-editor-focus');
    await journeyWait(1600,token);
    if(heroTitle){
      heroTitle.textContent=lang==='bn'?'প্রতিদিনের স্টাইল, এবার একেবারে আপনার।':'Everyday style, unmistakably yours.';
      const input=$('#editorTextInput');if(input)input.value=heroTitle.textContent;
    }
    setEditorHint('builderHintUpdated');
    await journeyWait(2100,token);

    const forestSwatch=$('.editor-swatches button[data-color="#33483d"]',editor);
    forestSwatch?.classList.add('guided-swatch-focus');
    const heroBlock=$('#heroBlock');
    if(heroBlock){heroBlock.style.background='#33483d';heroBlock.style.color='#f3f8f5';}
    await journeyWait(2100,token);
    forestSwatch?.classList.remove('guided-swatch-focus');

    const palette=$('.editor-palette',editor),canvas=$('#editorCanvas');
    const productsBtn=$('.editor-block-btn[data-editor-target="productsBlock"]',palette);
    const categoriesBtn=$('.editor-block-btn[data-editor-target="categoriesBlock"]',palette);
    const products=$('#productsBlock'),categories=$('#categoriesBlock');
    productsBtn?.classList.add('guided-reorder-focus');
    if(productsBtn&&categoriesBtn)categoriesBtn.before(productsBtn);
    if(products&&categories)categories.before(products);
    $$('.editor-block-btn',palette).forEach((btn,i)=>{const n=$('b',btn);if(n)n.textContent=String(i+1).padStart(2,'0')});
    setEditorHint('builderHintReordered');
    await journeyWait(2100,token);
    productsBtn?.classList.remove('guided-reorder-focus');

    const tee=$('.editor-product-card .flat-tee',editor);
    tee?.closest('.editor-product-card')?.classList.add('guided-product-focus');
    await journeyWait(1900,token);
    tee?.closest('.editor-product-card')?.classList.remove('guided-product-focus');
    heroLayer?.classList.remove('guided-editor-focus');
    editor.classList.remove('guided-editor-running');
  };

  const workflowDemo=$('#workflowDemo');
  const workflowCard=$('#orderWorkflowCard');
  const workflowRun=$('#workflowRun');
  const placeOrderDemo=$('#placeOrderDemo');
  const workflowStatus=$('#workflowStatus');
  const workflowNow=$('#workflowNow');
  const workflowSteps=['payment','order','inventory','profit'];
  let workflowRunning=false,workflowRunToken=0,activeWorkflowStep=null;

  const workspaceDemo=$('#workspaceDemo');
  const workspaceOrdersBtn=$('#workspaceOrdersBtn');
  const workspaceOrderRow=$('#workspaceOrderRow');
  const workspaceOrderDetail=$('#workspaceOrderDetail');
  const workspacePrepareDelivery=$('#workspacePrepareDelivery');
  const workspaceGreeting=$('#workspaceGreeting');
  const workspacePaymentMetric=$('#workspacePaymentMetric');
  const workspaceStockMetric=$('#workspaceStockMetric');
  const workspaceCourierMetric=$('#workspaceCourierMetric');
  const workspaceSampleState=$('#workspaceSampleState');
  const workspaceOrderState=$('#workspaceOrderState');
  const workspacePaymentDetail=$('#workspacePaymentDetail');
  const workspaceStockDetail=$('#workspaceStockDetail');
  const workspaceDeliveryState=$('#workspaceDeliveryState');
  const workspaceCourierRef=$('#workspaceCourierRef');
  const workspaceMarginState=$('#workspaceMarginState');
  const workspaceNextText=$('#workspaceNextText');
  const workspaceNextNote=$('#workspaceNextNote');

  const workflowNarration={
    en:{payment:'The sample payment is being confirmed…',order:'Order #1051 is appearing in your workspace…',inventory:'Studio Tee stock is updating from 18 to 17…',profit:'Calculating estimated item margin…'},
    bn:{payment:'Sample payment confirm হচ্ছে…',order:'#1051 অর্ডার workspace-এ যোগ হচ্ছে…',inventory:'Studio Tee-এর stock ১৮ থেকে ১৭ হচ্ছে…',profit:'আনুমানিক item margin হিসাব হচ্ছে…'}
  };

  const syncWorkflowNow=()=>{
    if(!workflowNow)return;
    workflowNow.textContent=activeWorkflowStep
      ?(workflowNarration[lang]?.[activeWorkflowStep]||workflowNarration.en[activeWorkflowStep])
      :workflowDemo?.classList.contains('finished')
        ?(i18n[lang]?.workflowNowDone||'Order #1051 is ready in your workspace.')
        :(i18n[lang]?.workflowNowReady||'Ready to run the sample order.');
  };
  const setWorkflowStatus=key=>{if(workflowStatus)workflowStatus.textContent=i18n[lang]?.[key]||key};

  const syncWorkspace=()=>{
    const paymentReady=sampleOrder.paymentStatus==='paid';
    const orderReady=sampleOrder.orderStatus==='ready';
    const inventoryReady=sampleOrder.inventoryStatus==='updated';
    const marginReady=sampleOrder.marginStatus==='estimated';
    if(workspacePaymentMetric)workspacePaymentMetric.textContent=paymentReady?(lang==='bn'?'পেইড':'Paid'):(lang==='bn'?'অপেক্ষায়':'Waiting');
    if(workspacePaymentDetail)workspacePaymentDetail.textContent=paymentReady?(lang==='bn'?'পেইড · bKash':'Paid · bKash'):(lang==='bn'?'অপেক্ষায় · bKash':'Waiting · bKash');
    if(workspaceStockMetric)workspaceStockMetric.textContent=String(inventoryReady?sampleOrder.remainingStock:sampleOrder.initialStock);
    if(workspaceStockDetail)workspaceStockDetail.textContent=inventoryReady?sampleOrder.initialStock+' → '+sampleOrder.remainingStock:(lang==='bn'?'18 in stock · অপেক্ষায়':'18 in stock · waiting');
    if(workspaceMarginState)workspaceMarginState.textContent=marginReady?'+৳'+sampleOrder.estimatedItemMargin:'—';
    if(workspaceOrderState)workspaceOrderState.textContent=sampleDelivery.status==='await-pickup'
      ?(i18n[lang]?.workspacePrepared||'Await courier pickup')
      :orderReady?(i18n[lang]?.workspaceReady||'Ready'):(lang==='bn'?'অপেক্ষায়':'Waiting');
    if(workspaceCourierMetric)workspaceCourierMetric.textContent=sampleDelivery.status==='await-pickup'
      ?(i18n[lang]?.workspacePrepared||'Await courier pickup')
      :orderReady?(i18n[lang]?.workspaceReady||'Ready'):(lang==='bn'?'অপেক্ষায়':'Waiting');
    if(workspaceDeliveryState)workspaceDeliveryState.textContent=sampleDelivery.status==='await-pickup'
      ?(i18n[lang]?.workspacePrepared||'Await courier pickup')
      :(i18n[lang]?.workspaceDeliveryReady||'Ready to prepare');
    if(workspaceCourierRef)workspaceCourierRef.textContent=sampleDelivery.reference|| (lang==='bn'?'কোনো request পাঠানো হয়নি':'No request sent');
    if(workspaceSampleState)workspaceSampleState.textContent=orderReady?(i18n[lang]?.workspaceSample||'sample order · ready'):(lang==='bn'?'sample order · waiting':'sample order · waiting');
    if(workspaceGreeting)workspaceGreeting.textContent=orderReady?(i18n[lang]?.workspaceGreeting||'Order #1051 is ready for review.'):(lang==='bn'?'#1051 sample order Sell ধাপের অপেক্ষায়।':'Order #1051 is waiting for the Sell step.');
    if(workspaceNextText)workspaceNextText.textContent=sampleDelivery.status==='await-pickup'
      ?(i18n[lang]?.workspacePrepared||'Await courier pickup')
      :orderReady?(i18n[lang]?.workspaceNextBook||'Prepare delivery for order #1051.'):(lang==='bn'?'আগে Sell ধাপের sample order চালান।':'Run the Sell sample order first.');
    if(workspaceNextNote)workspaceNextNote.textContent=sampleDelivery.status==='await-pickup'
      ?(lang==='bn'?'Sample booking। কোনো courier request পাঠানো হয়নি।':'Sample booking. No courier request was sent.')
      :(i18n[lang]?.workspaceNextNote||'Sample booking. No courier request was sent.');
    if(workspacePrepareDelivery){
      workspacePrepareDelivery.disabled=!orderReady||sampleDelivery.status==='await-pickup';
      workspacePrepareDelivery.textContent=sampleDelivery.status==='await-pickup'
        ?(i18n[lang]?.workspacePrepared||'Await courier pickup')
        :(i18n[lang]?.workspacePrepareDelivery||'Prepare sample delivery');
    }
  };

  const resetSampleOrder=()=>{
    sampleOrder.paymentStatus='waiting';sampleOrder.orderStatus='waiting';sampleOrder.inventoryStatus='waiting';sampleOrder.marginStatus='waiting';
    sampleDelivery.status='not-prepared';sampleDelivery.reference=null;
    if(workspaceOrderDetail)workspaceOrderDetail.hidden=true;
    workspaceOrderRow?.classList.remove('open','handoff-arrived');
    syncWorkspace();
  };

  const ensureOrderReady=()=>{
    sampleOrder.paymentStatus='paid';sampleOrder.orderStatus='ready';sampleOrder.inventoryStatus='updated';sampleOrder.marginStatus='estimated';
    syncWorkspace();
  };

  const resetWorkflowVisual=({resetOrder=true}={})=>{
    workflowRunToken+=1;workflowRunning=false;activeWorkflowStep=null;
    workflowDemo?.classList.remove('running','finished','courier-click');
    $$('.workflow-step',workflowDemo||document).forEach(step=>{
      step.classList.remove('active','done','just-completed');step.style.removeProperty('--workflow-hold');
    });
    if(workflowRun)workflowRun.disabled=false;
    if(placeOrderDemo)placeOrderDemo.disabled=false;
    setWorkflowStatus('workflowWaiting');syncWorkflowNow();
    if(resetOrder)resetSampleOrder();
  };
  function cancelWorkflow(){workflowRunToken+=1;workflowRunning=false;if(workflowRun)workflowRun.disabled=false;if(placeOrderDemo)placeOrderDemo.disabled=false;}

  const workflowDelay=async(ms,{guided=false,journeyToken=null,runToken})=>{
    if(guided)return journeyWait(ms,journeyToken);
    let remaining=ms;
    while(remaining>0){
      if(runToken!==workflowRunToken)throw JOURNEY_CANCELLED;
      const chunk=Math.min(80,remaining);await sleep(chunk);remaining-=chunk;
    }
  };

  const activateWorkflowStep=(name,hold)=>{
    const step=$('.workflow-step[data-step="'+name+'"]',workflowDemo||document);if(!step)return;
    if(hold)step.style.setProperty('--workflow-hold',hold+'ms');
    activeWorkflowStep=name;step.classList.add('active');syncWorkflowNow();
  };
  const completeWorkflowStep=name=>{
    const step=$('.workflow-step[data-step="'+name+'"]',workflowDemo||document);if(!step)return;
    step.classList.remove('active');step.classList.add('done','just-completed');
    if(name==='payment')sampleOrder.paymentStatus='paid';
    if(name==='order')sampleOrder.orderStatus='ready';
    if(name==='inventory')sampleOrder.inventoryStatus='updated';
    if(name==='profit')sampleOrder.marginStatus='estimated';
    syncWorkspace();
    setTimeout(()=>step.classList.remove('just-completed'),500);
  };

  const runWorkflow=async({guided=false,journeyToken=null}={})=>{
    if(!workflowDemo||workflowRunning)return false;
    resetWorkflowVisual({resetOrder:true});
    const runToken=workflowRunToken;
    workflowRunning=true;workflowDemo.classList.add('running');
    if(workflowRun)workflowRun.disabled=true;if(placeOrderDemo)placeOrderDemo.disabled=true;
    setWorkflowStatus('workflowRunning');
    const reduced=reduceJourneyMotion();
    const timing=reduced
      ?{start:0,hold:40,gap:10,finish:60}
      :guided?{start:1000,hold:2200,gap:350,finish:900}:{start:1200,hold:3400,gap:650,finish:900};
    try{
      await workflowDelay(timing.start,{guided,journeyToken,runToken});
      for(const name of workflowSteps){
        if(runToken!==workflowRunToken)throw JOURNEY_CANCELLED;
        activateWorkflowStep(name,timing.hold);
        await workflowDelay(timing.hold,{guided,journeyToken,runToken});
        completeWorkflowStep(name);
        await workflowDelay(timing.gap,{guided,journeyToken,runToken});
      }
      workflowDemo.classList.add('finished');activeWorkflowStep=null;workflowRunning=false;
      setWorkflowStatus('workflowComplete');syncWorkflowNow();syncWorkspace();
      if(workflowRun)workflowRun.disabled=false;if(placeOrderDemo)placeOrderDemo.disabled=false;
      return true;
    }catch(error){
      workflowRunning=false;
      if(workflowRun)workflowRun.disabled=false;if(placeOrderDemo)placeOrderDemo.disabled=false;
      if(error!==JOURNEY_CANCELLED)throw error;
      return false;
    }
  };

  const openWorkspaceOrder=()=>{
    ensureOrderReady();
    if(workspaceOrderDetail)workspaceOrderDetail.hidden=false;
    workspaceOrderRow?.classList.add('open');
    announceJourney(lang==='bn'?'#1051 অর্ডারের details খোলা হয়েছে।':'Order #1051 details opened.');
  };

  const prepareSampleDelivery=()=>{
    ensureOrderReady();
    if(workspaceOrderDetail)workspaceOrderDetail.hidden=false;
    workspaceOrderRow?.classList.add('open');
    sampleDelivery.status='await-pickup';
    sampleDelivery.reference='DEMO-PX-84721';
    workspaceDemo?.classList.add('delivery-prepared');
    syncWorkspace();
    announceJourney(i18n[lang]?.workspacePrepared||'Await courier pickup');
  };

  workflowRun?.addEventListener('click',()=>runWorkflow({guided:false}));
  placeOrderDemo?.addEventListener('click',()=>runWorkflow({guided:false}));
  workspaceOrdersBtn?.addEventListener('click',openWorkspaceOrder);
  workspaceOrderRow?.addEventListener('click',openWorkspaceOrder);
  workspacePrepareDelivery?.addEventListener('click',prepareSampleDelivery);

  const runGuidedWorkspace=async token=>{
    ensureOrderReady();
    workspaceOrderRow?.classList.add('handoff-arrived');
    await journeyWait(1500,token);
    openWorkspaceOrder();
    $('#workspacePaymentMetric')?.classList.add('journey-emphasis');
    $('#workspaceStockMetric')?.classList.add('journey-emphasis');
    await journeyWait(2100,token);
    $('#workspacePaymentMetric')?.classList.remove('journey-emphasis');
    $('#workspaceStockMetric')?.classList.remove('journey-emphasis');
    workspacePrepareDelivery?.classList.add('journey-action-focus');
    await journeyWait(1400,token);
    prepareSampleDelivery();
    workspacePrepareDelivery?.classList.remove('journey-action-focus');
    await journeyWait(2500,token);
    announceJourney(i18n[lang]?.journeyFinal||'Your storefront, order and next action stay connected.');
  };

  const playGuidedJourney=async token=>{
    try{
      setChapter('build');
      await journeyWait(1500,token);
      await runGuidedEditor(token);

      const sourceProduct=$('.editor-product-card .flat-tee',editor||document);
      await animateSceneProxy({
        source:sourceProduct,chapter:'sell',destination:()=>$('.workflow-product',workflowDemo||document),
        caption:i18n[lang]?.transitionToSell||'Your storefront is ready. Now follow a customer order.',token
      });
      await journeyWait(1700,token);
      await runWorkflow({guided:true,journeyToken:token});
      await journeyWait(2600,token);

      const sourceOrder=$('#workflowResult');
      await animateSceneProxy({
        source:sourceOrder,chapter:'manage',destination:()=>workspaceOrderRow,
        caption:i18n[lang]?.transitionToManage||'The sale is recorded. Your next action is ready.',token
      });
      await runGuidedWorkspace(token);
      if(token!==journeyState.token)throw JOURNEY_CANCELLED;
      journeyState.playback='complete';
      journeyState.mode='guided';
      updateJourneyPlaybackUI();
      if(journeyNextDescription)journeyNextDescription.textContent=i18n[lang]?.journeyFinal||'Your storefront, order and next action stay connected.';
    }catch(error){
      if(error!==JOURNEY_CANCELLED)console.error(error);
    }
  };

  const startGuidedJourney=()=>{
    if(journeyState.playback==='playing')return pauseJourney('manual');
    if(journeyState.playback==='paused')return resumeJourney();
    cancelTransition();cancelWorkflow();
    if(journeyState.editorDraft)restoreEditorDraft(journeyState.editorDraft);
    journeyState.editorDraft=captureEditorDraft();
    journeyState.presentationDraft=captureEditorDraft();
    journeyState.token+=1;
    const token=journeyState.token;
    journeyState.mode='guided';journeyState.playback='playing';journeyState.pauseReason=null;
    resetWorkflowVisual({resetOrder:true});
    clearGuidedEditorEffects();
    updateJourneyPlaybackUI();
    playGuidedJourney(token);
  };

  const enterManualMode=({chapter=journeyState.chapter,restoreDraft=true}={})=>{
    const wasGuided=journeyState.mode==='guided';
    cancelGuidedJourney({restoreDraft:wasGuided&&restoreDraft,keepPlayback:'idle'});
    if(chapter==='manage'&&sampleOrder.orderStatus!=='ready')ensureOrderReady();
    setChapter(chapter);
    updateJourneyPlaybackUI();
  };

  journeyChapters.forEach((btn,index)=>{
    btn.addEventListener('click',()=>enterManualMode({chapter:btn.dataset.journeyChapter}));
    btn.addEventListener('keydown',e=>{
      let next=index;
      if(e.key==='ArrowRight'||e.key==='ArrowDown')next=(index+1)%journeyChapters.length;
      else if(e.key==='ArrowLeft'||e.key==='ArrowUp')next=(index-1+journeyChapters.length)%journeyChapters.length;
      else if(e.key==='Home')next=0;
      else if(e.key==='End')next=journeyChapters.length-1;
      else return;
      e.preventDefault();journeyChapters[next].focus();enterManualMode({chapter:journeyChapters[next].dataset.journeyChapter});
    });
  });
  journeyPlay?.addEventListener('click',startGuidedJourney);
  journeyManual?.addEventListener('click',()=>enterManualMode({chapter:'build'}));
  journeyBack?.addEventListener('click',()=>{
    const i=journeyOrder.indexOf(journeyState.chapter);if(i>0)enterManualMode({chapter:journeyOrder[i-1]});
  });
  journeyNext?.addEventListener('click',()=>{
    const i=journeyOrder.indexOf(journeyState.chapter);
    if(i<2)return enterManualMode({chapter:journeyOrder[i+1],restoreDraft:true});
    const signup=$('#closingSignup')?.href||$('.nav-cta')?.href||'https://ezcomo.shop/signup?template=fashion';
    location.href=signup;
  });

  // Any direct scene interaction owns the experience from that point forward.
  const interruptForManual=e=>{
    if(journeyState.mode!=='guided')return;
    if(e.target.closest('#journeyPlay,#journeyManual,.journey-chapter,.journey-controls'))return;
    enterManualMode({chapter:journeyState.chapter,restoreDraft:true});
  };
  journeyStage?.addEventListener('pointerdown',interruptForManual,true);
  journeyStage?.addEventListener('keydown',e=>{
    if((e.key==='Enter'||e.key===' ')&&journeyState.mode==='guided')interruptForManual(e);
  },true);
  journeyStage?.addEventListener('focusin',e=>{
    if(journeyState.mode==='guided'&&e.target.matches('input,[contenteditable="plaintext-only"],button'))interruptForManual(e);
  },true);

  // Explicit pauses for hidden document / leaving the walkthrough. Never auto-resume.
  document.addEventListener('visibilitychange',()=>{if(document.hidden)pauseJourney('hidden')});
  if(journeyShell&&'IntersectionObserver' in window){
    const journeyVisibility=new IntersectionObserver(entries=>{
      if(!entries.some(e=>e.isIntersecting))pauseJourney('viewport');
    },{threshold:.05});
    journeyVisibility.observe(journeyShell);
  }
  addEventListener('resize',()=>{if(journeyState.transitionAnimation){journeyState.transitionAnimation.cancel();journeyState.transitionProxy?.remove();journeyState.transitionAnimation=null;journeyState.transitionProxy=null;}},{passive:true});

  window.__syncWorkflowLanguage=()=>{
    if(workflowRunning)setWorkflowStatus('workflowRunning');
    else if(workflowDemo?.classList.contains('finished'))setWorkflowStatus('workflowComplete');
    else setWorkflowStatus('workflowWaiting');
    syncWorkflowNow();syncWorkspace();
  };
  window.__syncJourneyLanguage=()=>{
    updateJourneyPlaybackUI();setChapter(journeyState.chapter,{announce:false});syncWorkflowNow();syncWorkspace();
  };

  resetWorkflowVisual({resetOrder:true});
  setChapter('build',{announce:false});
  updateJourneyPlaybackUI();

  const revealItems=$$('.reveal').filter(el=>!el.classList.contains('is-visible'));
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('is-visible');
        observer.unobserve(e.target);
      }
    }),{threshold:.12,rootMargin:'0px 0px -40px'});
    revealItems.forEach(el=>observer.observe(el));
    requestAnimationFrame(()=>revealItems.forEach(el=>{
      if(!el.classList.contains('is-visible'))el.classList.add('reveal-pending');
    }));
    // Fail open: marketing content must never stay blank if an observer is delayed or interrupted.
    setTimeout(()=>revealItems.forEach(el=>el.classList.add('is-visible')),1600);
  }else{
    revealItems.forEach(el=>el.classList.add('is-visible'));
  }

  const motionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(!entry.isIntersecting) return;
    const el=entry.target;
    if(el.classList.contains('system-card')) el.classList.add('system-live');
    if(el.classList.contains('builder-ui')||el.classList.contains('admin-ui')) el.classList.add('demo-live');
    motionObserver.unobserve(el);
  }),{threshold:.32,rootMargin:'0px 0px -10% 0px'});
  $$('.system-card,.builder-ui,.admin-ui').forEach(el=>motionObserver.observe(el));

  $$('[data-spotlight]').forEach(card=>card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect();card.style.setProperty('--mx',`${e.clientX-r.left}px`);card.style.setProperty('--my',`${e.clientY-r.top}px`)}));
  const stage=$('#heroStage');
  if(stage && matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion:reduce)').matches){
    stage.addEventListener('pointermove',e=>{const r=stage.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;stage.style.transform=`translate3d(${x*5}px,${y*4}px,0)`});
    stage.addEventListener('pointerleave',()=>stage.style.transform='');
  }

  const sticky=$('#stickyCta'); let heroVisible=true,conversionVisible=false,dismissed=sessionStorage.getItem('ezcomo-v4-sticky')==='1';
  const refreshSticky=()=>{const visible=!heroVisible&&!conversionVisible&&!dismissed;sticky?.classList.toggle('visible',visible);sticky?.setAttribute('aria-hidden',String(!visible))};
  const heroObs=new IntersectionObserver(es=>{heroVisible=es[0].isIntersecting;refreshSticky()},{threshold:.05}); if($('#hero'))heroObs.observe($('#hero'));
  const conversionNodes=new Set();
  const convObs=new IntersectionObserver(es=>{
    es.forEach(e=>e.isIntersecting?conversionNodes.add(e.target):conversionNodes.delete(e.target));
    conversionVisible=conversionNodes.size>0;
    refreshSticky();
  },{threshold:.08});
  ['#pricing','#closing','#features','#templates','.hero-store-shell'].forEach(s=>{const el=$(s);if(el)convObs.observe(el)});
  $('#stickyClose')?.addEventListener('click',()=>{dismissed=true;sessionStorage.setItem('ezcomo-v4-sticky','1');refreshSticky()});

  applyLanguage('en'); selectTemplate('threads'); selectDirection('fashion'); renderFaq(); resetWorkflow();
})();
