# coding=utf-8
# --------------------------------------------------------------------------
# Copyright (c) Microsoft Corporation. All rights reserved.
# Licensed under the MIT License. See License.txt in the project root for
# license information.
#
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from .channel import Channel


class SlackChannel(Channel):
    """Slack channel definition.

    :param channel_name: Constant filled by server.
    :type channel_name: str
    :param properties: The set of properties specific to Slack channel
     resource
    :type properties: ~azure.mgmt.botservice.models.SlackChannelProperties
    """

    _validation = {
        'channel_name': {'required': True},
    }

    _attribute_map = {
        'channel_name': {'key': 'channelName', 'type': 'str'},
        'properties': {'key': 'properties', 'type': 'SlackChannelProperties'},
    }

    def __init__(self, properties=None):
        super(SlackChannel, self).__init__()
        self.properties = properties
        self.channel_name = 'SlackChannel'
