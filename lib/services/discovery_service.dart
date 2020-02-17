import 'package:recordwants_ui/common/grpc_commons.dart';
import 'package:recordwants_ui/model/discovery.pb.dart';
import 'package:recordwants_ui/model/discovery.pbgrpc.dart';

class DiscoveryService {
  static Future<GetResponse> Get() async{
    var client = DiscoveryServiceV2Client(GrpcClientSingleton().client);
    return await client.get(GetRequest());
  }
}