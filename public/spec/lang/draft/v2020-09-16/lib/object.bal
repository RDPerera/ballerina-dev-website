// Copyright (c) 2019 WSO2 LLC (http://www.wso2.org) All Rights Reserved.
//
// WSO2 LLC licenses this file to you under the Apache License,
// Version 2.0 (the "License"); you may not use this file except
// in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

# Represents the shape expected from all listeners.
public type Listener distinct object {
    # Handle service attachment to the listener.
    #
    # + s - the service to attach
    # + name - optionally a name associated with the service
    # + return - `()` if no error occurred, and an error otherwise
    public function attach(service s, string? name = ()) returns error?;

    # Handle service detachment from the listener.
    #
    # + s - the service to detach
    # + return - `()` if no error occurred, and an error otherwise

    public function detach(service s) returns error?;
    # Handle listener start.
    #
    # + return - `()` if no error occurred, and an error otherwise
    public function start() returns error?;

    # Handle listener graceful stop.
    #
    # + return - `()` if no error occurred, and an error otherwise
    public function gracefulStop() returns error?;

    # Handle listener immediate stop.
    #
    # + return - `()` if no error occurred, and an error otherwise
    public function immediateStop() returns error?;
};


# Distinct Iterable type.
# An object can make itself iterable by using `*object:Iterable;`,
# and then defining an `iterator` method.
public type Iterable distinct object {
    # Create a new iterator.
    #
    # + return - a new iterator object
    public function iterator() returns abstract object {
        public function next() returns record {| any|error value; |}|error?;
    }
}

# Distinct RawTemplate type.
# A raw template expression constructs an object belonging to this type.
public type RawTemplate distinct object {
    # An array of the strings containing the characters in BacktickString
    # outside of interpolations, split at the interpolation points.
    # The length of this array is one greater than
    # the length of the `insertions` array.
    public (readonly & string[]) strings;
    # An array containing the results of evaluating the
    # interpolations in the BacktickString.
    public (any|error)[] insertions;
};
