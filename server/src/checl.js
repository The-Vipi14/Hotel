const bcrypt = require("bcryptjs")
bcrypt.hash("admin123", 10).then(console.log)
bcrypt.compare("admin123","$2b$10$27O/y7dyPBTVSDQ0aXN6COQDOvBGwHo107.9jVV3r1B.w5LlPB.Me")
.then(console.log)