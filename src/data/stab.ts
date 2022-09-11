import {ImageSourcePropType} from 'react-native';

interface IStaticData {
  id: number,
  image?: ImageSourcePropType,
  title?: string,
  description?: string,
}

export const DATA: IStaticData[] = [
  {
    'id': 1,
    'image': require('../assets/news_1.png'),
    'title': 'Fans express Ronaldo concern after he is pictured with controversial psychologist (PHOTO)',
    'description': 'Football fans have expressed concern for out-of-form Manchester United forward Cristiano Ronaldo after he was pictured with Jordan Peterson, the US-based psychologist who has drawn criticism for his views on transgender rights and Covid-19 vaccinations among other issues.'
  },
  {
    'id': 2,
    'image': require('../assets/news_2.jpeg'),
    'description': 'Graham Potter has asked fans of his former Premier League side Brighton for their forgiveness in an open letter published on the team\'s website after he opted to move to Chelsea to succeed former boss Thomas Tuchel after the Champions League winning coach was surprisingly sacked by the club\'s new ownership group.'
  },
  {
    'id': 3,
    'image': require('../assets/news_3.jpeg'),
    'title': 'Goalkeeper hailed for quick thinking after fan suffers cardiac arrest (VIDEO)',
  },
  {
    'id': 4,
    'image': require('../assets/news_4.jpeg'),
    'title': 'UFC boss details Chimaev weight cut woes',
    'description': 'UFC president Dana White says that medics became concerned for Khamzat Chimaev when his body began \'locking up\' during of his doomed weight cut ahead of his scheduled UFC 279 main event against Nate Diaz in Las Vegas.'
  },
  {
    'id': 5,
    'image': require('../assets/news_5.jpeg'),
    'title': 'Ukraine FA demands Bosnia cancel Russia friendly',
    'description': 'Hours after it was reported that key players from the Bosnia and Herzegovina national team opposed their country\'s scheduled November friendly match with Russia, the Ukrainian Football Association has published an open letter on its website in which it called upon football\'s governing bodies to step in to prevent the game from taking place. '
  },
  {
    'id': 6,
    'image': require('../assets/news_6.jpeg'),
    'title': 'Chelsea vow to back new boss Potter',
    'description': 'Chelsea\'s new head coach Graham Potter will be given sufficient time to implement his strategy at Stamford Bridge, and his job won\'t be under threat even if the ambitious Blues fail to qualify for the Champions League, according to reports in the UK media.'
  },
  {
    'id': 7,
    'image': require('../assets/news_7.jpeg'),
    'title': 'Pacquiao in talks to come out of retirement',
    'description': 'January 2023 could see retired all-time boxing great Manny Pacquiao return to the ring, according to the fighter himself.'
  },
  {
    'id': 8,
    'image': require('../assets/news_8.png'),
    'title': 'La Liga chief to report Premier League to UEFA for ‘unsustainable spending’',
    'description': 'La Liga president Javier Tebas is preparing a report for UEFA in which he will bemoan the spending disparity between the Premier League and various other European leagues after English teams outspent their Spanish rivals more than 20 times over during the summer transfer window.'
  },
  {
    'id': 9,
    'image': require('../assets/news_9.jpeg'),
    'title': 'Russian star denied spot in US Open final',
    'description': 'The US Open men\'s singles title will not be headed to Russia for a second consecutive year after Karen Khachanov joined current holder Daniil Medvedev in being knocked out of the American Grand Slam.'
  }
]
