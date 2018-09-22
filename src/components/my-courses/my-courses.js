import courseCard from '../course-card/course-card.vue';

export default {
  components: {
    courseCard
  },

  data() {
    return {
      courses: [{
        image: require('../../assets/courses/action.jpg'),
        title: 'Photoshop: effects',
        author: 'Tony Hammor',
        percentCompletion: 84
      }, {
        image: require('../../assets/courses/anemone.jpg'),
        title: 'Intro to Architecture',
        author: 'Elisa Mittono',
        percentCompletion: 32
      }, {
        image: require('../../assets/courses/adobe.jpg'),
        title: 'Intro to Architecture',
        author: 'Elisa Mittono',
        percentCompletion: 12
      }, {
        image: require('../../assets/courses/architectural.jpg'),
        title: 'Intro to Architecture',
        author: 'Elisa Mittono',
        percentCompletion: 92
      }]
    }
  }
}