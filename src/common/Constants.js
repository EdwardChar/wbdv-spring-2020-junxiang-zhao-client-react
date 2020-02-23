export const COURSES_API_URL = "https://wbdv-generic-server.herokuapp.com/api/mcuks/courses"
export const MODULES_API_URL = "https://wbdv-generic-server.herokuapp.com/api/mcuks/modules"
export const LESSONS_API_URL = "https://wbdv-generic-server.herokuapp.com/api/mcuks/lessons"
export const TOPICS_API_URL = "https://wbdv-generic-server.herokuapp.com/api/mcuks/topics"
export const WIDGETS_API_URL = "https://wbdv-generic-server.herokuapp.com/api/mcuks/widgets"
export const COURSES_MODULES_API_URL = (courseId) => `https://wbdv-generic-server.herokuapp.com/api/mcuks/courses/${courseId}/modules`
export const MODULES_LESSONS_API_URL = (moduleId) => `https://wbdv-generic-server.herokuapp.com/api/mcuks/modules/${moduleId}/lessons`
export const LESSONS_TOPICS_API_URL = (lessonId) => `https://wbdv-generic-server.herokuapp.com/api/mcuks/lessons/${lessonId}/topics`
export const WIDGETS_LESSONS_API_URL = (widgetId) => `https://wbdv-generic-server.herokuapp.com/api/mcuks/widgets/${widgetId}/widgets`