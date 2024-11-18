function replaceImgTag(targetElement) {
    const githubImgRegexp = /!\[Image\]\(([^)]+)\)/g;
    const replacedComment = targetElement.value.replace(githubImgRegexp, '<img src="$1" width="300px">');
    targetElement.value = replacedComment;
}

document.querySelectorAll("textarea").forEach((element) => {
    replaceImgTag(element)
});
