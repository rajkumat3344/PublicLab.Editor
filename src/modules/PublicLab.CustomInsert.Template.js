var builder = '<div class="dropdown" style="margin-bottom: 20px;">';
builder += '<button class="btn btn-outline-secondary dropdown-toggle dropdownMenu1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" style="min-width: 150px;" >';
builder += '<span class= "selected">What Do you want to insert?</span>';
builder += '<span class="caret"></span>';
builder += '</button>';
builder += '<ul class="dropdown-menu menu1" role="menu" aria-labelledby="dropdownMenu1">';
builder += '<li role="button" class="p-2"><a role="menuitem" tabindex="-1" class="Notes">Notes</a></li>';
builder += '<li role="button" class="p-2"><a role="menuitem" tabindex="-1" class="Wikis">Wikis</a></li>';
builder += '<li role="button" class="p-2"><a role="menuitem" tabindex="-1" class="Nodes">Nodes(Wikis + Notes)</a></li>';
builder += '<li role="button" class="p-2"><a role="menuitem" tabindex="-1" class="Activity">Activity</a></li>';
builder += '<li role="button" class="p-2"><a role="menuitem" tabindex="-1" class="Questions">Questions</a></li>';
builder += '</ul>';
builder += '</div>';
builder += '<div class="dropdown" style="margin-bottom: 20px;">';
builder += '<button class="btn btn-outline-secondary dropdown-toggle dropdownMenu2" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" style="min-width: 150px;">';
builder += '<span class="selected2">Insert as a</span>';
builder += '<span class="caret"></span>';
builder += '</button>';
builder += '<ul class="dropdown-menu menu2" role ="menu" aria-labelledby="dropdownMenu2">';
builder += '<li role="button" class="p-2"><a role="menuitem" tabindex="-1" class="List">List</a></li>';
builder += '<li role="button" class="p-2"><a role="menuitem" tabindex="-1" class="Grid">Grid</a></li>';
builder += '</ul>';
builder += '</div>';
builder += '<div class="input-group">';
builder += '<input type="text" class="form-control inputText" placeholder="Enter a tagname" style="min-width: 150px;">';
builder += '<span class="input-group-btn">';
builder += '<button class="btn btn-outline-secondary ml-2 go1" type="button">Go!</button>';
builder += '</span>';
builder += '</div>';
module.exports = builder;
