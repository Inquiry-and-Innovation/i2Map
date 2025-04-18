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
    new Scholar("Dominico", "Aldaz", "2027", "815", "Anti-AI Website Demo", 1, "", "https://i2.today/nico-aldaz/", "DPD", false),
    new Scholar("Stephania", "Aleman", "2028", "803", "Ending Waste with 3D Printing", 1, "", "", "IO", false),
    new Scholar("Blake", "Almon", "2026", "804", "LAUKD", 1, "", "https://i2.today/blake-almon/", "DPD", false),
    new Scholar("George", "Arriola", "2027", "815", "Modern Monetary Theory", 1, "", "", "IO", false),
    new Scholar("Vivi", "Austin", "2028", "801", "Sol Diseño", 2, "", "", "IO", false),
    new Scholar("Jude", "Bandak", "2028", "803", "A New Streetlight", 2, "", "", "IO", false),
    new Scholar("Michael", "Bandak", "2026", "804", "Discover the City", 3, "", "https://i2.today/michael-bandak/", "IO", false),
    new Scholar("August", "Bastian", "2028", "806", "Small Scale Hydropower", 2, "", "", "PPD", false),
    new Scholar("Kieran", "Batchelli-Hennessey", "2027", "814", "OpenLang", 2, "", "https://i2.today/kieran-batchelli-hennessey/", "DPD", false),
    new Scholar("Jack", "Biggar", "2026", "806", "Wave Generator", 1, "", "https://i2.today/jack-biggar/", "PPD", true),
    new Scholar("Nikhil", "Bulchandani", "2026", "804", "Discover the City", 3, "", "https://i2.today/nikhil-bulchandani/", "IO", false),
    new Scholar("Jamila", "Bullock", "2028", "802", "Bio-Bags", 2, "", "", "PPD", false),
    new Scholar("Ava", "Caballeros", "2026", "809", "Fetch and Fire — tennis ball robot", 1, "", "https://i2.today/ava-caballeros/", "PPD", true),
    new Scholar("Liam", "Calahan", "2028", "806", "Small Scale Hydropower", 2, "", "", "PPD", false),
    new Scholar("Liam", "Cannon", "2027", "808", "net-tech", 3, "", "https://i2.today/liam-cannon/", "DPD", false),
    new Scholar("Lucas", "Carian", "2028", "803", "Repurposing Batteries", 2, "", "", "PPD", false),
    new Scholar("Ella Mei", "Celecia", "2026", "812", "Kismet", 3, "", "https://i2.today/ella-mei-celecia-2/", "IO", false),
    new Scholar("Jacob", "Chew", "2028", "803", "Repurposing Batteries", 2, "", "", "PPD", false),
    new Scholar("Christina", "Chew", "2027", "808", "Extracurricular 101", 1, "", "https://i2.today/christina-chew/", "DPD", false),
    new Scholar("Zach", "Chew", "2026", "814", "Brain Bridge", 1, "", "https://i2.today/zachary-chew/", "DPD", false),
    new Scholar("Caylee", "Chin", "2028", "Outside 803", "FISH (Filter Infused Straw Hydrator)", 3, "", "", "PPD", false),
    new Scholar("Kyle", "Ching", "2028", "801", "Urban Heat Islands", 1, "", "", "DPD", false),
    new Scholar("Luke", "Chommanard", "2026", "808", "SHC Green Team", 4, "", "https://i2.today/luke-chommanard/", "IO", false),
    new Scholar("Annabel", "Chung", "2028", "811", "DIY Food Waste Decomposer", 1, "", "", "PPD", false),
    new Scholar("Lola", "Clarke", "2028", "806", "Trees for Better Air Quality", 1, "", "", "DPD", false),
    new Scholar("Nico", "Conte", "2028", "805", "RainSmart", 3, "", "", "PPD", false),
    new Scholar("Serkie", "Dadres-Oman", "2026", "Outside 808", "Low Cost Wi-Fi Hotspot Prototype", 1, "", "", "IO", false),
    new Scholar("Doug", "Darling", "2026", "807", "My Solar Data", 3, "", "https://i2.today/douglas-darling/", "PPD", false),
    new Scholar("Kirk", "Darling", "2026", "807", "My Solar Data", 3, "", "https://i2.today/kirk-darling/", "PPD", false),
    new Scholar("Fionn", "De Barra", "2027", "808", "net-tech", 3, "", "https://i2.today/fionn-de-barra/", "DPD", false),
    new Scholar("Linhchi", "Doan", "2027", "810", "Study Buddy", 3, "", "https://i2.today/linh-chi-doan/", "IO", false),
    new Scholar("Charlotte", "Edwards", "2027", "Outside 809", "From Procrastination to Progress: A homework app", 1, "", "", "DPD", false),
    new Scholar("Haley", "Fiske", "2026", "802", "PowerEd", 3, "", "", "DPD", false),
    new Scholar("Jack", "Freeman", "2027", "814", "AP Music Theory AI Assistant", 1, "", "https://i2.today/jack-freeman/", "DPD", false),
    new Scholar("Lucas", "Fung", "2026", "808", "SHC Green Team", 4, "", "https://i2.today/lucas-fung/", "IO", false),
    new Scholar("Darren", "Fung", "2028", "807", "AquaScan", 1, "", "", "PPD", false),
    new Scholar("Liam", "Gardiner", "2026", "811", "Deficiency AI", 1, "", "https://i2.today/liam-gardiner/", "DPD", false),
    new Scholar("Violet", "Gluck", "2026", "802", "PowerEd", 3, "", "", "DPD", false),
    new Scholar("Amelia", "Gong", "2026", "813", "Effectivity and Morality of Bombing Cities in Wartime", 1, "", "https://i2.today/amelia-gong/", "IO", false),
    new Scholar("Matteo", "Gupta", "2026", "812", "Kismet", 3, "", "https://i2.today/matteo-gupta/", "IO", false),
    new Scholar("Bonnie", "Hatch", "2028", "805", "RainSmart", 3, "", "", "PPD", false),
    new Scholar("Isabel", "Guzman", "2026", "Outside 810", "WearAware", 1, "", "https://i2.today/isabella-guzman/", "PPD", false),
    new Scholar("Tim", "Healey", "2026", "813", "Schema", 1, "", "https://i2.today/timothy-healey/", "DPD", false),
    new Scholar("Willem", "Henstock", "2026", "815", "APGeoBot", 1, "", "https://i2.today/willem-henstock-2/", "DPD", false),
    new Scholar("Michael", "Hernandez", "2028", "801", "A Greener Future", 1, "", "", "IO", false),
    new Scholar("Brianna", "Hollub", "2028", "802", "Green Purchases", 1, "", "", "DPD", false),
    new Scholar("Killian Lin", "Hourihan", "2026", "806", "Cray: Physically Based Raytracing", 1, "", "https://i2.today/killian-hourihan/", "DPD", false),
    new Scholar("Elisha", "Huang", "2027", "801", "EcoSort", 1, "", "https://i2.today/elisha-huang/", "IO", false),
    new Scholar("Piper", "Johnson", "2027", "806", "WaterWise", 1, "", "https://i2.today/piper-johnson/", "IO", false),
    new Scholar("Brad", "Kaiser", "2028", "805", "A More Resourceful Tire", 2, "", "", "PPD", false),
    new Scholar("Jaime", "Kamber", "2026", "808", "SF Reimagined", 1, "", "", "DPD", false),
    new Scholar("Finn", "Kavanaugh", "2028", "803", "Endangered Species Across Time", 1, "", "", "DPD", false),
    new Scholar("Sydney", "Kerpelman", "2028", "803", "Cantelligence", 2, "", "", "DPD", false),
    new Scholar("Kaia", "Land", "2026", "Outside 810", "Stuttering: A Deep Dive into Speech Issues", 1, "", "https://i2.today/kaia-land/", "IO", false),
    new Scholar("Nico", "Laser", "2028", "805", "A More Resourceful Tire", 2, "", "", "PPD", false),
    new Scholar("Audrey", "Law", "2026", "703", "What We Waste Film", 1, "", "", "DPD", false),
    new Scholar("Julian", "Lechadores", "2028", "803", "A New Streetlight", 2, "", "", "IO", false),
    new Scholar("Morgan", "Lee", "2026", "809", "Crystal Clear OPS", 1, "https://i2.today/morgan-lee/crystal-clear-ops/", "https://i2.today/morgan-lee/", "PPD", false),
    new Scholar("Deron J.", "Lew", "2026", "812", "ASMental — “Take a moment to pause and reflect”", 1, "", "https://i2.today/deron-lew/", "DPD", false),
    new Scholar("Kailey", "Lin", "2026", "810", "Multi-Fluorescent Silk as an Indicator of Surgical Recovery", 1, "", "https://i2.today/kailey-lin/", "PPD", false),
    new Scholar("Jocelyn", "Lin", "2027", "810", "Study Buddy", 3, "", "", "IO", false),
    new Scholar("Ava", "Lindner", "2028", "809", "Operation Tide-y Up Garbarge", 2, "", "", "PPD", false),
    new Scholar("Kara", "Liu", "2028", "Outside 803", "FISH (Filter Infused Straw Hydrator)", 3, "", "", "PPD", false),
    new Scholar("Dennis", "Liu", "2028", "806", "Future Factory", 1, "", "", "IO", false),
    new Scholar("Cody", "Luu", "2026", "807", "Silent Sailing", 1, "", "https://i2.today/cody-luu/", "PPD", false),
    new Scholar("Tommy", "Maguire", "2028", "805", "RainSmart", 3, "", "", "PPD", false),
    new Scholar("Roman", "Maimone", "2026", "814", "Language Craft", 1, "", "https://i2.today/roman-maimone/", "DPD", false),
    new Scholar("Evan", "Major", "2027", "814", "OpenLang", 2, "", "https://i2.today/evan-major/", "DPD", false),
    new Scholar("Philip", "Marinov", "2027", "804", "Adeptic", 2, "", "https://i2.today/philip-marinov/", "PPD", false),
    new Scholar("Rye", "McMahon", "2027", "815", "Elderbot", 1, "", "", "DPD", false),
    new Scholar("Parker", "Mead", "2028", "809", "Operation Tide-y Up Garbarge", 2, "", "", "PPD", false),
    new Scholar("Tessa", "Miller-Wrong", "2028", "810", "Anatomy Curriculum Model", 1, "", "", "PPD", false),
    new Scholar("Yan", "Milman", "2026", "807", "My Solar Data", 3, "", "https://i2.today/yan-milman/", "PPD", false),
    new Scholar("Liya", "Milman", "2028", "Outside 803", "FISH (Filter Infused Straw Hydrator)", 3, "", "", "PPD", false),
    new Scholar("Gianna", "Minella", "2026", "811", "Compost Crawlers", 1, "", "https://i2.today/gianna-minella/", "PPD", false),
    new Scholar("Graham", "Moore", "2027", "808", "net-tech", 3, "", "https://i2.today/graham-moore/", "DPD", false),
    new Scholar("Simone", "Myers", "2027", "813", "ChatGPT as a Mental Guidance Tool", 2, "", "", "DPD", false),
    new Scholar("Hudson", "Newhouse", "2027", "811", "Meal Makers", 1, "", "https://i2.today/hudson-newhouse/", "DPD", false),
    new Scholar("Matthew", "Nguyen", "2026", "802", "Young Leaders in Climate Action", 1, "", "https://i2.today/matthew-nguyen/", "IO", false),
    new Scholar("Margaret", "Orr", "2027", "804", "AI Temperature Model", 1, "", "https://i2.today/maggie-orr/", "DPD", false),
    new Scholar("Shantanu", "Pai", "2027", "815", "Finn-Ancify", 1, "", "https://i2.today/shanti-pai/", "DPD", false),
    new Scholar("Veronica", "Panina", "2026", "808", "SHC Green Team", 4, "", "https://i2.today/veronica-panina/", "IO", false),
    new Scholar("Melania", "Paslay", "2027", "813", "ChatGPT as a Mental Guidance Tool", 2, "", "", "DPD", false),
    new Scholar("Ava", "Perez", "2027", "813", "BalancEd", 1, "", "https://i2.today/ava-perez/", "IO", false),
    new Scholar("Zelaya", "Perez", "2026", "802", "Facts on Electric Vehicles", 1, "", "https://i2.today/zelaya-perez/", "IO", false),
    new Scholar("Luka", "Petkovic", "2028", "804", "rAIn", 2, "", "", "DPD", false),
    new Scholar("Simran", "Phojanakong", "2026", "808", "SHC Green Team", 4, "", "https://i2.today/simran-phojanakong/", "IO", false),
    new Scholar("Bram", "Salverda", "2027", "815", "AI Fire Prevention", 1, "", "https://i2.today/bram-salverda-3/", "IO", false),
    new Scholar("Anna", "Schou", "2028", "801", "Eco Nets", 1, "", "", "IO", false),
    new Scholar("Slava", "Shabelsky", "2026", "805", "Eyes for the Blind", 1, "", "https://i2.today/slava-shabelsky/", "PPD", true),
    new Scholar("Aanya", "Shah", "2026", "808", "Women in Sports", 1, "", "https://i2.today/aanya-shah/", "IO", false),
    new Scholar("Dashiell", "Snape", "2028", "803", "Cantelligence", 2, "", "", "DPD", false),
    new Scholar("Seth", "Suarez", "2026", "809", "F.L.O.A.T. — Floating Layered Oceanic Advanced Treatment", 1, "", "https://i2.today/seth-suarez/", "PPD", false),
    new Scholar("Dagny", "Suro", "2027", "805", "Finding a Path", 1, "", "https://i2.today/dagny-suro/", "IO", true),
    new Scholar("Max", "Tamburro", "2028", "804", "rAIn", 2, "", "", "DPD", false),
    new Scholar("Cruz", "Tengco", "2026", "812", "Education Enrichment Opportunities", 1, "", "", "IO", false),
    new Scholar("Leo", "Thomson", "2027", "807", "Project Perfect Swing", 1, "", "https://i2.today/leo-thomson/", "PPD", false),
    new Scholar("Emma", "Tom", "2028", "802", "Bio-Bags", 2, "", "", "PPD", false),
    new Scholar("Deeran", "Vermeij", "2026", "804", "Discover the City", 3, "", "https://i2.today/deeran-vermeij/", "IO", false),
    new Scholar("Oliver", "Waldin", "2027", "812", "Ways To Go", 1, "", "https://i2.today/oliver-waldin/", "DPD", false),
    new Scholar("Ashley", "Wang", "2027", "808", "Seamus Asks", 1, "", "https://i2.today/ashley-wang/", "DPD", false),
    new Scholar("Matthew", "Wells", "2027", "811", "Ingredient Intel AI", 1, "", "https://i2.today/matthew-wells/", "DPD", false),
    new Scholar("Silver", "Wiesler", "2026", "812", "Kismet", 3, "", "https://i2.today/silver-wiesler/", "IO", false),
    new Scholar("Silver", "Wiesler", "2026", "812", "FIRE (Framework for Intervention, Recover and Empowerment)", 1, "", "https://i2.today/silver-wiesler/", "IO", false),
    new Scholar("Katie", "Worster", "2026", "802", "PowerEd", 3, "", "https://i2.today/katie-worster/", "DPD", false),
    new Scholar("Hayden", "Xie", "2027", "804", "Adeptic", 2, "", "https://i2.today/hayden-xie/", "PPD", false),
    new Scholar("Tesia", "Xu", "2027", "810", "Study Buddy", 3, "", "", "IO", false),
    new Scholar("Jaden", "Yoon", "2026", "810", "Shoota AI", 1, "https://i2.today/jaden-yoon/shoota-ai/", "https://i2.today/jaden-yoon/", "DPD", false),
    new Scholar("Rachel", "Zhao", "2028", "801", "Sol Diseño", 2, "", "", "IO", false)
];