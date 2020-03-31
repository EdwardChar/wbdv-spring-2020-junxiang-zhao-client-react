export const COURSES_API_URL = "https://wbdv-generic-server.herokuapp.com/api/mcuks/courses"
export const MODULES_API_URL = "https://wbdv-generic-server.herokuapp.com/api/mcuks/modules"
export const LESSONS_API_URL = "https://wbdv-generic-server.herokuapp.com/api/mcuks/lessons"
export const TOPICS_API_URL = "http://localhost:8080/api/topics"
export const WIDGETS_API_URL = "http://localhost:8080/api/widgets"
export const COURSES_MODULES_API_URL = (courseId) => `https://wbdv-generic-server.herokuapp.com/api/mcuks/courses/${courseId}/modules`
export const MODULES_LESSONS_API_URL = (moduleId) => `https://wbdv-generic-server.herokuapp.com/api/mcuks/modules/${moduleId}/lessons`
export const LESSONS_TOPICS_API_URL = (lessonId) => `http://localhost:8080/api/lessons/${lessonId}/topics`
export const TOPICS_WIDGETS_API_URL = (widgetId) => `http://localhost:8080/api/topics/${widgetId}/widgets`