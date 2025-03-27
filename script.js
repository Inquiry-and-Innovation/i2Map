/*
Ideas for Improvement:
    ✔ Make classrooms in search_by_name links, when clicked they select that classroom on the search_by_class
        ✔ Figure out the onclick event
    Add the circles that the key has
        Figure out how to get height at refid#1 (Did they somehow already center themselves?)
        ✔ When clicked, goes to section's presentation format key
    Hide presentation format icon when no results
        Fix the ticker
    ✔ Change the "Select a name" dropdown/select under "Search For a Scholar By Name" to a search bar
        ✔ Have class_of_select and search_box (ids) update based on URI encoding
    ✔ Move i2_scholars array to separate file; import somehow if possible
    ✔ Make the award icon add ONLY if the student won an award, need to update Scholar class; refid#2
    Consider changing legend to individual id for each specific legend (symbol and meaning), change on focus formatting to underline or similar
    Fix the filters, sort into categories with past award winner on it's own and selecting one or more presentation_formats
*/

// HTML DOM references
const class_of_select = document.getElementById("class_of_select");
const search_box = document.getElementById("search_box");
const award_filter = document.getElementById("past_award_winner_filter");
const presentation_format_subfilter_div = document.getElementById("presentation_subfilter_div");
const presentation_format_subfilter_button = document.getElementById("open_presentation_subfilter");
const physical_demonstration_filter = document.getElementById("physical_demonstration_filter");
const digital_demonstration_filter = document.getElementById("digital_demonstration_filter");
const infographics_only_filter = document.getElementById("infographics_only_filter");

const classroom_select = document.getElementById("classroom_select");
const classroom_map = document.getElementById("search_by_room_map");

const search_by_name_div = document.getElementById("search_by_name_div");
const search_by_name_desktop_hr = document.getElementById("search_by_name_desktop_hr");
const search_by_name_results = document.getElementById("search_by_name_bottom_div");
const search_by_name_results_table = document.getElementById("search_by_name_results_table");

const search_by_room_desktop_hr = document.getElementById("search_by_room_desktop_hr");
const search_by_room_results = document.getElementById("search_by_room_bottom_div");
const search_by_room_results_table = document.getElementById("search_by_room_results_table");

const desktop_legend = document.getElementById("desktop_legend");
const mobile_legend = document.getElementById("mobile_legend");

// Other Variables

const all_classrooms = ["801", "802", "803", "804", "805", "806", "807", "808", "809", "810", "811", "812", "813", "814", "815"];

var grad_classes_at_showcase = [];
var search_by_name_no_results = false;
var search_by_room_no_results = false;

const legend_def_nums = {"IO": "1", "PPD": "2", "DPD": "3"};
const filters = {"past_award": award_filter, "physical_demonstration": physical_demonstration_filter, "digital_demonstration": digital_demonstration_filter, "infographics_only": infographics_only_filter};
const subfilters = {"presentation_format": [presentation_format_subfilter_div, presentation_format_subfilter_button]};
var active_filters = [];

