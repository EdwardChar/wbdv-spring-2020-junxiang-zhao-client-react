export const COURSES_API_URL = "https://wbdv-generic-server.herokuapp.com/api/001057049/courses"
export const MODULES_API_URL = "https://wbdv-generic-server.herokuapp.com/api/001057049/modules"
export const LESSONS_API_URL = "https://wbdv-generic-server.herokuapp.com/api/001057049/lessons"
export const TOPICS_API_URL = "http://wbdv-junxiang-zhao-server-java.herokuapp.com/api/topics"
export const WIDGETS_API_URL = "http://wbdv-junxiang-zhao-server-java.herokuapp.com/api/widgets"
export const COURSES_MODULES_API_URL = (courseId) => `https://wbdv-generic-server.herokuapp.com/api/001057049/courses/${courseId}/modules`
export const MODULES_LESSONS_API_URL = (moduleId) => `https://wbdv-generic-server.herokuapp.com/api/001057049/modules/${moduleId}/lessons`
export const LESSONS_TOPICS_API_URL = (lessonId) => `http://wbdv-junxiang-zhao-server-java.herokuapp.com/api/lessons/${lessonId}/topics`
export const TOPICS_WIDGETS_API_URL = (widgetId) => `http://wbdv-junxiang-zhao-server-java.herokuapp.com/api/topics/${widgetId}/widgets`