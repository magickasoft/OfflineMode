'use strict';

import gql from 'graphql-tag'

export const allUsers = gql`
    query allUsers {
        users {
          uid
          name
          fullname
          lastname
          city {
            tid
            name
            fias_aoguid
          }
        }
    }`;

export const getUserById = gql`query getUserByUid($u_id: Int!) {
    user(uid: $u_id) {
      uid
      name
    }
  }`;

export const getUserByIdAllFields = gql`query getUserByUid($u_id: Int!) {
    user(uid: $u_id) {
      uid
      name
      firstname
      lastname
      position
      phones
      city {
        tid
        name
        fias_aoguid
      }
      mail
    }
  }`;