// Called by updateNameScholarList() and updateRoomScholarList()
function makeScholarResultsListRow(scholar, destination_table_body, table_name, last_scholar_project_name, project_number){
    if(arguments.length == 3) last_scholar_project_name = "N/A";

    // Make the row element
    let new_row = document.createElement("tr");

    // Make the name and class table data
    let name_and_class = document.createElement("td");

    // Define the boolean variable of whether the scholar has a profile_link defined
    let has_student_profile_link = scholar.student_profile_link !== "";
    
    // Make the student profile link
    var profile_link = document.createElement("a");
    profile_link.appendChild(document.createTextNode(scholar.name_and_class_of));
    // if(!window.matchMedia("(min-width: 1050px)").matches) profile_link.style.fontSize = "1em";
    // If the scholar has a profile_link defined, add an href to the link, linking to the scholar's student profile on https://i2.today
    if(has_student_profile_link){
        profile_link.href = scholar.student_profile_link;
        // Add a title to the link, advising the user to where the link directs
        profile_link.title = "View scholar profile";
    }else{
        // If the scholar DOES NOT have a profile_link defined, add an onclick event to the link, linking to an alert
        profile_link.setAttribute("onclick", "noProfileLink('scholar')");
        // Add the error-link class to the project_link
        profile_link.classList.add("error-link");
    }

    // Add the scholar's scholar profile link or the error-link to the table data
    name_and_class.appendChild(profile_link);
    // If the scholar has won an award in the past, add an award icon to the table data refid#2
    if(scholar.past_award_winner){
        // Add a space to the table data
        name_and_class.appendChild(document.createTextNode(" "));
        // Add the award icon to a HTML span element
        let award_icon = document.createElement("a");
        award_icon.appendChild(document.createTextNode("\u{1F396}"));
        // Add a title to the award_icon
        award_icon.title = "Past award winner";
        // Add the "award-icon" class to the award_icon's classList
        award_icon.classList.add("award-icon");
        // Add an href to the link, linking to the associated legend
        if(window.matchMedia("(min-width: 1050px)").matches || table_name == "search_by_room"){
            award_icon.href = "#desktop_legend_def4"
        }else if(table_name == "search_by_name"){
            award_icon.href = "#mobile_legend_def4"
        }
        // Add the award icon to the table data if the student won an award
        name_and_class.appendChild(award_icon);
    }
    // Add it to the row
    new_row.appendChild(name_and_class);

    // Make the classroom table data
    let classroom = document.createElement("td");
    if(table_name == "search_by_name"){
        // Make the classroom link (a)
        let classroom_link = document.createElement("a");
        classroom_link.appendChild(document.createTextNode(scholar.classroom));
        // Add an on-click event to the link
        classroom_link.setAttribute("onclick", "updateClassroomSelect('" + scholar.classroom + "')");
        // If the user is using a mobile device, add an href to the link, linking to the "Search For A Scholar By Classroom" results div
        if(!window.matchMedia("(min-width: 1050px)").matches) classroom_link.href = "#search_by_room_div";
        // Add a class to the link
        classroom_link.classList.add("classroom-link");
        // Add a title to the link, advising the user to where the link directs
        classroom_link.title = "View other scholars in classroom";
        // Add the link to the table data
        classroom.appendChild(classroom_link);
    }else{
        // Add the classroom to the table data
        classroom.appendChild(document.createTextNode(scholar.classroom));
    }
    // Add it to the row
    new_row.appendChild(classroom);

    // Make the project details table data
    let details = document.createElement("td");

    if(last_scholar_project_name != scholar.project_name || last_scholar_project_name == "N/A"){
        // Make the project details table data, starting with the link (a)

        // Define the boolean variable of whether the scholar has a profile_link defined
        var has_project_profile_link = scholar.project_profile_link !== "";

        // Make the scholar project profile link
        var project_link = document.createElement("a");
        project_link.appendChild(document.createTextNode(scholar.project_name));
        // if(!window.matchMedia("(min-width: 1050px)").matches) project_link.style.fontSize = "1em";
        // If the scholar has a profile_link defined, add an href to the link, linking to the scholar's project profile on https://i2.today
        if(has_project_profile_link){
            project_link.href = scholar.project_profile_link;
            // Add a title to the link, advising the user to where the link directs
            project_link.title = "View project profile";
        }else{
            // If the scholar DOES NOT have a profile_link defined, add an onclick event to the link, linking to an alert
            project_link.setAttribute("onclick", "noProfileLink('project')");
            // Add the error-link class to the project_link
            project_link.classList.add("error-link");
        }

        // Add the scholar's project profile link or the error-link to the table data
        details.appendChild(project_link);

        // Add the presentation_format_icon

        // Define the boolean variable of whether the scholar has a presentation defined
        var has_presentation_format = scholar.presentation_format !== "";
        
        // If the scholar has a profile_link defined, make the link element (a)
        if(has_presentation_format){
            // Make the presentation_format_icon div
            let presentation_format_icon = document.createElement("a");
            // Add the "icon" class to the presentation_format_icon's classList
            presentation_format_icon.classList.add("icon");
            // Define the string variable of the second HTML_class to add
            let HTML_class = "";
            // Define the string variable of the title to add
            let title = "";
            // Set the HTML_class and title variables according to the scholar's define presentation_format
            if(scholar.presentation_format == "IO"){
                HTML_class = "infographics-only";
                title = "Infographics Only";
            }else if(scholar.presentation_format == "PPD"){
                HTML_class = "physical-prototype-demonstration";
                title = "Physical Prototype Demonstration";
            }else if(scholar.presentation_format == "DPD"){
                HTML_class = "digital-prototype-demonstration";
                title = "Digital Prototype Demonstration";
            }
            // Add the newly-set HTML_class to the presetation_format_icon's classList
            presentation_format_icon.classList.add(HTML_class);
            // Add a title to the icon, advising the user of its meaning
            presentation_format_icon.title = title;
            // Add an href to the link, linking to the associated legend
            let presentation_format_icon_href_prefix
            if(window.matchMedia("(min-width: 1050px)").matches || table_name == "search_by_room"){
                presentation_format_icon_href_prefix = "#desktop_legend_def"
            }else if(table_name == "search_by_name"){
                presentation_format_icon_href_prefix = "#mobile_legend_def"
            }
            // Set the href of the link
            presentation_format_icon.href = presentation_format_icon_href_prefix + legend_def_nums[scholar.presentation_format];
            // Add the icon to the table data
            details.appendChild(presentation_format_icon);
        }

        // If the i2 project involves a group (more than 1 "group_members") and the function is being ran to update the search_by_room_results_table, then change the row span of the table data element
        if(scholar.group_members > 1 && last_scholar_project_name !== "N/A") details.rowSpan = scholar.group_members;

        // If the table data is every other (even), then change the background color
        if(project_number % 2 == 0 && last_scholar_project_name !== "N/A") details.style.backgroundColor = "rgba(107, 165, 57, 0.2)";
    }

    // Add the details table data to the row
    new_row.appendChild(details);

    // Add the new row to the tbody of the results table
    destination_table_body.appendChild(new_row);

    /*    refid#1
    // If the scholar has a presentation format defined, add the margins necessary to center the icon within the table data
    if(has_presentation_format){
        let presentation_format_icon = document.querySelectorAll("table a")[document.querySelectorAll("table a").length-1];
        // Define the integer variable of the margins necessary to vertically center the icon in the table data
        let details_td = presentation_format_icon.parentElement;
        console.log(details_td);
        console.log(document.querySelector("td").height);
        console.log(details_td.style.height.substring(0,details_td.style.height.length-2));
        let presentation_format_icon_margins = "calc(" + details.style.height + " - " + (window.matchMedia("(min-width: 1050px)").matches ? "1em" : (has_project_profile_link ? "0.75em" : "1em")) + ")";
        // Change the margins of the icon so it is vertically centered in the table data
        presentation_format_icon.style.marginTop = presentation_format_icon_margins;
        presentation_format_icon.style.marginBottom = presentation_format_icon_margins;
        console.log(presentation_format_icon_margins);
    }*/
}

