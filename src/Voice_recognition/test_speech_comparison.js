
/* comparison */

/* return true if char is space */
exports.isWhiteSpace = function isWhiteSpace(char) {
    return " \t\n".includes(char);
}

/* return true if char is punctuation */
exports.isPunct = function isPunct(char) {
    return ";:.,?!-'\"(){}".includes(char);
}

/* strip punctuation and spaces from @param string */
exports.compress = function compress(string) {
    return string
      .split("")
      .filter(char => !isWhiteSpace(char) && !isPunct(char))
      .join("");
}

/* checks if result, phrase are the same */
export.compare_strings = function compare_strings(result, phrase)
{
    var result_punctuationless = compress(result).toUpperCase();
    var phrase_punctuationless = compress(phrase).toUpperCase();

      console.log("result punctuationless: " + result_punctuationless);
      console.log("phrase punctuationless: " + phrase_punctuationless);
      return (result_punctuationless === phrase_punctuationless);
}
