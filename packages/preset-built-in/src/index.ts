export default () => {
  return {
    plugins: [
      //
      require.resolve('./registerMethods'),

      // tmp files
      require.resolve('./tmpFiles/tmpFiles'),

      // commands
      require.resolve('./commands/build'),
      require.resolve('./commands/dev/dev'),
      require.resolve('./commands/help'),
      require.resolve('./commands/version'),
    ],
  };
};