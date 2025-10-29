export const NodeEndpoints = {
  health: '/v1/health',
  info: '/v1/info',
  printer: {
    connect: '/v1/printer/connect',
    control: {
      movement: {
        home: '/v1/printer/control/movement/home',
      },
      display: {
        message: '/v1/printer/control/display/message',
      },
    },
  },
};