function search(scholar){
    var search_query = search_box.value.toLowerCase();
    var search_keywords = search_query.split(" ");
    var search_locations = [scholar.last_name, scholar.first_name, scholar.project_name];

    var search_success = false;

    search_keywords.forEach(keyword => {
        if(search_keywords !== ""){
            search_locations.forEach(location => {if(location.toLowerCase().includes(keyword)) search_success = true});
        }
    });
    return search_success;
}

// NEEDS TO BE FIXED FOR SUBFILTERS
function meetsFilters(scholar){
    var filter;
    const filter_definitions = {"past_award": scholar.past_award_winner, "physical_demonstration": scholar.presentation_format == "PPD", "digital_demonstration": scholar.presentation_format == "DPD", "infographics_only": scholar.presentation_format == "IO"};
    if (active_filters.length == 0){return true;}
    if (active_filters.includes("past_award") && !(scholar.past_award_winner)) return false;
    for (i=0; i<active_filters.length; i++){
        filter = active_filters[i];
        if(filter_definitions[filter]){return true;}
    }
    return false;
}

// Called by updateNameSelect() and newNameSelected()
function updateNameScholarList(){
    // Disable the class_of and name selectors
    class_of_select.disabled = "true";
    // name_select.disabled = "true";

    // Define the body of the results table and the no results notice
    var results_table_body = search_by_name_results_table.querySelector("tbody");
    var no_results_notice = document.getElementById("search_by_name_no_results");

    // Clear the table body of any current rows
    results_table_body.querySelectorAll("tr").forEach((row) => row.remove());
    // Hide the "No Results Found" notice
    no_results_notice.style.display = "none";
    // Show the results table
    search_by_name_results_table.style.display = "table";

    // Define the currently selected class_of and the combined name_and_class_of
    var selected_class_of = class_of_select.options[class_of_select.selectedIndex].text;
    // var selected_name_and_class_of = name_select.options[name_select.selectedIndex].text;
    
    // Define booleans if any name is selected and if "Any Graduation Class at This Showcase" is selected
    // var name_selected = !(selected_name_and_class_of == "Select a name" || selected_name_and_class_of == "Show all scholars");
    var search_entered = search_box.value !== "";
    var grad_class_this_showcase = selected_class_of == "Any Graduation Class at This Showcase";

    // Loop over each scholar in the list
    i2_scholars.forEach((scholar) => {
        let at_showcase = grad_classes_at_showcase.includes(scholar.class_of);
        let in_selected_class = scholar.class_of == selected_class_of;
        // For each scholar, follow the flow chart below to determine a boolean
            // Name selected? => Selected name == Name of scholar (iteration)
            // Else: "Any Graduation Class at This Showcase" is selected? => Scholar (iteration) is at showcase?
            // Else: Class of scholar (iteration) == Selected class of
        // If true is returned, then make the HTML DOM table row with the scholar's details
        /*name_selected ? scholar.name_and_class_of == selected_name_and_class_of : */

        var add_row = false;
        if(!search_entered){
            add_row = grad_class_this_showcase ? at_showcase : in_selected_class;
        }else if(grad_class_this_showcase){
            add_row = search(scholar);
        }else{
            add_row = search(scholar) && in_selected_class;
        }

        // grad_class_this_showcase ? at_showcase : (search_entered ? ((scholar.class_of == selected_class_of) && search(scholar)) : scholar.class_of == selected_class_of)
        if(add_row && meetsFilters(scholar)){
            makeScholarResultsListRow(scholar, results_table_body, "search_by_name");
        }
    });

    // If no new rows were added, show the "No Scholars Found" header, hide the results table, and update the search_by_name_no_results ticker
    if(results_table_body.querySelectorAll("tr").length == 0){
        no_results_notice.style.display = "block";
        search_by_name_results_table.style.display = "none";
        search_by_name_no_results = true;
    }

    // Show the results div and the spacer
    search_by_name_results.style.display = "block";
    if(window.matchMedia("(min-width: 1050px)").matches) {search_by_name_desktop_hr.style.display = "block";}

    // Reenable the class_of and name selectors
    class_of_select.removeAttribute("disabled");
    // name_select.removeAttribute("disabled");
}

