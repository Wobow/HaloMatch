angular.module('starter.controllers', [])

.factory('MatchModel', function ($http) {

    var MatchModel = function (match, mapList, hopperList) {
        this.map = this.getMap(match.MapId, mapList);
        this.gameMode = this.getGameType(match.Id.GameMode);
        this.matchId = match.Id.MatchId;
        this.matchPlaylist = this.getPlaylist(match.HopperId, hopperList);
    };

    MatchModel.prototype.getPlaylist = function (id, hopperList) {
        var j = 0;
        while (hopperList[j] != undefined && hopperList[j].hopperId != id)
            j++;
        if (hopperList[j] == undefined)
            return (hopperList[0]);
        return (hopperList[j]);
    };

    MatchModel.prototype.getMap = function (id, mapList) {
        var j = 0;
        while (mapList[j] != undefined && mapList[j].mapId != id)
            j++;
        if (mapList[j] == undefined)
            return (mapList[0]);
        return (mapList[j]);
    };


    MatchModel.prototype.getGameType = function (type) {
        switch (type) {
            case 1:
                return "Arena";
            case 2:
                return "Campaign";
            case 3:
                return "Custom";
            case 4:
                return "Warzone";
            default:
                return ("Error");
        }
    };
    return MatchModel;
})

.factory('MapModel', function ($http) {

    var MapModel = function (map) {
        this.mapId = map.id;
        this.mapImg = map.imageUrl;
        this.mapName = map.name;
    };
   
    return MapModel;
})

.factory('HopperModel', function ($http) {

    var HopperModel = function (hopper) {
        this.hopperId = hopper.id;
        this.hopperImg = hopper.imageUrl;
        this.hopperName = hopper.name;
    };

    return HopperModel;
})
.controller('DashCtrl', function ($scope) { })

.controller('HomeCtrl', function ($scope, $http, MatchModel, MapModel, HopperModel) {
    $scope.mapList = [];
    $scope.matchList = [];
    $scope.hopperList = [];

    $scope.getAllMaps = function()
    {
        $http({
            method: 'GET',
            url: "https://www.haloapi.com/metadata/h5/metadata/maps",
            headers: {
                'Ocp-Apim-Subscription-Key': "907d6aefaabf42848c1e900229d592a7"
            }
        }).then(function successCallback(response) {
            $scope.status = response.status;
            var lol = response.data;
            var i = 0;
            while (lol[i] != undefined)
            {
                $scope.mapList.push(new MapModel(lol[i]));
                i++;
            }
        }, function errorCallback(response) {
            $scope.status = response.status;
        });
    }

    $scope.getAllPlaylists = function () {
        $http({
            method: 'GET',
            url: "https://www.haloapi.com/metadata/h5/metadata/playlists",
            headers: {
                'Ocp-Apim-Subscription-Key': "907d6aefaabf42848c1e900229d592a7"
            }
        }).then(function successCallback(response) {
            $scope.status = response.status;
            var lol = response.data;
            var i = 0;
            while (lol[i] != undefined) {
                $scope.hopperList.push(new HopperModel(lol[i]));
                i++;
            }
        }, function errorCallback(response) {
            $scope.status = response.status;
        });
    }

    $scope.getAllMatches = function()
    {
        $http({
            method: 'GET',
            url: "https://www.haloapi.com/stats/h5/players/"+ $scope.gamertag + "/matches",
            headers: {
                'Ocp-Apim-Subscription-Key': "907d6aefaabf42848c1e900229d592a7"
            }
        }).then(function successCallback(response) {
            $scope.status = response.status;
            lol = response.data.Results;
            i = 0;
            while (lol[i] != undefined)
            {
                $scope.matchList.push(new MatchModel(lol[i], $scope.mapList, $scope.hopperList));
                console.log($scope.matchList[i]);
                i++;
            }
        }, function errorCallback(response) {
            $scope.status = response.status;
            $scope.matchList = null;
        });
        
    }

    $scope.getAllMaps();
    $scope.getAllPlaylists();
});
