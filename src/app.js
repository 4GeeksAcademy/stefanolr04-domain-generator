let pronouns = ["the", "our", "my", "your", "his"];
let adjectives = ["great", "big", "small", "tall", "ugly"];
let nouns = ["jogger", "racoon", "cat", "person", "alien"];
let extensions = [".es", ".com", ".net", ".org"];

for (let i = 0; i < pronouns.length; i++) {
  for (const adj of adjectives) {
    nouns.forEach(nouns => {
      for (const ext in extensions) {
        console.log(
          pronouns[i] + " " + adj + " " + nouns + " " + extensions[ext]
        );
      }
    });
  }
}
