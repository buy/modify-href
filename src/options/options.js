// Saves options to chrome.storage
function save_options(e) {
  var oldHref = document.getElementById('old-href').value;
  var newHref = document.getElementById('new-href').value;
  chrome.storage.sync.set({
    oldHref: oldHref,
    newHref: newHref
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.style.visibility = 'visible';
    setTimeout(function() {
      status.style.visibility = 'hidden';
    }, 2000);
  });
  _gaq.push(['_trackEvent', e.target.id, 'clicked']);
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
