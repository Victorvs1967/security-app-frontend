export abstract class RestEndpointConstants {
  static readonly ANNOUNCEMENT_ENDPOINT: string = '/rest/api/announcement';
  static readonly ANNOUNCEMENTS_ENDPOINT: string = '/rest/api/announcements';
  static readonly QUESTION_AND_ANSWER_ENDPOINT: string = '/rest/api/questionandanswer';
  static readonly QUESTIONS_AND_ANSWERS_ENDPOINT: string = '/rest/api/questionandanswers';
  static readonly USER_ENDPOINT: string = '/rest/api/user';
  static readonly USERS_ENDPOINT: string = '/rest/api/users';
  static readonly LOGIN_ENDPOINT: string = '/auth/login';
  static readonly SIGNUP_ENDPOINT: string = '/auth/signup';
  static readonly LOGOUT_ENDPOINT: string = '/auth/logout';
  static readonly USER_TOKEN: string = 'userToken';
}