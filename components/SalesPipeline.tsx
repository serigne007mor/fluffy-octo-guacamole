import React from 'react';

export default function SalesPipeline() {
  const pipelineStages = [
    {
      id: 'new',
      name: 'New Lead',
      color: 'bg-gray-100',
      borderColor: 'border-gray-300',
      count: 12,
      deals: [
        { id: 1, client: 'Ahmed Al Maktoum', value: 'AED 2.5M', property: 'Dubai Marina Tower', probability: 20 },
        { id: 2, client: 'Sarah Johnson', value: 'AED 1.8M', property: 'Palm Residence', probability: 15 },
      ]
    },
    {
      id: 'qualified',
      name: 'Qualified',
      color: 'bg-blue-100',
      borderColor: 'border-blue-300',
      count: 8,
      deals: [
        { id: 3, client: 'Natasha Ivanova', value: 'AED 4M', property: 'Downtown Penthouse', probability: 45 },
        { id: 4, client: 'Mohammed Ali', value: 'AED 3.2M', property: 'Business Bay Villa', probability: 40 },
      ]
    },
    {
      id: 'viewing',
      name: 'Viewing Scheduled',
      color: 'bg-purple-100',
      borderColor: 'border-purple-300',
      count: 5,
      deals: [
        { id: 5, client: 'Rajesh Kumar', value: 'AED 950K', property: 'JVC Apartment', probability: 60 },
        { id: 6, client: 'Lisa Wang', value: 'AED 1.5M', property: 'Marina Residences', probability: 55 },
      ]
    },
    {
      id: 'offer',
      name: 'Offer Made',
      color: 'bg-yellow-100',
      borderColor: 'border-yellow-300',
      count: 3,
      deals: [
        { id: 7, client: 'David Brown', value: 'AED 2.2M', property: 'Emirates Hills', probability: 80 },
      ]
    },
    {
      id: 'closed',
      name: 'Closed Won',
      color: 'bg-green-100',
      borderColor: 'border-green-300',
      count: 15,
      deals: [
        { id: 8, client: 'Anna Petrova', value: 'AED 3.5M', property: 'Burj Khalifa View', probability: 100 },
        { id: 9, client: 'James Wilson', value: 'AED 1.2M', property: 'Marina Bay', probability: 100 },
      ]
    },
  ];

  const totalValue = pipelineStages.reduce((sum, stage) => 
    sum + stage.deals.reduce((stageSum, deal) => 
      stageSum + parseFloat(deal.value.replace(/[^0-9.]/g, '')), 0
    ), 0
  );

  const totalDeals = pipelineStages.reduce((sum, stage) => sum + stage.count, 0);

  return (
    <div className="space-y-6">
      {/* Header & Stats */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Sales Pipeline</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-4">
            <p className="text-sm text-primary-800 font-medium">Total Deals</p>
            <p className="text-3xl font-bold text-primary-900 mt-1">{totalDeals}</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
            <p className="text-sm text-green-800 font-medium">Pipeline Value</p>
            <p className="text-3xl font-bold text-green-900 mt-1">AED {totalValue.toFixed(1)}M</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4">
            <p className="text-sm text-purple-800 font-medium">Avg. Deal Size</p>
            <p className="text-3xl font-bold text-purple-900 mt-1">AED {(totalValue / totalDeals).toFixed(1)}M</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4">
            <p className="text-sm text-orange-800 font-medium">Conversion Rate</p>
            <p className="text-3xl font-bold text-orange-900 mt-1">32%</p>
          </div>
        </div>
      </div>

      {/* Pipeline Board */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Pipeline Stages</h3>
          <div className="text-sm text-gray-600">
            <span className="mr-4">💡 Tip: Drag deals between stages</span>
          </div>
        </div>

        {/* Pipeline Columns */}
        <div className="overflow-x-auto">
          <div className="flex space-x-4 min-w-max pb-4">
            {pipelineStages.map((stage) => (
              <div key={stage.id} className="w-80 flex-shrink-0">
                {/* Column Header */}
                <div className={`${stage.color} rounded-t-lg p-4 border-b-4 ${stage.borderColor}`}>
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-gray-900">{stage.name}</h4>
                    <span className="bg-white px-2 py-1 rounded text-sm font-medium text-gray-700">
                      {stage.count}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">
                    {stage.deals.reduce((sum, deal) => sum + parseFloat(deal.value.replace(/[^0-9.]/g, '')), 0).toFixed(1)}M
                  </p>
                </div>

                {/* Deal Cards */}
                <div className={`${stage.color} rounded-b-lg p-3 space-y-3 min-h-[400px]`}>
                  {stage.deals.map((deal) => (
                    <div
                      key={deal.id}
                      className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-move"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h5 className="font-medium text-gray-900 text-sm">{deal.client}</h5>
                        <span className="text-xs bg-primary-100 text-primary-800 px-2 py-1 rounded">
                          {deal.probability}%
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">{deal.property}</p>
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                        <span className="text-sm font-bold text-green-600">{deal.value}</span>
                        <div className="flex space-x-1">
                          <button className="text-xs text-gray-600 hover:text-gray-800">📝</button>
                          <button className="text-xs text-gray-600 hover:text-gray-800">👁️</button>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Add Deal Button */}
                  <button className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-sm text-gray-500 hover:border-primary-400 hover:text-primary-600 transition-colors">
                    + Add Deal
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pipeline Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Stage Conversion Rates</h3>
          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-700">New → Qualified</span>
                <span className="text-sm font-medium text-gray-900">67%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '67%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-700">Qualified → Viewing</span>
                <span className="text-sm font-medium text-gray-900">63%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '63%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-700">Viewing → Offer</span>
                <span className="text-sm font-medium text-gray-900">60%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-700">Offer → Closed</span>
                <span className="text-sm font-medium text-gray-900">75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3 pb-3 border-b border-gray-100">
              <span className="text-lg">🎉</span>
              <div>
                <p className="text-sm text-gray-900">Deal closed: Anna Petrova</p>
                <p className="text-xs text-gray-500">AED 3.5M • 2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 pb-3 border-b border-gray-100">
              <span className="text-lg">➡️</span>
              <div>
                <p className="text-sm text-gray-900">Deal moved to Offer stage</p>
                <p className="text-xs text-gray-500">David Brown • 5 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 pb-3 border-b border-gray-100">
              <span className="text-lg">📅</span>
              <div>
                <p className="text-sm text-gray-900">Viewing scheduled</p>
                <p className="text-xs text-gray-500">Lisa Wang • Marina Residences • 1 day ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-lg">✅</span>
              <div>
                <p className="text-sm text-gray-900">Lead qualified</p>
                <p className="text-xs text-gray-500">Mohammed Ali • 2 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