// Called by newClassofSelect() and window.onload(), when the classOfSelect drowpdown is filled with options
/* function updateNameSelect(update_results){
    if(arguments.length == 0) update_results = true;

    // Clear the name_select dropdown
    let name_options = document.querySelectorAll("#name_select option");
    name_options.forEach((name_option) => name_option.remove());

    // Add back the placeholder
    let name_placeholder = document.createElement("option");
    let name_placeholder_text = document.createTextNode("Select a name");
    name_placeholder.appendChild(name_placeholder_text);
    name_select.appendChild(name_placeholder);
    
    let selected_class_of = class_of_select.options[class_of_select.selectedIndex].text;
    var grad_class_this_showcase = selected_class_of == "Any Graduation Class at This Showcase";

    i2_scholars.forEach((scholar) => {
        let at_showcase = grad_classes_at_showcase.includes(scholar.class_of);
        if(grad_class_this_showcase ? at_showcase : (scholar.class_of == selected_class_of)){
            // Add the new names based on the selected class of
            let name_option = document.createElement("option");
            let name_option_text = document.createTextNode(scholar.name_and_class_of);
            name_option.appendChild(name_option_text);
            name_select.appendChild(name_option);
        }
    });
    if(update_results) updateNameScholarList();
} */

function newClassOfSelected(){
    var selected_class_of = class_of_select.options[class_of_select.selectedIndex].text;
    var class_of_label = document.getElementById("search_by_name_form").querySelector("label");

    var measure_select = document.getElementById("measure");
    Array.from(measure_select.options).forEach((option) => {
        option.remove();
    });
    let measure_option = document.createElement("option");
    let measure_option_text = document.createTextNode(selected_class_of);
    measure_option.appendChild(measure_option_text);
    measure_select.appendChild(measure_option);
    class_of_select.style.width = measure_select.clientWidth.toString() + "px";

    if(selected_class_of == "Any Graduation Class at This Showcase"){
        class_of_label.style.display = "none";
        // class_of_select.style.width = window.matchMedia("(min-width: 1050px)").matches ? "284.44px" : "217.6px";
    }else{
        class_of_label.style.display = "inline";
        // class_of_select.style.width = window.matchMedia("(min-width: 1050px)").matches ? "52.8px" : "45.6px";
    }
    // updateNameSelect();
    // Temporary placeholder instead:
    updateNameScholarList();
}

