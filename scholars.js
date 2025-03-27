class Scholar{
    constructor(first_name, last_name, class_of, classroom, project_name, group_members, project_profile_link, student_profile_link, presentation_format, past_award_winner){
        this.first_name = first_name;
        this.last_name = last_name;
        this.class_of = class_of;
        this.name_and_class_of = first_name + " " + last_name + " '" + class_of.substring(2);
        this.classroom = classroom;
        this.project_name = project_name;
        this.group_members = group_members;
        this.project_profile_link = project_profile_link;
        this.student_profile_link = student_profile_link;
        this.presentation_format = presentation_format;
        this.past_award_winner = past_award_winner;
    }
}

// Last updated 20 May 2024
// Order will determine result order, best to sort alphabetically by last name
const i2_scholars = [
    new Scholar("Kylie", "Abrego", "2025", "810", "Kismet", 4, "https://i2.today/padma-ignatius/kismet/", "https://i2.today/kylie-abrego/", "", true),
    new Scholar("Nico", "Aldaz", "2027", "805", "", 1, "", "https://i2.today/nico-aldaz/", "", false),
    new Scholar("Blake", "Almon", "2026", "802", "", 1, "", "https://i2.today/blake-almon/", "", false),
    new Scholar("George", "Arriola", "2027", "814", "Algae Sequestration", 1, "https://i2.today/george-arriola/algae-sequestration/", "https://i2.today/george-arriola/", "", false),
    new Scholar("Michael", "Bandak", "2026", "804", "The “AI”ssistant", 2, "https://i2.today/nikhil-bulchandani/the-aissistant/", "https://i2.today/michael-bandak/", "", false),
    new Scholar("Kieran", "Batchelli-Hennessey", "2027", "812", "OceanVapor", 1, "https://i2.today/oceanvapor/", "https://i2.today/kieran-batchelli-hennessey/", "", false),
    new Scholar("Jackson", "Blossom", "2027", "805", "Hustle", 2, "https://i2.today/jackson-blossom/hustle/", "https://i2.today/jackson-blossom/", "", false),
    new Scholar("Michael", "Bridon", "2025", "813", "", 1, "", "https://i2.today/michael-bridon/", "", false),
    new Scholar("Nikhil", "Bulchandani", "2026", "804", "The “AI”ssistant", 2, "https://i2.today/nikhil-bulchandani/the-aissistant/", "https://i2.today/nikhil-bulchandani/", "", false),
    new Scholar("Ava", "Caballeros", "2026", "809", "Tennis Ball Vacuum", 1, "https://i2.today/ava-caballeros/my-2023-2024-project/", "https://i2.today/ava-caballeros/", "PPD", true),
    new Scholar("Liam", "Cannon", "2027", "805", "E-waste Elimination", 2, "https://i2.today/liam-cannon/e-waste-elimination/", "https://i2.today/liam-cannon/", "", false),
    new Scholar("Ella Mei", "Celecia", "2026", "815", "", 1, "", "https://i2.today/ella-mei-celecia-2/", "", false),
    new Scholar("Alexander", "Chang", "2027", "803", "A Power Retrofit for SHC", 1, "https://i2.today/alexander-chang/a-power-retrofit-for-shc/", "https://i2.today/alexander-chang/", "IO", false),
    new Scholar("Christina", "Chew", "2027", "814", "Pest-Away!", 1, "https://i2.today/christina-chew/pest-away-2023-2024/", "https://i2.today/christina-chew/", "", false),
    new Scholar("Chamy", "Choi", "2024", "703", "", 1, "", "", "", false),
    new Scholar("Luke", "Chommanard", "2026", "801", "AirBotanica", 2, "https://i2.today/luke-chommanard/airbotanica/", "https://i2.today/luke-chommanard/", "", false),
    new Scholar("Samad", "Cooper", "2025", "804", "", 1, "", "https://i2.today/samad-cooper/", "", false),
    new Scholar("Douglas (Doug)", "Darling", "2026", "813", "", 2, "", "https://i2.today/douglas-darling/", "", false),
    new Scholar("Fionn", "De Barra", "2027", "805", "E-waste Elimination", 2, "https://i2.today/liam-cannon/e-waste-elimination/", "https://i2.today/fionn-de-barra/", "", false),
    new Scholar("Linh Chi", "Doan", "2027", "803", "Remind H2O", 2, "https://i2.today/linh-chi-doan/remindh2o/", "https://i2.today/linh-chi-doan/", "PPD", false),
    new Scholar("Sloan", "Dobson", "2025", "806", "RepliTech", 2, "https://i2.today/sloan-dobson/replitech/", "https://i2.today/sloan-dobson/", "", false),
    new Scholar("Olivia", "Dziadzia", "2025", "807", "Products4thebay", 1, "https://i2.today/products4thebay/", "https://i2.today/olivia-dziadzia-2/", "", false),
    new Scholar("Jack", "Freeman", "2027", "809", "Star Car", 2, "https://i2.today/oliver-waldin/star-car/", "https://i2.today/jack-freeman/", "PPD", false),
    new Scholar("Lucas", "Fung", "2026", "801", "AirBotanica", 2, "https://i2.today/luke-chommanard/airbotanica/", "https://i2.today/lucas-fung/", "", false),
    new Scholar("Liam", "Gardiner", "2026", "815", "Seedpack", 1, "https://i2.today/seedpack/", "https://i2.today/liam-gardiner/", "", false),
    new Scholar("Rell", "Gentzler", "2025", "806", "RepliTech", 2, "https://i2.today/sloan-dobson/replitech/", "https://i2.today/rell-gentzler/", "", false),
    new Scholar("Derron", "Gibson", "2025", "806", "", 1, "", "https://i2.today/derron-gibson/", "", false),
    new Scholar("Amelia", "Gong", "2026", "812", "Stress Relief Video Game", 1, "https://i2.today/amelia-gong/stress-relief-video-game/", "https://i2.today/amelia-gong/", "", false),
    new Scholar("Matteo", "Gupta", "2026", "802", "Financial Literacy for Kids", 1, "https://i2.today/matteo-gupta/financial-literacy-for-kids/", "https://i2.today/matteo-gupta/", "", false),
    new Scholar("Rylan", "Gutierrez", "2025", "803", "Athletic Injury Recovery 2023-2024", 2, "https://i2.today/rylan-gutierrez-2/athletic-injury-recovery-2023-2024/", "https://i2.today/rylan-gutierrez-2/", "", false),
    new Scholar("Logan", "Haber", "2027", "811", "EcoEthics", 3, "https://i2.today/maggie-orr/ecoethics/", "https://i2.today/logan-haber/", "", false),
    new Scholar("Timothy", "Healey", "2026", "803", "RateMyClass", 2, "https://i2.today/timothy-healey/ratemyclass/", "https://i2.today/timothy-healey/", "", false),
    new Scholar("Willem", "Henstock", "2026", "808", "APGeoBot", 1, "https://i2.today/willem-henstock-2/apgeobot/", "https://i2.today/willem-henstock-2/", "", false),
    new Scholar("Brandon", "Holland", "2025", "811", "CallMap", 1, "https://i2.today/callmap/", "https://i2.today/brandonholland/", "", false),
    new Scholar("Elliot", "Hom", "2025", "801", "", 2, "", "", "", false),
    new Scholar("Killian", "Hourihan", "2026", "806", "Evolved Creatures", 1, "https://i2.today/killian-hourihan/evolved-creatures/", "https://i2.today/killian-hourihan/", "", false),
    new Scholar("Elisha", "Huang", "2027", "803", "Remind H2O", 2, "https://i2.today/linh-chi-doan/remindh2o/", "https://i2.today/elisha-huang/", "PPD", false),
    new Scholar("Padma", "Ignatius", "2025", "810", "Kismet", 4, "https://i2.today/padma-ignatius/kismet/", "https://i2.today/padma-ignatius/", "", true),
    new Scholar("Francesca", "Johnson", "2027", "811", "EcoEthics", 3, "https://i2.today/maggie-orr/ecoethics/", "https://i2.today/francesca-johnson/", "", false),
    new Scholar("Piper", "Johnson", "2027", "814", "Moppy", 3, "https://i2.today//piper-johnson/moppy/", "https://i2.today/piper-johnson/", "", false),
    new Scholar("Jaime", "Kamber", "2026", "815", "Sports Hurt", 1, "https://i2.today/injury-prevention-in-teenage-female-athletes/", "https://i2.today/jaime-kamber/", "", false),
    new Scholar("Zhivan", "Khaleeli", "2025", "810", "Kismet", 4, "https://i2.today/padma-ignatius/kismet/", "https://i2.today/zhivan-khaleeli/", "", true),
    new Scholar("Kaia", "Land", "2026", "814", "", 1, "", "https://i2.today/kaia-land/", "", false),
    new Scholar("Madison", "Lee", "2025", "808", "Math Genies", 2, "https://i2.today/math-genies/", "https://i2.today/madison-lee/", "", false),
    new Scholar("Morgan", "Lee", "2026", "809", "Crystal Clear", 2, "https://i2.today/morgan-lee/crystal-clear/", "https://i2.today/morgan-lee/", "PPD", false),
    new Scholar("Deron", "Lew", "2026", "803", "ASMusic", 1, "https://i2.today/deron-lew/asmusic/", "https://i2.today/deron-lew/", "DPD", false),
    new Scholar("Kailey", "Lin", "2026", "801", "", 1, "", "", "", false),
    new Scholar("Alexis", "Lo", "2025", "811", "CourseWise", 1, "https://i2.today/alexis-lo/coursewise/", "https://i2.today/alexis-lo/", "", false),
    new Scholar("Roman", "Maimone", "2026", "813", "", 1, "", "https://i2.today/roman-maimone/", "", false),
    new Scholar("Evan", "Major", "2027", "807", "The Coral Cutter", 2, "https://i2.today/evan-major/2023-24-i2-project/", "https://i2.today/evan-major/", "", false),
    new Scholar("Philip", "Marinov", "2027", "813", "Adeptic", 2, "https://i2.today/hayden-xie/adeptic/", "https://i2.today/philip-marinov/", "", false),
    new Scholar("Rye", "McMahon", "2027", "807", "The Coral Cutter", 2, "https://i2.today/evan-major/2023-24-i2-project/", "", "", false),
    new Scholar("Yan", "Milman", "2026", "813", "", 2, "", "https://i2.today/yan-milman/", "", false),
    new Scholar("Gianna", "Minella", "2026", "802", "", 1, "", "https://i2.today/gianna-minella/", "", false),
    new Scholar("Graham", "Moore", "2027", "805", "", 1, "", "https://i2.today/graham-moore/", "", false),
    new Scholar("Simone", "Myers", "2027", "814", "", 2, "", "", "", false),
    new Scholar("Hudson", "Newhouse", "2027", "805", "Hustle", 2, "https://i2.today/jackson-blossom/hustle/", "https://i2.today/hudson-newhouse/", "", false),
    new Scholar("Matthew", "Nguyen", "2026", "803", "RateMyClass", 2, "https://i2.today/timothy-healey/ratemyclass/", "https://i2.today/matthew-nguyen/", "", false),
    new Scholar("Margaret (Maggie)", "Orr", "2027", "811", "EcoEthics", 3, "https://i2.today/maggie-orr/ecoethics/", "https://i2.today/maggie-orr/", "", false),
    new Scholar("Shantanu (Shanti)", "Pai", "2027", "815", "Aqua Purify", 1, "https://i2.today/shanti-pai/aqua-purify/", "https://i2.today/shanti-pai/", "", false),
    new Scholar("Faith", "Pan", "2025", "807", "AtypicalAutism 2.0", 3, "https://i2.today/atypicalautism-2-0/", "https://i2.today/faith-pan/", "", false),
    new Scholar("Veronica", "Panina", "2026", "810", "Forecasting Futures: AI In Healthcare", 1, "https://i2.today/veronica-panina/forecasting-futures-ai-in-healthcare/", "https://i2.today/veronica-panina/", "DPD", false),
    new Scholar("Isaac", "Partin", "", "812", "", 1, "", "", "", false),
    new Scholar("Melania", "Paslay", "2027", "814", "", 2, "", "", "", false),
    new Scholar("Ava Marie", "Perez", "2027", "814", "Moppy", 3, "https://i2.today/piper-johnson/moppy", "https://i2.today/ava-perez/", "", false),
    new Scholar("Zelaya", "Perez", "2026", "807", "", 1, "", "https://i2.today/zelaya-perez/", "", false),
    new Scholar("Simran", "Phojanakong", "2026", "810", "The Gene Pool", 1, "https://i2.today/simran-phojanakong/the-gene-pool-education-for-all/", "https://i2.today/simran-phojanakong/", "", false),
    new Scholar("Ivan", "Qiu", "2025", "802", "Eco Hat", 1, "https://i2.today/ivan-qiu/eco_hat/", "https://i2.today/ivan-qiu/", "", false),
    new Scholar("Emily", "Raley", "2025", "801", "", 2, "", "https://i2.today/emily-raley/", "", false),
    new Scholar("Shane", "Ryan", "2025", "810", "Kismet", 4, "https://i2.today/padma-ignatius/kismet/", "https://i2.today/shane-ryan/", "", true),
    new Scholar("Bram", "Salverda", "2027", "801", "", 1, "", "https://i2.today/bram-salverda-3/", "", false),
    new Scholar("Slava", "Shabelsky", "2026", "811", "", 1, "", "https://i2.today/slava-shabelsky/", "", true),
    new Scholar("William (Bill)", "Smith", "2025", "812", "Textbook Marketplace 2.0", 1, "https://i2.today/bill-smith/textbook-marketplace-2-0/", "https://i2.today/bill-smith/", "", false),
    new Scholar("Isabella (Izzy)", "Sophia Guzman", "2025", "809", "Sixth Sense", 1, "", "https://i2.today/isabella-guzman/", "PPD", true),
    new Scholar("Lilah", "Stern", "2025", "806", "", 1, "", "https://i2.today/lilah-stern/", "", false),
    new Scholar("Seth", "Suarez", "2026", "802", "", 1, "", "https://i2.today/seth-suarez/", "", false),
    new Scholar("Dagny", "Suro", "2027", "812", "", 1, "", "https://i2.today/dagny-suro/", "", true),
    new Scholar("Cali", "Tangaan", "2027", "814", "Moppy", 3, "https://i2.today/piper-johnson/moppy", "https://i2.today/cali-tangaan/", "", false),
    new Scholar("Keyon", "Tanksley", "2025", "803", "Athletic Injury Recovery 2023-2024", 2, "https://i2.today/rylan-gutierrez-2/athletic-injury-recovery-2023-2024/", "https://i2.today/keyon-tanksley/", "", false),
    new Scholar("Cruz", "Tengco", "2026", "815", "", 1, "", "", "", false),
    new Scholar("Leo", "Thomson", "2027", "801", "", 1, "", "https://i2.today/leo-thomson/", "", false),
    new Scholar("Taurus", "Tong", "2025", "807", "AtypicalAutism 2.0", 3, "https://i2.today/atypicalautism-2-0/", "https://i2.today/taurus-tong/", "", false),
    new Scholar("Deeran", "Vermeij", "2026", "810", "", 1, "", "", "", false),
    new Scholar("Samantha", "Wai", "2025", "807", "AtypicalAutism 2.0", 3, "https://i2.today/atypicalautism-2-0/", "https://i2.today/samantha-wai/", "", false),
    new Scholar("Oliver", "Waldin", "2027", "809", "Star Car", 2, "https://i2.today/oliver-waldin/star-car/", "https://i2.today/oliver-waldin/", "PPD", false),
    new Scholar("Ashley", "Wang", "2027", "809", "Crystal Clear", 2, "https://i2.today/morgan-lee/crystal-clear/", "https://i2.today/ashley-wang/", "PPD", false),
    new Scholar("Isaac", "Wang", "2025", "813", "", 1, "", "https://i2.today/isaac-wang/", "", false),
    new Scholar("Matthew", "Wells", "2027", "805", "ReCharge Controller", 1, "https://i2.today/matthew-wells/recharge-controller/", "https://i2.today/matthew-wells/", "", false),
    new Scholar("Silver", "Wiesler", "2026", "804", "", 1, "", "https://i2.today/silver-wiesler/", "", false),
    new Scholar("Katie", "Worster", "2026", "806", "", 1, "", "https://i2.today/katie-worster/", "", false),
    new Scholar("Hayden", "Xie", "2027", "813", "Adeptic", 2, "https://i2.today/hayden-xie/adeptic/", "https://i2.today/hayden-xie/", "", false),
    new Scholar("Jaden", "Yoon", "2026", "804", "", 1, "", "https://i2.today/jaden-yoon/", "", false),
    new Scholar("Leah", "Zheng", "2025", "808", "Math Genies", 2, "https://i2.today/math-genies/", "https://i2.today/leah-zheng/", "", false),
];