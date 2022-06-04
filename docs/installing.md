# Installing Prodigy X

1. Firstly you will need to copy the Prodigy X bookmarklet.
   [Click here to copy it!](javascript:(function()%7Bfunction%20copyTextToClipboard%20(text)%20%7B%0A%20%20%20%20navigator.clipboard.writeText(text)%3B%0A%7D%0A%0A(async%20()%20%3D%3E%20%7B%0A%20%20%20%20const%20text%20%3D%20await%20(await%20fetch(%22https%3A%2F%2Fraw.githubusercontent.com%2FProdigyAPI%2FProdigyX%2Fmaster%2Fbookmarklet.txt%22)).text()%0A%20%20%20%20copyTextToClipboard(text)%0A%7D)()%7D)()%3B){ .md-button .md-button--primary .small-button .long-transition }
   If the button did not work you can copy it from the following link: [https://raw.githubusercontent.com/ProdigyAPI/ProdigyX/master/bookmarklet.txt](https://raw.githubusercontent.com/ProdigyAPI/ProdigyX/master/bookmarklet.txt).
2. Secondly you will need to [create a new bookmark](creating-bookmarks.md).
3. Name the bookmark Prodigy X.
4. In the url of the bookmark paste the contents of bookmarklet.txt.
5. Save the bookmark

Now when you go on the Prodigy website you will be able to use Prodigy X. Just click on the Prodigy X bookmark.

It is recommended to make the bookmark bar visible.