/*function newNameSelected(){
    var selected_name = name_select.options[name_select.selectedIndex].text;
    if(selected_name !== "Select a name" && name_select.options[0].text == "Select a name"){
        name_select.querySelector("option").innerHTML = "Show all scholars";
    }
    updateNameScholarList();
}*/

function updateFilters(filter_name){
    changed_filter = filters[filter_name];
    if(changed_filter.dataset.selected == "true"){
        changed_filter.dataset.selected = "false";
        active_filters.splice(active_filters.indexOf(filter_name));
    }else if(changed_filter.dataset.selected = "false"){
        changed_filter.dataset.selected = "true";
        active_filters.push(filter_name);
    }
    updateNameScholarList();
}

function updateSubfilters(subfilter_name){
    changed_subfilter = subfilters[subfilter_name];
    if(changed_subfilter[0].dataset.selected == "true"){
        changed_subfilter[0].dataset.selected = "false";
        changed_subfilter[1].dataset.selected = "false";
        //active_filters.splice(active_filters.indexOf(filter_name));
    }else if(changed_subfilter[0].dataset.selected = "false"){
        changed_subfilter[0].dataset.selected = "true";
        changed_subfilter[1].dataset.selected = "false";
        //active_filters.push(filter_name);
    }
    //updateNameScholarList();
}

function updateSearchByRoomMap(selected_classroom){
    Array.from(classroom_map.children).forEach((classroom) => {
        if(classroom.nodeName == "BUTTON" && !classroom.disabled){
            classroom.style.backgroundColor = "#f0f0f0";
            classroom.style.color = "black";
            classroom.dataset.selected = "false";
            if(classroom.innerHTML == selected_classroom){
                classroom.style.backgroundColor = "#00573D";
                classroom.style.color = "white";
                classroom.dataset.selected = "true";
            };
        }
    });
}

