function clickLoadButton() {
    const button = document.querySelector('button[data-testid="issue-timeline-load-more-front"]');
    if (button) {
        button.click();
        setTimeout(clickLoadButton, 1500);
    }
}

clickLoadButton();
