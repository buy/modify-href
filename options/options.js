// Saves options to chrome.storage
function save_options() {
  var oldHref = document.getElementById('old-href').value;
  var newHref = document.getElementById('new-href').value;
  chrome.storage.sync.set({
    oldHref: oldHref,
    newHref: newHref
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores options state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    oldHref: '',
    newHref: ''
  }, function(items) {
    document.getElementById('old-href').value = items.oldHref;
    document.getElementById('new-href').value = items.newHref;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