function updateRoomScholarList(){
    // Disable the classroom selector
    classroom_select.disabled = "true";

    // Make a new i2_scholars list that is a sorted version of the first based on project name
    var new_i2_scholars = i2_scholars.toSorted(function(a, b) {
        if (a.project_name < b.project_name) {
            return -1;
        }
        if (a.project_name > b.project_name) {
            return 1;
        }
          return 0;
    });

    var results_table_body = search_by_room_results_table.querySelector("tbody");
    var no_results_notice = document.getElementById("search_by_room_no_results");

    // Clear the table body of any current rows
    results_table_body.querySelectorAll("tr").forEach((row) => row.remove());
    // Hide the "No Results Found" notice
    no_results_notice.style.display = "none";
    // Show the results table
    search_by_room_results_table.style.display = "table";

    var selected_classroom = classroom_select.options[classroom_select.selectedIndex].value || classroom_select.options[classroom_select.selectedIndex].text;

    var last_scholar_project_name = "";
    var project_number = 0;
    new_i2_scholars.forEach((scholar) => {
        let at_showcase = grad_classes_at_showcase.includes(scholar.class_of);
        if(at_showcase && scholar.classroom == selected_classroom){
            if(scholar.project_name !== last_scholar_project_name) project_number++;
            makeScholarResultsListRow(scholar, results_table_body, "search_by_room", last_scholar_project_name, project_number);
            last_scholar_project_name = scholar.project_name;
        }
    });

    // If no new rows were added, show the "No Scholars Found" header, hide the results table, and update the search_by_room_no_results ticker
    if(results_table_body.querySelectorAll("tr").length == 0){
        no_results_notice.style.display = "block";
        search_by_room_results_table.style.display = "none";
        search_by_room_no_results = true;
    }

    // Show the results div and the spacer
    search_by_room_results.style.display = "block";
    if(window.matchMedia("(min-width: 1050px)").matches) {search_by_room_desktop_hr.style.display = "block";}

    updateSearchByRoomMap(selected_classroom);

    // Reenable the classroom selector
    classroom_select.removeAttribute("disabled");
}

function updateClassroomSelect(classroom){
    // Disable the classroom selector
    classroom_select.disabled = "true";

    classroom_select_options = Array.from(classroom_select.options);
    for(let i=0; i<classroom_select_options.length; i++){
        if(classroom_select_options[i].value == classroom) classroom_select.selectedIndex = i;
    }

    updateRoomScholarList();
    updateSearchByRoomMap(classroom);

    // Reenable the classroom selector
    classroom_select.removeAttribute("disabled");
}

