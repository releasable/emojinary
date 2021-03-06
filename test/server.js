import chai from 'chai';

import server from '../app/server';

const expect = chai.expect;

describe('POST :: /emojinary', () => {
  describe('action :: new', () => {
    it('should return a creation phrase for successfully creating a Emojinary', (done) => {
      server.inject({
        method: 'POST',
        url: '/emojinary',
        payload: {
          token: 'test',
          team_id: 'T001',
          team_domain: 'test',
          channel_id: 'C2147483705',
          channel_name: 'test',
          user_id: 'U2147483697',
          user_name: 'kurt',
          command: '/emojinary',
          text: 'new emojinary=[:smile: :camera:] hint=[smile for the camera!] answer=[selfie]'
        }
      }, (res) => {
        expect(res.result).to.equal('Emojinary set! :smile:');
        done();
      });
    });
  });
});
