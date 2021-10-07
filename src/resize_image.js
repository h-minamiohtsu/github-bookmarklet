const comments = document.getElementsByName("comment[body]");

comments.forEach(
    function(comment) {
        const githubImgRegexp = /!\[image\]\(([^)]+)\)/g;
        const replacedComment = comment.value.replace(githubImgRegexp, '<img src="$1" width="300px">');
        comment.value = replacedComment;
    }
);
