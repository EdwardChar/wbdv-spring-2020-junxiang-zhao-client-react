export const CREATE_LESSON = "CREATE_LESSON";
export const DELETE_LESSON = "DELETE_LESSON";
export const FIND_LESSONS_FOR_MODULE = "FIND_LESSONS_FOR_MODULE";
export const UPDATE_LESSON = "UPDATE_LESSON";

export const deleteLesson = (lessonId) => ({
    type: "DELETE_LESSON",
    lessonId: lessonId
})

export const createLesson = (lesson) => ({
    type: "CREATE_LESSON",
    newLesson: lesson
})

export const findLessonsForModule = (lesson) => ({
    type: 'FIND_LESSONS_FOR_MODULE',
    lessons: lesson
})

export const updateLesson = (lesson) => ({
    type: "UPDATE_LESSON",
    lessonId: lesson._id,
    lesson: lesson
})