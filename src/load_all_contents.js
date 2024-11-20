(function(){
    function loadMoreIssueComments() {
        const button = document.querySelector('button[data-testid="issue-timeline-load-more-front"]');
        if (button) {
            button.click();
            setTimeout(loadMoreIssueComments, 1500);
        }
    }
    loadMoreIssueComments();

    function loadMorePrComments() {
        const button = document.querySelector('form.ajax-pagination-form button[type="submit"]');
        if (button) {
            button.click();
            setTimeout(loadMorePrComments, 1500);
        }
    }
    loadMorePrComments();
})();
