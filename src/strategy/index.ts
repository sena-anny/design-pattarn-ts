interface routeStrategy {
  buildRoute(from: number, to: number): number
}

class BikeStrategy implements routeStrategy {
  buildRoute(from: number, to: number): number {
    return (to - from) / 3
  }
}

class WalkingStrategy implements routeStrategy {
  buildRoute(from: number, to: number): number {
    return (to - from) / 2
  }
}

class PublicTransportStrategy implements routeStrategy {
  buildRoute(from: number, to: number): number {
    return (to - from) / 5
  }
}

class RouteNavigator {
  private routeStrategy: routeStrategy

  constructor(strategy: routeStrategy) {
    this.routeStrategy = strategy
  }

  changeRouteStrategy(strategy: routeStrategy) {
    this.routeStrategy = strategy
  }

  buildRoute(from: number, to: number): number {
    return this.routeStrategy.buildRoute(from, to)
  }
}

function main() {
  const navi = new RouteNavigator(new WalkingStrategy())
  console.log('walking', navi.buildRoute(0, 20))
  navi.changeRouteStrategy(new PublicTransportStrategy())
  console.log('pub', navi.buildRoute(0, 20))
}

main()
