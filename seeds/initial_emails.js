
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('emails').del()
    .then(function () {
      // Inserts seed entries
      return knex('emails').insert([
          {"sender": "katie@galvanize.com", "recipient": "jane@galvanize.com" , "subject": "Standup meeting", "message": "Mr. and Mrs. Dursley, of number four, Privet Drive, wereproud to say that they were perfectly normal, thankyou very much." , "date": "2020-08-23T18:25:43.511Z"},
          {"sender": "jean-marc@galvanize.com", "recipient": "jane@galvanize.com" , "subject": "Retro meeting", "message": "They were the last people you’d expect to be involved in anything strange or mysterious, because they just didn’thold with such nonsense.", "date": "2020-04-23T18:25:43.511Z"},
          {"sender": "ash@galvanize.com", "recipient": "jane@galvanize.com", "subject": "New employee next week", "message": "Mr. Dursley was the director of a fi rm called Grunnings, whichmade drills. He was a big, beefy man with hardly any neck, although he did have a very large mustache. ", "date": "2019-01-23T18:25:43.511Z"},
          {"sender": "mattias@galvanize.com", "recipient": "jane@galvanize.com", "subject": "Last week's reports", "message": " Mrs. Dursley was thin and blonde and had nearly twice the usual amount of neck, which came in very useful as she spent so much of her time craning over garden fences, spying on the neighbors.", "date": "2020-06-23T18:25:43.511Z"},
          {"sender": "tanner@galvanize.com", "recipient": "jane@galvanize.com", "subject": "Holiday schedule", "message": "The Dursleys had a small son called Dudley and in their opinion there was no finer boy anywhere.", "date": "2020-03-23T18:25:43.511Z"},
          {"sender": "brandon@galvanize.com", "recipient": "jane@galvanize.com", "subject": "Managers meeting", "message": "The Dursleys had everything they wanted, but they also had a secret, and their greatest fear was that somebody would discover it. ", "date": "2020-02-23T18:25:43.511Z"},
          {"sender": "jeff@galvanize.com", "recipient": "jane@galvanize.com", "subject": "1 on 1 meeting", "message": " ey didn’t think they could bear it if anyone found out about thePotters. ", "date": "2020-02-23T18:25:43.511Z"},
          {"sender": "maddie@galvanize.com", "recipient": "jane@galvanize.com", "subject": "Happy hour next Friday!" , "message":" Mrs. Potter was Mrs. Dursley’s sister, but they hadn’t met for several years; in fact, Mrs. Dursley pretended she didn’t have a sister" , "date": "2019-12-23T18:25:43.511Z"},
          {"sender": "becky@galvanize.com", "recipient": "jane@galvanize.com", "subject": "Vacation Request", "message": "  e Dursleys shudderedto think what the neighbors would say if the Potters arrived in the street.", "date": "2020-01-23T18:25:43.511Z"},
          {"sender": "jarret@galvanize.com", "recipient": "jane@galvanize.com", "subject": "All hands meeting", "message": " is boy was another good reason for keeping the Potters away; they didn’t want Dudley mixing with a child like that.", "date": "2019-07-23T18:25:43.511Z"},
          {"sender": "rich@galvanize.com", "recipient": "jane@galvanize.com", "subject": "Standup meeting", "message": "  e Dursleys knew that the Potters had a small son, too, butthey had never even seen him.", "date": "2020-03-23T18:25:43.511Z"},
          {"sender": "erin@galvanize.com", "recipient": "jane@galvanize.com", "subject": "New hire orientation assistance needed", "message": "When Mr. and Mrs. Dursley woke up on the dull, gray Tuesday our story starts, there was nothing about the cloudy sky outside tosuggest that strange and mysterious things would soon be happening all over the country", "date": "2020-04-23T18:25:43.511Z"},
          {"sender": "charlie@galvanize.com", "recipient": "jane@galvanize.com", "subject": "Expense reports due!", "message": " Mr. Dursley hummed as he picked out his most boring tie for work, and Mrs. Dursley gossiped away happily as she wrestled a screaming Dudley into his high chair.", "date": "2018-05-23T18:25:43.511Z"},
          {"sender": "jacob@galvanize.com", "recipient": "jane@galvanize.com", "subject": "Updated travel policy information", "message": "None of them noticed a large, tawny owl fl utter past the window", "date":  "2018-05-23T18:25:43.511Z"},
          {"sender": "louise@galvanize.com", "recipient": "jane@galvanize.com", "subject": "Cat videos", "message": "At half past eight, Mr. Dursley picked up his briefcase, pecked  Mrs. Dursley on the cheek, and tried to kiss Dudley good-bye but missed, because Dudley was now having a tantrum and throwing his cereal at the walls. ", "date": "2020-02-23T18:25:43.511Z"},
          {"sender": "ash@galavnize.com", "recipient": "jane@galvanize.com", "subject": "I need help", "message": " “Little tyke,” chortled Mr. Dursley as he left  the house. ", "date": "2019-04-23T18:25:43.511Z"},
          {"sender": "ash@galvanize.com", "recipient": "jane@galvanize.com", "subject": "Blocked on React issue", "message": "He got into his car and backed out of number four’s drive", "date": "2020-03-23T18:25:43.511Z"},
          {"sender": "katie@galvanize.com", "recipient": "jane@galvanize.com", "subject": "Happy hour this Thursday!", "message": "It was on the corner of the street that he noticed the fi rst sign of something peculiar — a cat reading a map", "date":  "2020-03-23T18:25:43.511Z"},
      ]);
    });
};
