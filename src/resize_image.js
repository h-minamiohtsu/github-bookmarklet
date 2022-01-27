function replaceImgTag(targetElement) {
    const githubImgRegexp = /!\[image\]\(([^)]+)\)/g;
    const replacedComment = targetElement.value.replace(githubImgRegexp, '<img src="$1" width="300px">');
    targetElement.value = replacedComment;
}

document.getElementsByName("comment[body]").forEach((element) => {
    replaceImgTag(element)
});

document.getElementsByName("issue_comment[body]").forEach((element) => {
    replaceImgTag(element)
});