function noProfileLink(type){
    alert(`This scholar has not yet created their ${type} profile page on i2.today`);
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);

    // Set the title
    document.querySelector("title").innerHTML = (urlParams.has("year") ? urlParams.get("year") : new Date().getFullYear()) + " i2 Showcase Map";
    
    // Set the header
    var welcome_headers = document.querySelectorAll("h1");
    welcome_headers.forEach((welcome_header) => welcome_header.innerHTML = `Welcome to the ${urlParams.has("year") ? urlParams.get("year") : new Date().getFullYear()} <i>i2</i> Showcase!`);

    // Set the footer
    document.getElementById("year").innerHTML = new Date().getFullYear();

    // Add the next 3 graduating years to the class_of_select dropdown
    const classOfSelect = document.getElementById("class_of_select");
    for(let i=0; i<3; i++){
        let year_of = (parseInt(urlParams.has("year") ? urlParams.get("year") : new Date().getFullYear()) + i+1).toString();
        grad_classes_at_showcase.push(year_of);

        let class_of_option = document.createElement("option");
        let class_of_option_text = document.createTextNode(year_of);
        class_of_option.appendChild(class_of_option_text);
        classOfSelect.appendChild(class_of_option);
    }

    let new_class_of_option = document.createElement("option");
    let new_class_of_option_text = document.createTextNode("Any Graduation Class at This Showcase");
    new_class_of_option.appendChild(new_class_of_option_text);
    classOfSelect.appendChild(new_class_of_option);
    
    // Update the class_of_select dropdown if there is a class_of encoded in the URL
    if(urlParams.has("class_of")){
        let class_of_select_options = Array.from(class_of_select.options);
        let class_of_select_updated = false;
        for(let i=0; i<class_of_select_options.length; i++){
            if(class_of_select_options[i].value == urlParams.get("class_of")){
                class_of_select.selectedIndex = i;
                class_of_select_updated = true;
            }
        }
        if(class_of_select_updated){
            newClassOfSelected();
        }else{
            console.error("Unable to locate URL-encoded in class_of_select");
        }
    }

    // Update the search_box's contents if there is a search query (q) encoded in the URL
    if(urlParams.has("q")) search_box.value = urlParams.get("q");

    // Disable any classroom options for classrooms not being used at this showcase (consider switching to initially only adding what is needed instead of removing)
    var classrooms_not_in_use = ["801", "802", "803", "804", "805", "806", "807", "808", "809", "810", "811", "812", "813", "814", "815"];
    i2_scholars.forEach((scholar) => {
        if(grad_classes_at_showcase.includes(scholar.class_of)){
            if(classrooms_not_in_use.includes(scholar.classroom)) classrooms_not_in_use.splice(classrooms_not_in_use.indexOf(scholar.classroom),1);
        }
    });
    Array.from(classroom_select.options).forEach((option) => {
        if(classrooms_not_in_use.includes(option.value || option.text)) option.remove();
    });
    Array.from(classroom_map.children).forEach((classroom) => {
        if(classrooms_not_in_use.includes(classroom.innerHTML)) classroom.disabled = true;
    });

    // updateNameSelect();
    // Temporary placeholder instead:
    updateNameScholarList();
    updateRoomScholarList();

    desktop_legend.style.display = search_by_name_no_results && search_by_room_no_results ? "none" : "block";
    if(!window.matchMedia("(min-width: 1050px)").matches){
        document.getElementById("mobile_legend").style.display = search_by_name_no_results && search_by_room_no_results ? "none" : "block";
    }

    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.querySelector("head link:last-of-type").href = "images/i2_header_full_white.png"
    }

    /*
    if(window.matchMedia("(min-width: 1050px)").matches) search_by_name_div.style.minHeight = "calc(100vh - 10vh - 1vh - 1vh - " + desktop_legend.offsetHeight + "px - 2.5em)";
    console.log(search_by_name_div.style.minHeight);
    */
    
    // Measure scrollbar width
    /*
    // Create the div
    var scrollDiv = document.createElement("div");
    scrollDiv.className = "scrollbar-measure";
    document.body.appendChild(scrollDiv);

    // Get the scrollbar width
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    console.warn(scrollbarWidth);

    // Change the padding of the main div based on the scrollbar width
    document.getElementById("main").style.marginRight = window.innerWidth*(0.5/100) - scrollbarWidth + "px";

    // Delete the div
    document.body.removeChild(scrollDiv);
    */
    //document.getElementById("main").style.marginRight = window.innerWidth*(0.5/100) - 15 + "px";
}

// Updates tab icon based on preferred color scheme

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";
    if(newColorScheme == "dark"){
        document.querySelector("head link:last-of-type").href = "images/i2_header_full_white.png";
    }else{
        document.querySelector("head link:last-of-type").href = "images/cropped-i2-Logo-192x192.gif";
    }
});

search_box.addEventListener("input", updateNameScholarList);